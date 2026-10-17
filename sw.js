// Service worker: makes the app installable and fully usable offline.
// - App files (page, cards.js, ...): network first, so new words show up when you're online;
//   falls back to the saved copy offline.
// - Pictures: saved once and then served from the phone. On install, every picture
//   listed in cards.js is downloaded so the whole deck works offline from day one.
// If you change the list of app files below, bump APP.
const APP = "tarjetas-app-v1";
const IMG = "tarjetas-img-v1";
const SHELL = [
  "./",
  "./index.html",
  "./cards.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon.png"
];

async function cacheAllPictures() {
  const res = await fetch("./cards.js", { cache: "no-cache" });
  const src = await res.text();
  const names = [...new Set([...src.matchAll(/img:\s*"([^"]+)"/g)].map(m => m[1]))];
  const cache = await caches.open(IMG);
  const have = new Set((await cache.keys()).map(r => new URL(r.url).pathname.split("/").pop()));
  const todo = names.map(n => `./images/${n}.webp`).filter(u => !have.has(u.split("/").pop()));
  // a few at a time so a slow phone connection isn't swamped
  for (let i = 0; i < todo.length; i += 12) {
    await Promise.all(todo.slice(i, i + 12).map(u => cache.add(u).catch(() => {})));
  }
}

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(APP).then(c => c.addAll(SHELL))
      .then(cacheAllPictures)
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== APP && k !== IMG).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => cacheAllPictures().catch(() => {}))   // picks up pictures for newly added words
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Pictures and Google Fonts: saved copy first
  const isImg = url.origin === location.origin && url.pathname.includes("/images/");
  const isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (isImg || isFont) {
    const name = isImg ? IMG : APP;
    e.respondWith(
      caches.open(name).then(c => c.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
        if (res.ok || res.type === "opaque") c.put(req, res.clone());
        return res;
      })))
    );
    return;
  }

  // Our own files: network first, fall back to cache
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(APP).then(c => c.put(req, copy)); }
        return res;
      }).catch(() =>
        caches.match(req, { ignoreSearch: true })
          .then(hit => hit || (req.mode === "navigate" ? caches.match("./index.html") : undefined))
      )
    );
  }
});

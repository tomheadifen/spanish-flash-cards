// Numbers practice (Números), from Weeks 1 and 2 at Taronja.
// Each topic is a fixed list of numbers (so "learned" progress sticks); the words are built by NUM_ENGINE below.
// img on a topic is a file in images/ (without .webp). plain: true = write without the thousands dot (years).
window.NUMBERS = [
  { id: "n-0", es: "Del 0 al 29", en: "0 to 29", img: "keycap-10",
    n: [0, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 26, 27, 29] },
  { id: "n-1", es: "Del 30 al 99", en: "30 to 99", img: "abacus",
    n: [30, 31, 34, 42, 45, 50, 52, 58, 60, 63, 65, 70, 73, 76, 81, 88, 94, 99] },
  { id: "n-2", es: "Del 100 al 999", en: "100 to 999", img: "hundred-points",
    n: [100, 101, 107, 115, 160, 182, 200, 278, 300, 419, 500, 555, 600, 700, 777, 853, 900, 999] },
  { id: "n-3", es: "Del 1.000 al 9.999", en: "1,000 to 9,999", img: "money-bag",
    n: [1000, 1001, 1100, 1200, 1515, 2000, 2500, 3000, 4321, 5050, 5700, 6900, 7777, 8000, 8100, 9000, 9050, 9999] },
  { id: "n-4", es: "Hasta 999.999", en: "10,000 to 999,999", img: "euro-banknote",
    n: [10000, 12000, 15500, 20000, 25000, 33333, 45600, 50000, 99999, 100000, 150000, 200000, 250000, 500000, 555555, 700000, 800000, 999999] },
  { id: "n-5", es: "Los años", en: "Years", img: "spiral-calendar", plain: true,
    n: [1492, 1900, 1939, 1969, 1975, 1984, 1989, 1992, 1999, 2001, 2008, 2010, 2015, 2020, 2024, 2026, 2030, 1812] },
  { id: "n-6", es: "Un millón (nuevo)", en: "Millions (new: un millón, dos millones)", img: "globe-showing-europe-africa",
    n: [1000000, 2000000, 3000000, 1500000, 2500000, 1200000, 4750000, 5000000, 10000000] }
];

window.NUM_ENGINE = (function () {
  const U = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince",
    "dieciséis", "diecisiete", "dieciocho", "diecinueve", "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco",
    "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
  const TENS = { 3: "treinta", 4: "cuarenta", 5: "cincuenta", 6: "sesenta", 7: "setenta", 8: "ochenta", 9: "noventa" };
  const HUN = { 1: "ciento", 2: "doscientos", 3: "trescientos", 4: "cuatrocientos", 5: "quinientos", 6: "seiscientos", 7: "setecientos", 8: "ochocientos", 9: "novecientos" };
  const w99 = n => n < 30 ? U[n] : TENS[Math.floor(n / 10)] + (n % 10 ? " y " + U[n % 10] : "");
  const w999 = n => n === 100 ? "cien" : [n >= 100 ? HUN[Math.floor(n / 100)] : "", n % 100 ? w99(n % 100) : ""].filter(Boolean).join(" ");
  const apoc = s => s.replace(/veintiuno$/, "veintiún").replace(/uno$/, "un");   // uno → un before mil / millones
  function words(n) {
    if (n === 0) return "cero";
    const m = Math.floor(n / 1e6), th = Math.floor(n / 1000) % 1000, r = n % 1000, out = [];
    if (m) out.push(m === 1 ? "un millón" : apoc(w999(m)) + " millones");
    if (th) out.push(th === 1 ? "mil" : apoc(w999(th)) + " mil");
    if (r) out.push(w999(r));
    return out.join(" ");
  }
  const fmt = (n, plain) => plain ? String(n) : String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Wrong tiles that match real mistakes.
  const TRAPS = {
    quinientos: ["cincocientos"], setecientos: ["sietecientos"], novecientos: ["nuevecientos"], doscientos: ["doscientas"],
    cien: ["ciento"], ciento: ["cien", "cientos"], mil: ["miles", "un"], millones: ["millón"], "millón": ["millones"],
    sesenta: ["setenta"], setenta: ["sesenta"], cinco: ["quince"], quince: ["cinco"], cero: ["nada"]
  };
  const POOL = U.slice(1, 16).concat(Object.values(TENS), Object.values(HUN), ["veinte", "mil"]);
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function tiles(n) {
    const right = words(n).split(" "), traps = [];
    right.forEach(w => {
      (TRAPS[w] || []).forEach(t => traps.push(t));
      if (/^dieci/.test(w)) traps.push("diez", "y");              // diez y nueve → diecinueve
      if (/^veinti/.test(w)) traps.push("veinte", "y");           // veinte y tres → veintitrés
    });
    const hundreds = Object.values(HUN);
    if (right.some(w => hundreds.includes(w)) && right.some(w => !hundreds.includes(w) && w !== "mil")) traps.push("y");   // trap: no y after the hundreds
    const extra = [];
    for (const t of shuffle(traps)) if (extra.length < 3 && (!right.includes(t) || t === "y") && !extra.includes(t)) extra.push(t);
    for (const t of shuffle(POOL.slice())) if (extra.length < 4 && !right.includes(t) && !extra.includes(t)) extra.push(t);
    return { right, tiles: shuffle(right.concat(extra)) };
  }
  return { words, fmt, tiles };
})();

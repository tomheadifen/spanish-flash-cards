# Tarjetas · Spanish flashcards

Picture flashcards for Spain Spanish vocabulary: 504 words in 29 topics, split into groups of 7–9.
Live at **https://tomheadifen.github.io/spanish-flash-cards/**

## How it works

The app opens straight into the cards.

- **Front:** just the picture. Say the word in your head.
- **Tap to flip:** the Spanish word (with its article, so you learn the gender) over a faded picture, plus a small English translation. The speaker button reads it aloud in a Spain Spanish voice.
- **Swipe right or tap Got it** when you knew it. **Swipe left or tap Again** to see it again a few cards later. **Skip** moves on without marking it.
- Words you haven't learned come first, shuffled. Progress is saved on the device.

Big topics are split into evenly sized groups of 7–9 words (e.g. 25 words → 9 + 8 + 8), so you can study one
bite-sized group at a time. Tick a whole topic or just one of its groups.

Tap the **Topics** button (top left) to choose which topics or groups to study and change options:
unlearned only, say the word when flipped, show English on the back, light/dark theme, reset progress.

Keyboard on desktop: <kbd>Space</kbd> flip, <kbd>→</kbd>/<kbd>G</kbd> got it, <kbd>←</kbd>/<kbd>A</kbd> again, <kbd>S</kbd> skip, <kbd>P</kbd> say it, <kbd>T</kbd> topics, <kbd>Esc</kbd> close topics.

## Install as an app (PWA)

- **Android (Chrome):** tap **Install app** in the Topics screen, or ⋮ menu → *Install app*.
- **iPhone (Safari):** Share → *Add to Home Screen*.

It opens full-screen and works offline: the first visit saves every picture on your phone (about 4 MB).

## Adding words

Words live in `cards.js`. Add `{ es: "la palabra", en: "word", img: "image-name" }` to a topic,
where `img` is a file in `images/` without the `.webp`. Groups rebalance automatically; topic sizes that split
cleanly into 7–9 are 7–9, 14–18, 21–27 and 28–36 words (a size in between gets one slightly larger group). To add a picture, take the 3D PNG from
[Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji/tree/main/assets) and save it
as WebP in `images/`. New pictures are picked up by the offline cache automatically.

## Credits

Pictures: [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji), MIT licence (see `images/LICENSE`).

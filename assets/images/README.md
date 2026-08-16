# Project Screenshots

Har project ka apna folder hai:

```
assets/images/
  quicoo/              ← Quicoo  (+ ios/ subfolder)
  wradio/              ← Wradio.be  (+ android/ subfolder)
  hubspoke/            ← Hub & Spoke (National Health Mission)
  layerscart/          ← LayerCart
  scottish/            ← Scottish Convent School
  radhakrishan/        ← Dr. Radhakrishnan School
  pds/                 ← P.D.S. School
  astrosane/           ← AstroSane (already added)
  astroganga/          ← AstroGanga
  dhakad-employee/     ← Dhakad Protsahan (Employee)
  dhakad-contractor/   ← Dhakad Protsahan (Contractor)
  btown/               ← B Town
```

## Screenshots add karne ka tarika (2 steps)

**1.** Screenshots us project ke folder me daal dein. Naam kuch bhi ho sakta hai
(`1.webp`, `home.jpg`, `screen-1.png` — jo bhi). Format bhi koi bhi: `.jpg`, `.png`, `.webp`.

**2.** `script.js` kholein — sabse upar `PROJECT_SCREENS` list hai. Us project ke aage
filenames likh dein, jis order me dikhane hain:

```js
astroganga: [
  '1.webp',
  '2.webp',
  '3.webp',
],
```

Bas. HTML bilkul chhune ki zaroorat nahi — cards, phone slider, dots, "N Screens" badge,
hero carousel aur case-study modal ki gallery sab apne aap ban jaate hain.

### Caption bhi chahiye?

String ki jagah object likh dein:

```js
astrosane: [
  { file: 'screen-1.jpg', label: 'Services & Kundli Hub' },
  { file: 'screen-2.jpg', label: 'Astrologer Directory' },
],
```

Label na dene par caption apne aap "Screen 1", "Screen 2" ban jaata hai.

## Notes

- List **khaali** chhod dein to us project ka branded placeholder tile dikhta rahega —
  page kabhi toota hua nahi lagega.
- **Kitni screenshots**: 1 se 5 tak best lagti hain. 1 hone par arrows/dots nahi aate.
- **Aspect ratio**: normal phone screenshot (approx 9:19.5). Cards `object-fit: cover`
  use karte hain, to image ka upar wala hissa hamesha dikhta hai.
- **File size**: 500 KB se kam rakhein — `astrosane/screen-5.jpg` abhi 5.6 MB ka hai,
  usse page slow hota hai. Compress karna ho to [squoosh.app](https://squoosh.app) use kar sakti hain.
- **Subfolder** bhi chalega — manifest me path likh dein: `'android/3.webp'`, `'ios/1.webp'`.
- **Card vs modal**: work card me sirf pehli **5** screens aati hain (`CARD_SCREEN_LIMIT` in `script.js`),
  case-study modal me poori list dikhti hai. Badge par total count aata hai.
- Jo files manifest me list nahi hain wo kahin use nahi hoti — spare rakhi ja sakti hain
  (`astrosane/extra-*.jpg`, `quicoo/ios/*`, `wradio/android/1-2`).

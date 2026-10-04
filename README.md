# Athena Bao portfolio

Next.js App Router portfolio with a client-only React Leaflet map and a photo quiz.

```sh
npm install
npm run dev
npm run build
```

## Content

Edit `app/data.js` for projects, experience, gallery photos, and destinations.
Add destination objects with unique IDs, names, coordinates, photo paths, alt text,
and captions to extend the map. Destinations with photos also become quiz rounds.
The quiz has four choices per round; missing photos are excluded.

Remaining content is marked `[TODO]`: Hong Kong's exchange photo, FoodTrack's
purpose and hard problem, Apexys's hard problem, other public repository links,
and detailed case studies. ApartMate's purpose and prototype behavior were checked
against its public source: https://github.com/athenabao/Apartmate-App.

Original photos are preserved in `public/`. Giza and Women in Computing JPEGs
were restored from commit `4ba0a6e`; the latest tracked copies were invalid
two-byte files. The previous HTML URLs redirect to
the new routes. The homepage renders a single contact section.

## Vercel

`vercel.json` sets the Next.js framework preset and build command. Use the
repository root as Root Directory.
Build command: `npm run build`. Leave Output Directory at the framework default.
The checkout originally contained static HTML, so an existing Vercel project
using the Other preset or a custom output directory must update those settings.
No API key or environment variable is required. The map loads OpenStreetMap
tiles from the browser; it shows a notice if tiles cannot load.

## Browser verification

```sh
npx playwright install chromium
npm run dev
npx playwright test
```

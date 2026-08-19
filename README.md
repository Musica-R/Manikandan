# Manikandan — Director Portfolio

React + React Router site: warm white hero flowing into a light-teal
section (matching the footer's own reel/filmstrip motif), a chrome/glass
navigation bar, and the original dark-teal footer with a silver shimmer
layered on top.

## Run it

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

## Build for production

```bash
npm run build
```

## Swap in the real portrait photo

`src/data/content.js` currently points `images.portrait` at a placeholder
SVG (`src/assets/images/profile-placeholder.svg`) since no real photo was
supplied. Drop the actual photo into `src/assets/images/` and update the
import at the top of `content.js`:

```js
import profilePhoto from "../assets/images/your-photo.jpg";
```

## Structure

```
src/
  components/
    Header/        chrome/glass nav, react-router NavLinks
    Hero/           white/cream hero, filmstrip wave into the teal section
    FlowSection/    light-teal "craft" section
    PageHero/       shared banner for inner pages
    Footer/         original footer, silver-shimmer enhancements layered in
    Layout/         Header + <Outlet /> + Footer wrapper
  pages/            Home, About, Filmography, Gallery, Awards, Contact
  data/content.js   all site copy and links in one place
  styles/global.css design tokens (color, type, spacing)
```

## Notes

- All CONFIRM-flagged copy in `data/content.js` (spellings, email, phone)
  was carried over from the original notes and should be verified before
  publishing.
- Contact form and newsletter form are front-end only — wire up an
  endpoint or a service (Formspree, EmailJS, etc.) before going live.

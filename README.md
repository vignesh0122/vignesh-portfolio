# Vignesh Swaminathan — Portfolio

A single-page portfolio with three **lenses** (AI Engineer · Cloud & IT · Research). Switching the lens re-themes the site, rewrites the hero, and re-ranks experience, projects, and skills for that audience.

Built with React 19, Vite 7, [Motion](https://motion.dev), and plain CSS (OKLCH tokens).

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve dist/
npm run lint
```

Deploys as a static site (Vercel / Netlify, root path, no extra config).

## Interactions

| Thing | Where |
|---|---|
| Lens switcher (`1` / `2` / `3`, arrow keys) | top bar |
| Theme toggle (`T`) | top bar |
| Cursor-reactive dot field, text scramble on lens change | hero |
| Horizontal scroll-driven timeline (vertical on touch / narrow / reduced motion) | Experience |
| 3D tilt cards that morph into a detail dialog | Projects |
| Skill chips: hover shows where a skill was used, click pins it and dims non-matches | Skills |
| `Esc` clears a pinned skill / closes the dialog | anywhere |

Reduced-motion users get opacity-only transitions and the vertical timeline.

## Editing content

Everything lives in `src/data/`:

- `profile.js` — name, contact, socials, resume files
- `lenses.js` — per-lens headline, tagline, stats, section intros
- `experience.js`, `projects.js`, `publications.js` — content with per-lens `lens: { ai, cloud, research }` weights (3 featured · 2 normal · 1 compact · 0 hidden)
- `skills.js` — skill registry + groups; every skill id used in experience/projects must exist here

Resume files are served from `public/resume/`.

## Structure

```
src/
  context/     LensProvider, ThemeProvider, HighlightProvider
  hooks/       useLens, useTheme, useHotkeys, useTilt, useScramble, …
  lib/         selectors (lens ranking, skill index), formatting, storage
  styles/      tokens.css (lens × theme), base.css, utilities.css
  components/  layout, hero, timeline, projects, skills, publications, contact, ui
```

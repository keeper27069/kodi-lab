# Kodi Lab — the Kodi edition of the webinar lessons

A separate copy of the Bit Lab site (same 78 lessons, uz / ru / en) in the "Editor" look of
[myupi/darsliklar](https://github.com/myupi/darsliklar): light desk with a dot grid, CoddyCamp orange `#FA4F28`,
LMS header (section label · 4/17 · hint · pause) with a segmented progress bar, footer with
"Orqaga" / "Davom etish", VS Code editor, Chrome browser frame, "Barakalla!" result panels,
a glitch transition between screens and Kodi the robot, who reads each screen aloud with the
browser's voice (pause in the header turns voice and sounds off).

## Kodi edition build (single page, no npm install needed)

```bash
node scripts/build-kodi.mjs            # → dist/index.html (+ dist/emoji/)
node scripts/build-kodi.mjs --out=pub  # also writes pub/artifact.html for publishing as a page
cd dist && python3 -m http.server 5299 # open http://localhost:5299/#/uz
BASE_URL=http://localhost:5299 node scripts/smoke-kodi.mjs all --lang=uz --no-shots
```

`src/vendor/` holds small stand-ins for framer-motion (Web Animations), react-router (hash routes)
and CodeMirror (VS Code-style textarea), so the build needs only esbuild and React.
Routes live after `#` (`#/uz/html/first-website/3`), so the page works from any static host.

---

# Bit Lab — interactive webinar presentations

One site for all **78 webinar topics** (HTML, CSS, Bootstrap, Tilda & Git, JS, React).
Each lesson is a full-screen interactive presentation for a **YouTube live stream**: the mentor shares the
browser window and clicks, the students (10–17) take part through the chat.
Languages: **Oʻzbekcha** (default), **Русский**, **English**.

## Run

```bash
npm install
npm run dev          # http://localhost:5173
npm run check        # typecheck + production build
```

## Presenting

Open a lesson, press **P** to open the presenter window on your second screen (notes, timers, next scene) and share only the main window.

| Key | Action |
|---|---|
| → / Space / PageDown | next step / next scene (works with a clicker) |
| ← / PageUp | back |
| 1–9 | pick an option in the current poll / tab |
| R | reset the current scene |
| H | hint |
| O | overview of all scenes |
| P | presenter window |
| N | notes on top of the stage (single screen only — visible on stream!) |
| F | fullscreen |

Scene state is kept while you go back and forth and survives an accidental reload.

## Adding a lesson

See `src/engine/ENGINE.md`. In short: create `src/lessons/<module>/<slug>/` (content in `ru/uz/en`, one file per scene), add one line to `READY` in `src/lessons/registry.ts`, then run:

```bash
npm run check
npm i --no-save playwright && npx playwright install chromium
npm run smoke -- <lesson-id>     # every scene × 3 languages: errors, overflow, dead ends, screenshots in .smoke/
```

## Deploy

Import the repository in [Vercel](https://vercel.com/new) (framework: Vite) — every push to `main` updates the site and every pull request gets a preview link. `vercel.json` already contains the SPA rewrite.

## Structure

```
src/engine/     player, presenter window, scene components, interactions, code tools
src/catalog/    home page and module pages
src/lessons/    topics.ts (all 78 topics), registry.ts, one folder per lesson
src/i18n/       interface strings in uz / ru / en
scripts/smoke.mjs
```

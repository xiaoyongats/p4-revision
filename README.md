# P4 Exam Revision App

A simple web app for Primary 4 Science and Math revision: learning points, diagrams, "watch out" traps and self-marking quizzes for 35 topics (Science, Math, English). No server, no install, no account. Progress (ticked sections, best quiz scores) is saved in the browser on that device.

## Use it on this computer

Double-click **`docs/index.html`**. It opens in your browser and works offline. Fonts load from Google Fonts when online; without internet the pages use a similar built-in font.

## Put it on GitHub Pages (free web link)

1. Create a new repository on GitHub (e.g. `p4-revision`). Public is needed for free GitHub Pages.
2. Upload this folder (or at least the `docs/` folder) to the repository. With git:
   ```bash
   git init
   git add .
   git commit -m "P4 revision app"
   git branch -M main
   git remote add origin https://github.com/<your-name>/p4-revision.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder: `/docs` → Save**.
4. After a minute the app is live at `https://<your-name>.github.io/p4-revision/`.

The `.gitignore` keeps the downloaded exam-paper PDFs out of the repository. They are school papers from other websites, so don't publish them.

## Folder layout

| Folder | What is in it |
|---|---|
| `docs/` | **The app.** `index.html` is the home page; `science/` and `math/` hold the topic pages. This is what you open or publish. |
| `science/` | Science notes (`*.md`), the 4 science exam papers, and `learning-points/` (page sources and build scripts). |
| `math/` | Math README, exam papers in `papers/`, and `learning-points/` (page sources and build scripts). |
| `english/` | English README, exam papers in `papers/`, and `learning-points/` (page sources and build scripts). |
| `tools/` | `build_app.py` and the home page template `home.html`. |

## Changing the content

1. Edit a topic in `science/learning-points/build/content/` or `math/learning-points/build/content/`.
2. Rebuild that subject's pages:
   ```bash
   cd science/learning-points && python build/build.py
   ```
   (or `cd math/learning-points && python build/build.py`)
3. Rebuild the app from the `p4` folder:
   ```bash
   python tools/build_app.py
   ```
4. If it is on GitHub, commit and push again.

Progress is kept per browser and device. Use **Clear my progress** at the bottom of the home page to start over.

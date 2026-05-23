# Personal Homepage

A responsive, bilingual static personal homepage built with plain HTML, CSS, and JavaScript.

## Preview

Serve the folder with any static server so the browser can load `data/content.json`:

```bash
python3 -m http.server 8765
```

Then open `http://127.0.0.1:8765/`.

Opening `index.html` directly can still work, but some browsers block local JSON requests from `file://` pages and will fall back to the embedded sample content.

## GitHub Pages

This folder is ready to publish as a static GitHub Pages site. Put the files at the root of a repository and enable Pages from the `main` branch root in the repository settings.

Typical first publish:

```bash
git init
git add .
git commit -m "Publish personal homepage"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

If you use a user site repository named `<your-username>.github.io`, the homepage will be served from `https://<your-username>.github.io/`.

## Local admin editor

Use the local admin server when you want to update `data/content.json` through a browser form and save changes back to disk:

```bash
python3 local_admin_server.py
```

Then open `http://127.0.0.1:8766/admin.html`.

The admin server also serves the site preview at `http://127.0.0.1:8766/`. Each save writes `data/content.json` and keeps the previous version at `data/content.backup.json`.

## Content

- Edit `data/content.json` to update the Chinese and English copy, projects, posts, tags, and contact links.
- Update the homepage profile image through `profile.image.src`; place local images in `assets/` and use paths such as `assets/avatar.jpg`.
- The homepage shows the first three projects; `projects.html` shows the full project list.
- Project cards open `project.html?id=<project-id>` for a data-driven detail page.
- The homepage shows the first three blog posts; `blog.html` shows the full post list.
- Blog posts support an optional `image` object with `src` and `alt`; images are shown on cards and in the article dialog.
- Replace `assets/profile-placeholder.svg` with your real avatar or preferred visual asset.
- `app.js` includes matching fallback content so the page still works when opened directly from the filesystem, where some browsers block local JSON requests.

# samsadtler.com

Sam Sadtler's portfolio site — a static site built with [Next.js](https://nextjs.org) (Pages Router) and exported to plain HTML/CSS/JS, deployed on [Netlify](https://www.netlify.com).

## Stack

- **Next.js 16** + **React 18**, static export (`output: "export"` → `out/`)
- **react-bootstrap 2** / **Bootstrap 5**, styles in **Sass** (`styles/`)
- Blog posts are Markdown in `posts/`, rendered via `gray-matter` + `remark-html`
- Package manager: **Bun**

## Project layout

```
pages/            Routes (index, about, resume, contact, 404, [slug])
components/        Header, Layout, SEO
lib/posts.js      Reads posts/*.md -> slug, title, HTML
posts/            Markdown blog posts (frontmatter: path, title, date, imgMain)
public/images/    Images, served at /images/*
styles/           site.scss + _additions.scss (global, imported in _app.js)
```

Each post's route comes from its frontmatter `path` (e.g. `path: "/crete"` → `/crete`).

## Develop

```sh
bun install
bun run dev      # http://localhost:3000
```

## Build

```sh
bun run build    # static export to out/
```

## Deploy (Netlify)

Configured in `netlify.toml`:

- Build command: `bun run build`
- Publish directory: `out`
- Node version: `22` (also in `.nvmrc`)

Netlify auto-detects `bun.lock` and installs with Bun. On the first deploy after
switching from the old Gatsby setup, use **Clear cache and deploy site**.

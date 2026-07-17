<div align="center">

# Milind Mishra — Portfolio

**Engineer-turned-leader who still builds.**

A fast, accessible, SEO-optimized personal portfolio built with [Astro](https://astro.build) — ships **zero JavaScript by default**, so it loads instantly and scores near-perfect on Lighthouse.

🌐 **Live at [milindmishra.xyz](https://milindmishra.xyz)**

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Node](https://img.shields.io/badge/Node-22.x-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org)
![Zero JS by default](https://img.shields.io/badge/JS%20shipped-0kb%20by%20default-success)
![License](https://img.shields.io/badge/license-personal-lightgrey)

</div>

---

## ✨ Overview

A single-page portfolio that tells one story: a software engineer who moved into leadership and never stopped shipping. It showcases real internal tools built at Simactricals, a decade-long career timeline, certifications, awards, and a working contact form — all wrapped in a clean, animated, dark-mode-aware design.

The site is **content-driven**: every project, job, certificate, and hobby lives in a plain data file under [`src/data/`](src/data/). You update your portfolio by editing data — not by digging through markup.

## 🎯 Features

| | |
| --- | --- |
| ⚡ **Zero-JS by default** | Astro ships only the tiny scripts that are actually needed (theme toggle, filters, typing effect). |
| 🌗 **Dark / light mode** | Respects system preference, remembers your choice, no flash-of-wrong-theme on load. |
| 🎬 **Lazy YouTube embeds** | Project demos load a thumbnail first; the player loads only on click via `youtube-nocookie.com` — fast and privacy-friendly. |
| 🏷️ **Filterable projects** | Tag-based filtering (All / AI / Web / Data / Internal Tools). |
| 📇 **Career timeline** | Vertical, animated timeline of roles and education. |
| 🏅 **Certificates & awards** | Grid of credentials with verify links and downloadable PDFs. |
| ✉️ **Working contact form** | Floating labels, inline validation, animated success state — powered by [Web3Forms](https://web3forms.com), with a graceful `mailto:` fallback if no key is set. |
| 🔍 **SEO-ready** | Semantic HTML, Open Graph + Twitter cards, JSON-LD `Person` schema, auto-generated sitemap, and `robots.txt`. |
| ♿ **Accessible** | Keyboard-navigable, ARIA-labelled, respects `prefers-reduced-motion`, visible focus rings. |
| 📱 **Fully responsive** | Mobile-first layout with a collapsible menu. |

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** — static-site framework, zero client JS by default
- **Vanilla CSS** — custom properties for theming, scoped component styles, no CSS framework
- **TypeScript** — for the data files and component logic
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — automatic sitemap generation
- **[Web3Forms](https://web3forms.com)** — serverless contact-form delivery

> **Why Astro over vanilla HTML?** It feels like writing HTML, but adds components, image optimization, and content collections — giving the maintainability of a framework with the performance of a static file.

## 🚀 Getting Started

**Prerequisites:** Node.js **22+** (an [`.nvmrc`](.nvmrc) is included — run `nvm use` to match).

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the dev server → http://localhost:4321
npm run dev

# 3. Build for production into dist/
npm run build

# 4. Preview the production build locally
npm run preview
```

| Command           | Action                                        |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start local dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`         |
| `npm run preview` | Serve the built site locally to preview it     |
| `npm run astro`   | Run Astro CLI commands                          |

## 📁 Project Structure

```
site/
├── public/                     # Static assets served as-is
│   ├── assets/
│   │   ├── photo/              # Profile photo
│   │   ├── cv/                 # Downloadable résumé (PDF)
│   │   ├── certificates/       # Certificate PDFs
│   │   └── og/                 # Social share image (og-image.png)
│   └── robots.txt
├── src/
│   ├── data/                   # ← EDIT YOUR CONTENT HERE
│   │   ├── site.ts            # Identity, links, SEO, form key
│   │   ├── projects.ts        # Projects + demo video IDs
│   │   ├── experience.ts      # Career & education timeline
│   │   ├── credentials.ts     # Certificates & awards
│   │   └── hobbies.ts         # Personal-side cards
│   ├── components/             # Astro UI components (one per section)
│   ├── layouts/
│   │   └── BaseLayout.astro   # <head>, SEO meta, fonts, theme boot
│   ├── pages/
│   │   └── index.astro        # Assembles the page from components
│   └── styles/
│       └── global.css         # Design tokens + shared styles
├── astro.config.mjs           # Site URL + integrations
└── .nvmrc                     # Pins Node 22
```

## ✏️ Editing Content

All content lives in [`src/data/`](src/data/) — you rarely touch markup.

| To change…                         | Edit                        |
| ---------------------------------- | --------------------------- |
| Name, role, domain, SEO, résumé, form key | [`src/data/site.ts`](src/data/site.ts) |
| Projects (and demo videos)         | [`src/data/projects.ts`](src/data/projects.ts) |
| Career / education timeline        | [`src/data/experience.ts`](src/data/experience.ts) |
| Certificates & awards              | [`src/data/credentials.ts`](src/data/credentials.ts) |
| Hobbies                            | [`src/data/hobbies.ts`](src/data/hobbies.ts) |
| Colors / theme tokens              | [`src/styles/global.css`](src/styles/global.css) |

### 🎬 Adding a project demo video

Demos play as **autoplaying, looping, muted** clips right inside the card — like a GIF, but sharp and far smaller.

1. Export your screen recording as an **MP4** (H.264). A `.webm` is optional and even smaller.
2. Drop it in `public/assets/demos/` — e.g. `policy-chatbot.mp4`.
3. Set the path in the matching project's `video` field in `src/data/projects.ts`:
   ```ts
   video: '/assets/demos/policy-chatbot.mp4',
   // optional extras:
   videoWebm: '/assets/demos/policy-chatbot.webm',
   poster: '/assets/demos/policy-chatbot.jpg', // still frame shown before play
   ```

Leave `video: ''` to show the animated "demo coming soon" placeholder. Videos pause automatically when scrolled out of view to save battery.

> Tip: keep clips short (10–20s) and ~1280×720. Aim for under ~2–3 MB each.

### ✉️ Enabling the contact form

The form works out of the box in **mailto fallback** mode. To receive submissions in your inbox with no backend:

1. Get a free access key at [web3forms.com](https://web3forms.com).
2. Paste it into `WEB3FORMS_ACCESS_KEY` in `src/data/site.ts`.

### 🖼️ Replacing assets

Drop files into `public/assets/` (keep the same filenames so links keep working):

- **Photo** → `public/assets/photo/milind.jpg`
- **Résumé** → `public/assets/cv/Milind-Mishra-CV.pdf`
- **Certificates** → `public/assets/certificates/`
- **Star Performer award image** → add it, then set `image:` in `src/data/credentials.ts`
- **Social share image** (1200×630) → `public/assets/og/og-image.png`

## 🌍 Deployment

The site builds to a fully static `dist/` folder, so any static host works.

**Vercel / Netlify (recommended):**
1. Import this GitHub repo — the framework is auto-detected as Astro.
2. Build command `npm run build`, output directory `dist`.
3. Add the custom domain `milindmishra.xyz` in the dashboard. No extra config needed.

**GitHub Pages:** since the site uses a custom domain at the root, add a `public/CNAME` file containing `milindmishra.xyz` and deploy `dist/`.

## ✅ Post-setup checklist

- [ ] Add YouTube `youtubeId`s to `src/data/projects.ts` once demos are uploaded
- [ ] Add a Web3Forms key to `src/data/site.ts`
- [ ] Add the Star Performer award image and set `image:` in `credentials.ts`
- [ ] Add a 1200×630 social share image at `public/assets/og/og-image.png`
- [ ] Deploy and connect `milindmishra.xyz`

## 📄 License

Personal project — code is free to reference; content, résumé, and imagery are © Milind Mishra.

---

<div align="center">

Built with a little too much love for internal tools · [milindmishra.xyz](https://milindmishra.xyz)

</div>

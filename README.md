# Milind Mishra — Portfolio

A fast, SEO-optimized personal portfolio built with [Astro](https://astro.build). Ships **zero JavaScript by default**, so it loads fast and scores well on Lighthouse. Live at **[milindmishra.xyz](https://milindmishra.xyz)**.

## Run it locally

```bash
npm install     # first time only
npm run dev      # start dev server → http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

Requires Node 18+ (tested on Node 20).

## Where to edit things

All your content lives in plain data files under `src/data/` — you rarely need to touch the markup.

| What you want to change            | File                        |
| ---------------------------------- | --------------------------- |
| Name, role, domain, SEO text, résumé path, form key | `src/data/site.ts`  |
| Projects (and demo videos)         | `src/data/projects.ts`      |
| Career / education timeline        | `src/data/experience.ts`    |
| Certificates & awards              | `src/data/credentials.ts`   |
| Hobbies                            | `src/data/hobbies.ts`       |
| Colors / theme tokens              | `src/styles/global.css`     |

### Adding a project demo video (YouTube)

1. Upload your demo to YouTube (unlisted is fine).
2. Copy the 11-character video ID from the URL — e.g. `https://youtu.be/dQw4w9WgXcQ` → `dQw4w9WgXcQ`.
3. Paste it into the matching project's `youtubeId` field in `src/data/projects.ts`.

The card shows a thumbnail and only loads the player when a visitor clicks — fast, and privacy-friendly (`youtube-nocookie.com`).

### Turning on the contact form

The form works out of the box in **mailto fallback** mode (opens the visitor's email client). To receive submissions straight to your inbox with no backend:

1. Go to [web3forms.com](https://web3forms.com), enter your email, and copy the free access key.
2. Paste it into `WEB3FORMS_ACCESS_KEY` in `src/data/site.ts`.

### Replacing assets

Drop files into `public/assets/` (keep the same filenames and links keep working):

- Photo → `public/assets/photo/milind.jpg`
- Résumé → `public/assets/cv/Milind-Mishra-CV.pdf`
- Certificates → `public/assets/certificates/`
- **Star Performer award image** → add it, then set `image:` in `src/data/credentials.ts`
- **Social share image** (1200×630) → `public/assets/og/og-image.png`

## Deploy

The site is a static build (`dist/`). Any static host works:

- **Vercel / Netlify** — import the GitHub repo, framework auto-detected as Astro. Set your custom domain `milindmishra.xyz` in the dashboard. No config needed.
- **GitHub Pages** — since you use a custom domain at the root, it works as-is; add a `public/CNAME` file containing `milindmishra.xyz`.

Build command: `npm run build` · Output directory: `dist`

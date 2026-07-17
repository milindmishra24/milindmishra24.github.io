import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Your live domain. Used for canonical URLs, Open Graph tags and the sitemap.
// If you ever move to a different domain, change it here in one place.
const SITE_URL = 'https://milindmishra.xyz';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  // Astro ships zero JavaScript by default — great for SEO & Lighthouse.
});

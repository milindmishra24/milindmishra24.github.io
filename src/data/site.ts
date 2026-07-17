// ---------------------------------------------------------------------------
// SITE-WIDE CONFIG  —  edit your identity, links, and SEO text here in one place.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Milind Mishra',
  monogram: 'MM',
  role: 'Senior Manager · Tech-Enabled Operations',
  // Short tagline used in the browser tab title after your name.
  titleSuffix: 'Engineer-turned-leader who still builds',

  // The domain the site is served from (also set in astro.config.mjs → `site`).
  url: 'https://milindmishra.xyz',

  // One-to-two sentence SEO / social-share description.
  description:
    'Milind Mishra — Senior Manager driving AI-led transformation at Simactricals. A decade of software engineering behind the chatbots, dashboards, and internal tools his team runs on every day.',

  location: 'Vadodara, India',

  // Open Graph preview image (1200×630). Drop a real one at /public/assets/og/og-image.png later.
  ogImage: '/assets/og/og-image.png',

  // Path to your CV in /public. Swap the file, keep the name, and this link keeps working.
  resume: '/assets/cv/Milind-Mishra-CV.pdf',
} as const;

export const contact = {
  email: 'milind.mishra24@gmail.com',
  phone: '+91-9871180551',
  phoneHref: 'tel:+919871180551',
} as const;

export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/milindmishra24',
    handle: '@milindmishra24',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/milindmishra24',
    handle: 'in/milindmishra24',
  },
  {
    label: 'Email',
    href: 'mailto:milind.mishra24@gmail.com',
    handle: contact.email,
  },
] as const;

// Rotating words for the hero typing effect. Edit freely.
export const heroRoles = [
  'Software Engineer',
  'Operations Leader',
  'AI Builder',
  'Problem Solver',
] as const;

// -------------------------------------------------------------------
// CONTACT FORM  —  Web3Forms is free and works on fully static sites.
// 1. Go to https://web3forms.com  →  enter your email  →  copy the access key.
// 2. Paste it below. Submissions then arrive in your inbox. No backend needed.
// Until you add a key, the form falls back gracefully and the mailto button still works.
// -------------------------------------------------------------------
export const WEB3FORMS_ACCESS_KEY = 'REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY';

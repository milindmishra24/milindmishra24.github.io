// ---------------------------------------------------------------------------
// HOBBIES / PERSONAL SIDE  —  a bit of personality. Edit the list freely.
// `icon` is an inline SVG name resolved in the Hobbies component.
// ---------------------------------------------------------------------------

export interface Hobby {
  icon: 'code' | 'game' | 'travel' | 'camera' | 'music' | 'book' | 'globe' | 'sports' | 'cook' | 'car';
  title: string;
  blurb: string;
  accent: string;
}

export const hobbies: Hobby[] = [
  {
    icon: 'camera',
    title: 'Photography',
    blurb: 'Chasing light and framing moments — an eye for detail that carries into everything else.',
    accent: 'var(--sky)',
  },
  {
    icon: 'travel',
    title: 'Exploring new places',
    blurb: 'Always up for visiting somewhere new — new cities, new perspectives, new ideas.',
    accent: 'var(--marigold)',
  },
  {
    icon: 'globe',
    title: 'Geopolitics',
    blurb: 'Following how the world moves — the economics, power, and stories behind the headlines.',
    accent: 'var(--violet)',
  },
  {
    icon: 'sports',
    title: 'Pickleball, badminton & cricket',
    blurb: 'Racket and field sports keep me sharp — competitive, social, and a good reason to stay active.',
    accent: 'var(--teal)',
  },
  {
    icon: 'cook',
    title: 'Cooking',
    blurb: 'Experimenting in the kitchen — a recipe is just another system worth getting right.',
    accent: 'var(--coral)',
  },
  {
    icon: 'car',
    title: 'Long drives',
    blurb: '35,000+ km behind the wheel and counting — give me an open road and a good playlist.',
    accent: 'var(--sky)',
  },
];

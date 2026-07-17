// ---------------------------------------------------------------------------
// HOBBIES / PERSONAL SIDE  —  a bit of personality. Edit the list freely.
// `icon` is an inline SVG name resolved in the Hobbies component.
// ---------------------------------------------------------------------------

export interface Hobby {
  icon: 'code' | 'game' | 'travel' | 'camera' | 'music' | 'book';
  title: string;
  blurb: string;
  accent: string;
}

export const hobbies: Hobby[] = [
  {
    icon: 'code',
    title: 'Building side tools',
    blurb: 'I never really stopped shipping — most weekends there is some small tool getting built.',
    accent: 'var(--coral)',
  },
  {
    icon: 'game',
    title: 'Gaming',
    blurb: 'Strategy and story-driven games — the same problem-solving itch, different playground.',
    accent: 'var(--teal)',
  },
  {
    icon: 'travel',
    title: 'Travel',
    blurb: 'New cities, new perspectives. The best ideas tend to arrive somewhere far from a desk.',
    accent: 'var(--marigold)',
  },
  {
    icon: 'camera',
    title: 'Photography',
    blurb: 'Chasing light and framing moments — an eye for detail that carries into design too.',
    accent: 'var(--sky)',
  },
];

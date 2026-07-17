// ---------------------------------------------------------------------------
// EXPERIENCE TIMELINE  —  career + education, newest first.
// ---------------------------------------------------------------------------

export interface TimelineItem {
  when: string;
  title: string;
  org: string;
  detail: string;
  color: string;
  stack?: string[];
}

export const experience: TimelineItem[] = [
  {
    when: 'May 2025 — Present',
    title: 'Senior Manager, Administration',
    org: 'Simactricals Private Limited · Vadodara',
    detail:
      'Lead a mid-size team across administration, HR, procurement, and finance, while personally building the Employee Portal, Policy Chatbot, Project Tracking System, and a Charging Data Dashboard for real-time test-case analytics.',
    color: 'var(--coral)',
    stack: ['Python', 'LLMs', 'AI-Assisted Development', 'Team Management'],
  },
  {
    when: 'Feb 2023 — Apr 2025',
    title: 'Senior Analyst II, Software Engineering',
    org: 'DXC Technology · Client: GCube Insurance, London',
    detail:
      'Developed features for a live web-based insurance platform, provided production support, and contributed to the Help Studio internal documentation tool.',
    color: 'var(--teal)',
    stack: ['C#', 'Web', 'Production Support', 'Insurance'],
  },
  {
    when: 'Apr 2021 — Feb 2023',
    title: 'Senior Executive',
    org: 'Wipro Limited · Client: The Estée Lauder Companies',
    detail:
      'Built and supported Ecometry order-management applications, maintained the Cubiscan dimensioning application, and supported Stock Sync inventory-synchronization processes.',
    color: 'var(--marigold)',
    stack: ['Ecometry', 'Order Management', 'SCM'],
  },
  {
    when: 'Jul 2016 — Apr 2021',
    title: 'Software Engineer',
    org: 'MothersonSumi Infotech & Design Ltd. · Client: Motherson Group',
    detail:
      'Built and maintained the eMPro ERP in VB.Net and C#, developed the Traceability module, and shipped web applications that reduced single points of failure and user-entry errors. Recognised with the Star Performer award.',
    color: 'var(--violet)',
    stack: ['VB.Net', 'C#', 'ERP', 'Traceability'],
  },
  {
    when: '2012 — 2016',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'Lovely Professional University',
    detail:
      'Bachelor of Technology in Computer Science & Engineering — the engineering foundation behind everything since.',
    color: 'var(--sky)',
  },
];

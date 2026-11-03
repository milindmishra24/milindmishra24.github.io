// ---------------------------------------------------------------------------
// EXPERIENCE TIMELINE  —  career + education, newest first.
// ---------------------------------------------------------------------------

export interface TimelineItem {
  when: string;
  title: string;
  org: string;
  detail: string;
  color: string;
  highlights?: string[];
  stack?: string[];
}

export const experience: TimelineItem[] = [
  {
    when: 'May 2025 — Present',
    title: 'Senior Manager, Administration',
    org: 'Simactricals Private Limited · Vadodara',
    detail:
      'Lead a team across administration, HR, procurement, and finance, and build the internal tools that team runs on.',
    color: 'var(--coral)',
    highlights: [
      'Built the Employee Portal, Policy Chatbot, Project Tracking System and Charging Data Dashboard with an AI-assisted workflow',
      'Source electrical and electronic components for R&D and testing, and manage vendor relationships and finance operations',
      "Represented the company's wireless charging technology at expos in Singapore, Bangkok and Dubai, and onboarded investors",
    ],
    stack: ['Python', 'LLMs', 'AI-Assisted Development', 'Team Management'],
  },
  {
    when: 'Feb 2023 — Apr 2025',
    title: 'Senior Analyst II, Software Engineering',
    org: 'DXC Technology · Client: GCube Insurance, London',
    detail:
      'Developed features for a live web-based insurance platform, provided production support, and contributed to the Help Studio internal documentation tool.',
    color: 'var(--teal)',
    highlights: [
      'Took over an insurance project moved out of Russia after US sanctions; learned its logic from the code and taught myself the insurance domain',
      'Moved from production support into development, fixing issues and shipping features side by side while guiding juniors',
      'Within about a year, became sole owner of the GCube Insurance web project, resolving most of its open bugs',
    ],
    stack: ['C#', 'VB', 'Web', 'Production Support', 'Insurance'],
  },
  {
    when: 'Apr 2021 — Feb 2023',
    title: 'Senior Executive',
    org: 'Wipro Limited · Client: The Estée Lauder Companies',
    detail:
      'Built and supported Ecometry order-management applications, maintained the Cubiscan dimensioning application, and supported Stock Sync inventory-synchronization processes.',
    color: 'var(--marigold)',
    highlights: [
      'Supported clients across Asia-Pacific, EMEA, North America and Latin America from day one on a short-staffed team',
      'Took knowledge transfer from Infosys and Cognizant, then ran reverse KT to prove operational readiness to the client',
      'Resolved ServiceNow production tickets within SLA, and helped colleagues with Microsoft SQL',
    ],
    stack: ['Ecometry', 'Order Management', 'SCM', 'ServiceNow', 'SQL Server'],
  },
  {
    when: 'Jul 2016 — Apr 2021',
    title: 'Software Engineer',
    org: 'MothersonSumi Infotech & Design Ltd. · Client: Motherson Group',
    detail:
      'Built and maintained the eMPro ERP in VB.Net and C#. Recognised with the Star Performer award.',
    color: 'var(--violet)',
    highlights: [
      'Started in production support at a 90%+ SLA, and moved into development after six months',
      'Worked on ERP modules for vendors, stock, sales and finance, including GST implementation from 2017 and live data for audits',
      'Built the Traceability module, tracking each product from raw material to finished goods',
      'Built a vendor self-registration portal with employee approval, ending bank-detail errors from manual entry',
      'Led a team of 4–5 freshers from 2020, training them on development, testing, coding standards and OOP',
    ],
    stack: ['VB.Net', 'C#', 'ERP', 'Traceability', 'SQL Server'],
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

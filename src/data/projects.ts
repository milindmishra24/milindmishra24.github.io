// ---------------------------------------------------------------------------
// PROJECTS  —  add / edit / reorder your work here. The Projects grid renders
// straight from this array, so you never touch markup to update your portfolio.
//
// VIDEO EMBEDS (lightweight, lazy-loaded):
//   When you upload a demo to YouTube, set `youtubeId` to the 11-character ID
//   from the video URL (youtu.be/XXXXXXXXXXX  →  the XXXXXXXXXXX part).
//   The card then shows the thumbnail and only loads the player when clicked —
//   so the page stays fast and no tracking happens until the visitor opts in.
//   Leave `youtubeId` empty ('') to show an animated placeholder instead.
// ---------------------------------------------------------------------------

export type Category = 'AI' | 'Web' | 'Data' | 'Internal Tools';

export interface Project {
  title: string;
  category: Category;
  tagColor: string; // accent used for the tag + video border
  tagline: string;
  description: string;
  stack: string[];
  youtubeId: string; // '' = no video yet → animated placeholder shown
  liveUrl?: string;
  codeUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Policy Chatbot',
    category: 'AI',
    tagColor: 'var(--coral)',
    tagline: 'Ask HR a question, get a straight answer — instantly.',
    description:
      "An internal chatbot that lets employees query company policies conversationally instead of digging through PDFs and shared drives. Built with LLM integration on top of the company's actual policy documents, cutting routine HR queries down to a chat message.",
    stack: ['Python', 'LLM Integration', 'Prompt Engineering', 'Internal API'],
    youtubeId: '', // ← paste YouTube video ID here when ready
  },
  {
    title: 'Employee Portal',
    category: 'Internal Tools',
    tagColor: 'var(--marigold)',
    tagline: 'Attendance, reimbursements, and leave — with real approvals.',
    description:
      'Engineered end-to-end in Python using an AI agent-driven development workflow, this portal handles attendance, reimbursement claims, and leave requests through a two-step approval process — replacing manual, paper-based sign-offs with a system managers and employees both trust.',
    stack: ['Python', 'SQL Server', 'AI-Assisted Development', 'Approval Workflows'],
    youtubeId: '',
  },
  {
    title: 'Project Tracking System',
    category: 'Internal Tools',
    tagColor: 'var(--teal)',
    tagline: 'A tracker shaped around how the team actually works.',
    description:
      "Rather than bending internal workflows to fit off-the-shelf software, I built a project tracking system aligned specifically to Simactricals' own processes and reporting requirements — giving leadership visibility without adding process overhead for the team doing the work.",
    stack: ['Python', 'SQL Server', 'Internal Workflow Design'],
    youtubeId: '',
  },
  {
    title: 'Charging Data Dashboard',
    category: 'Data',
    tagColor: 'var(--sky)',
    tagline: 'Test-case analytics, visible the moment they happen.',
    description:
      'A graphical dashboard surfacing charging test-case analytics in real time, so the team gets self-service visibility into results instead of waiting on manual reports — built to make data-grounded decisions the default, not the exception.',
    stack: ['Python', 'SQL Server', 'Crystal Reports', 'Data Visualization'],
    youtubeId: '',
  },
];

// Filter chips shown above the grid. 'All' is added automatically.
export const projectCategories: Category[] = ['AI', 'Web', 'Data', 'Internal Tools'];

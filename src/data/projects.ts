// ---------------------------------------------------------------------------
// PROJECTS  —  add / edit / reorder your work here. The Projects grid renders
// straight from this array, so you never touch markup to update your portfolio.
//
// DEMO VIDEOS (autoplay, looping, muted — behaves like a GIF but sharp & tiny):
//   Drop your demo clip in  public/assets/demos/  then set `video` to its path,
//   e.g.  video: '/assets/demos/policy-chatbot.mp4'
//   • MP4 (H.264) works everywhere. WebM is optional & even smaller — if you
//     have both, set `videoWebm` too and the browser picks the best one.
//   • `poster` is a still frame shown before the video paints (optional).
//   Leave `video` empty ('') to show the animated "demo coming soon" placeholder.
// ---------------------------------------------------------------------------

export type Category = 'AI' | 'Web' | 'Data' | 'Internal Tools';

export interface Project {
  title: string;
  category: Category;
  tagColor: string; // accent used for the tag + video border
  tagline: string;
  description: string;
  stack: string[];
  video: string; // '' = no demo yet → animated placeholder. e.g. '/assets/demos/chatbot.mp4'
  videoWebm?: string; // optional WebM source for smaller size
  poster?: string; // optional still frame shown before playback
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
    video: '', // ← e.g. '/assets/demos/policy-chatbot.mp4' when ready
  },
  {
    title: 'Employee Portal',
    category: 'Internal Tools',
    tagColor: 'var(--marigold)',
    tagline: 'Attendance, reimbursements, and leave — with real approvals.',
    description:
      'Engineered end-to-end in Python using an AI agent-driven development workflow, this portal handles attendance, reimbursement claims, and leave requests through a two-step approval process — replacing manual, paper-based sign-offs with a system managers and employees both trust.',
    stack: ['Python', 'SQL Server', 'AI-Assisted Development', 'Approval Workflows'],
    video: '/assets/demos/employee-portal.mp4',
    videoWebm: '/assets/demos/employee-portal.webm',
    poster: '/assets/demos/employee-portal.jpg',
  },
  {
    title: 'Project Tracking System',
    category: 'Internal Tools',
    tagColor: 'var(--teal)',
    tagline: 'A tracker shaped around how the team actually works.',
    description:
      "Rather than bending internal workflows to fit off-the-shelf software, I built a project tracking system aligned specifically to Simactricals' own processes and reporting requirements — giving leadership visibility without adding process overhead for the team doing the work.",
    stack: ['Python', 'SQL Server', 'Internal Workflow Design'],
    video: '',
  },
  {
    title: 'Charging Data Dashboard',
    category: 'Data',
    tagColor: 'var(--sky)',
    tagline: 'Test-case analytics, visible the moment they happen.',
    description:
      'A graphical dashboard surfacing charging test-case analytics in real time, so the team gets self-service visibility into results instead of waiting on manual reports — built to make data-grounded decisions the default, not the exception.',
    stack: ['Python', 'SQL Server', 'Crystal Reports', 'Data Visualization'],
    video: '/assets/demos/charging-dashboard.mp4',
    videoWebm: '/assets/demos/charging-dashboard.webm',
    poster: '/assets/demos/charging-dashboard.jpg',
  },
];

// Filter chips shown above the grid. 'All' is added automatically.
export const projectCategories: Category[] = ['AI', 'Web', 'Data', 'Internal Tools'];

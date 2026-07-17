// ---------------------------------------------------------------------------
// CERTIFICATES & AWARDS  —  edit here; the Credentials section renders from it.
//
// `file`   → link opened when the card is clicked (PDF in /public, or a verify URL).
// `verify` → optional external "Verify" link (e.g. Credly / Microsoft Learn).
// `image`  → optional cover image path. Leave '' to show a generated badge tile.
// ---------------------------------------------------------------------------

export type CredentialKind = 'certificate' | 'award';

export interface Credential {
  kind: CredentialKind;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  file?: string; // local PDF or external URL
  verify?: string; // external verification link
  image?: string;
  accent: string;
}

export const credentials: Credential[] = [
  {
    kind: 'award',
    title: 'Star Performer Award',
    issuer: 'Motherson Group',
    date: '',
    // TODO: drop your award photo/scan at the path below, then it shows automatically.
    image: '', // e.g. '/assets/certificates/star-performer.jpg'
    accent: 'var(--marigold)',
  },
  {
    kind: 'certificate',
    title: 'Professional Certificate in AI & Machine Learning',
    issuer: 'E & ICT Academy, IIT Kanpur (MeitY & IIT Kanpur)',
    date: 'Jun 2024',
    file: '/assets/certificates/iit-kanpur-ai-ml.pdf',
    accent: 'var(--violet)',
  },
  {
    kind: 'certificate',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: 'Feb 2022',
    credentialId: 'I136-7036',
    file: '/assets/certificates/azure-fundamentals-az900.pdf',
    verify: 'https://learn.microsoft.com/en-us/users/', // TODO: paste your Microsoft Learn verify URL
    accent: 'var(--sky)',
  },
];

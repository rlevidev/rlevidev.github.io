export interface Skill {
  /** Brand logo (multicolor SVG) served from /public/icons. */
  readonly icon: string;
  /** Brand color, used for the tinted chip behind the logo. */
  readonly brand: string;
  readonly label: string;
}

export interface Project {
  readonly title: string;
  readonly status: 'done' | 'wip';
  readonly tags: readonly string[];
  readonly href: string;
  readonly link: 'code' | 'open';
  readonly desc: 'proj1_desc' | 'proj2_desc' | 'proj3_desc' | 'proj4_desc';
}

export const SKILLS: readonly Skill[] = [
  { label: 'Go', icon: 'icons/go.svg', brand: '#00add8' },
  { label: 'Java', icon: 'icons/java.svg', brand: '#e76f00' },
  { label: 'Docker', icon: 'icons/docker.svg', brand: '#2496ed' },
  { label: 'PostgreSQL', icon: 'icons/postgresql.svg', brand: '#336791' },
  { label: 'Claude Code', icon: 'icons/claude-code.svg', brand: '#d97757' },
  { label: 'Git', icon: 'icons/git.svg', brand: '#f05033' },
  { label: 'Linux', icon: 'icons/linux.svg', brand: '#fcc624' },
];

export const PROJECTS: readonly Project[] = [
  {
    title: 'Rinha de Backend 2026',
    status: 'done',
    tags: ['Go', 'Vector Search', 'Performance'],
    href: 'https://rlevidev.github.io/rinha-2026',
    link: 'code',
    desc: 'proj1_desc',
  },
  {
    title: 'Currículo Builder',
    status: 'wip',
    tags: ['Go', 'LaTeX', 'Docker', 'Render'],
    href: 'https://rlevidev.github.io/curriculo-builder',
    link: 'open',
    desc: 'proj2_desc',
  },
  {
    title: 'estoque-api',
    status: 'done',
    tags: ['Java'],
    href: 'https://github.com/rlevidev/estoque-api',
    link: 'code',
    desc: 'proj3_desc',
  },
  {
    title: 'encurtador-url',
    status: 'done',
    tags: ['Java'],
    href: 'https://github.com/rlevidev/encurtador-url',
    link: 'code',
    desc: 'proj4_desc',
  },
];

export const SOCIALS: Readonly<{ linkedin: string; github: string; email: string }> = {
  linkedin: 'https://www.linkedin.com/in/rlevidev/',
  github: 'https://github.com/rlevidev',
  email: 'mailto:rlevi.dev@gmail.com',
};

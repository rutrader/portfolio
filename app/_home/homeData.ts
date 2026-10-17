import type { Project, SkillGroup, Hobby, Writing, LinkSection } from '@/types';
import { ARTICLE_WRITINGS } from '@/app/writing/_articles';

// Newest first.
export const PROJECTS: Project[] = [
  {
    title: 'The Delisted',
    description:
      'Dead companies, filed as cold cases by a fictional investigating officer. Each one is a police-style report over a detective’s desk you can explore.',
    stacks: ['Next.js', 'Remotion'],
    link: 'https://thedelisted.com/',
    highlights: ['Side project'],
  },
  {
    title: 'Assumio',
    description:
      'A private ledger of investment reasoning, not returns — track why you own each position and grade the thesis against reality over time.',
    stacks: ['Astro', 'TypeScript', 'AI-assisted'],
    link: 'https://assumio.com/',
    highlights: ['Investing + AI', 'Static-site output', 'Own product'],
  },
  {
    title: 'Czechonomics',
    description:
      'A side project with a focused overview of the Czech economy: key indicators, financial data, and government stats.',
    stacks: ['React', 'iOS'],
    link: 'https://czechonomics.com/',
    links: [
      { label: 'czechonomics.com', href: 'https://czechonomics.com/' },
      { label: 'App Store', href: 'https://apps.apple.com/cz/app/czechonomics/id1669200005' },
    ],
    highlights: ['Data-heavy UI', 'Web and iOS', 'Side project'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'React Native' },
    ],
  },
  {
    title: 'AI',
    skills: [
      { name: 'AI-assisted development' },
      { name: 'Agentic workflows' },
      { name: 'LLM integration' },
      { name: 'AI architecture' },
    ],
  },
  {
    title: 'Backend',
    skills: [{ name: 'Node.js' }, { name: 'PHP' }],
  },
  {
    title: 'Data',
    skills: [{ name: 'PostgreSQL' }, { name: 'MySQL' }],
  },
  {
    title: 'Platform',
    skills: [{ name: 'Design systems' }, { name: 'WordPress' }, { name: 'Docker' }, { name: 'CI/CD' }],
  },
];

export const HOBBIES: Hobby[] = [
  {
    title: 'Economics & investing',
    description: 'I like turning noise into models: reading, tracking, and learning how systems behave.',
  },
  {
    title: 'Photography',
    description: 'Mostly street & travel — composition, light, and small stories.',
  },
  {
    title: 'Side projects',
    description: 'I ship small things often: tools, experiments, and UI ideas.',
  },
  {
    title: 'Outdoors',
    description: 'Walks, hikes, and long routes that help me reset.',
  },
];

// The homepage shows the newest self-hosted pieces; /writing lists them all.
export const LATEST_ARTICLES: Writing[] = ARTICLE_WRITINGS.slice(0, 2);

// Shorter posts on LinkedIn, listed under Writing as a smaller sub-list.
// TODO: add a one-line `description` (takeaway) to each post.
export const LINKEDIN_POSTS: Writing[] = [
  {
    title: 'AI Infrastructure: Discipline Under Pressure',
    source: 'LinkedIn',
    href: 'https://www.linkedin.com/pulse/ai-infrastructure-discipline-pressure-ruslan-ishemgulov-tuyxf',
    langs: ['EN'],
  },
  {
    title: 'AI Infrastructure: Discipline Under Pressure — Part 2',
    source: 'LinkedIn',
    href: 'https://www.linkedin.com/pulse/ai-infrastructure-discipline-pressure-part-2-ruslan-ishemgulov-82krf',
    langs: ['EN'],
  },
];

export const INVESTING_BLOG: Writing = {
  title: 'Investment Quest',
  source: 'Blog',
  href: 'https://www.rutrader.eu/',
  langs: ['EN', 'RU'],
  description: 'Report breakdowns, investment ideas, and market notes.',
};

export const LINK_SECTIONS: LinkSection[] = [
  {
    title: 'Contact',
    links: [
      { label: 'GitHub', href: 'https://github.com/rutrader' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/ruslan.ishemgulov' },
      { label: 'Instagram', href: 'https://instagram.com/ruslan.ishemgulov' },
    ],
  },
];

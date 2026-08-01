import type { Project, SkillGroup, Hobby, Writing, LinkSection } from '@/types';

export const PROJECTS: Project[] = [
  {
    title: 'Czechonomics — Web',
    description:
      'A side project with a focused overview of the Czech economy: key indicators, financial data, and government stats.',
    stacks: ['React', 'Node.js', 'Context API'],
    link: 'https://czechonomics.com/',
    highlights: ['Data-heavy UI', 'Charts & indicators', 'Side project'],
  },
  {
    title: 'Czechonomics — iOS',
    description: 'An iOS companion app for Czechonomics — key indicators and stats on the go.',
    stacks: ['iOS', 'App Store'],
    link: 'https://apps.apple.com/cz/app/czechonomics/id1669200005',
    highlights: ['Mobile companion', 'Quick stats', 'Side project'],
  },
  {
    title: 'Assumio',
    description:
      'A private ledger of investment reasoning, not returns — track why you own each position and grade the thesis against reality over time.',
    stacks: ['Astro', 'TypeScript', 'AI-assisted'],
    link: 'https://assumio.com/',
    highlights: ['Investing + AI', 'Static-site output', 'Own product'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'React Native'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'PHP', 'Symfony', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Tooling & platforms',
    skills: ['Docker', 'CI/CD', 'Design systems', 'WordPress'],
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

export const WRITINGS: Writing[] = [
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
  {
    title: 'Investment Quest',
    source: 'Blog',
    href: 'https://www.rutrader.eu/',
    langs: ['EN', 'RU'],
    description: 'Report breakdowns, investment ideas, and market notes.',
  },
];

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

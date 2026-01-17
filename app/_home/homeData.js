export const NAV_ITEMS = [
  { id: 'top', label: 'Top' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'links', label: 'Links' },
]

export const PROJECTS = [
  {
    title: 'Czechonomics — Web',
    description:
      'A side project with a focused overview of the Czech economy: key indicators, financial data, and government stats.',
    stacks: ['React', 'Node.js', 'Context API'],
    link: 'https://czechonomics.com/',
    image: {
      src: '/images/projects/czechonomics.png',
      alt: 'Czechonomics website screenshot',
    },
    highlights: ['Data-heavy UI', 'Charts & indicators', 'Side project'],
  },
  {
    title: 'Czechonomics — iOS',
    description: 'An iOS companion app for Czechonomics — key indicators and stats on the go.',
    stacks: ['iOS', 'App Store'],
    link: 'https://apps.apple.com/cz/app/czech-stats/id1669200005',
    image: {
      src: '/images/projects/czechonomics.png',
      alt: 'Czechonomics iOS app',
    },
    highlights: ['Mobile companion', 'Quick stats', 'Side project'],
  },
  {
    title: 'Workmarket.eu',
    description:
      'A job portal connecting non‑EU residents with EU opportunities, helping companies hire internationally.',
    stacks: ['PHP', 'Symfony', 'PostgreSQL'],
    link: 'https://workmarket.eu/',
    image: {
      src: '/images/projects/workmarket.png',
      alt: 'Workmarket.eu website screenshot',
    },
    highlights: ['Marketplace flows', 'Admin tooling', 'SEO pages'],
  },
  {
    title: 'Ewijobs.cz',
    description:
      'A streamlined job portal with job ads and a simple reply flow, built for speed and clarity.',
    stacks: ['Next.js', 'MongoDB', 'Netlify'],
    link: 'https://ewijobs.cz/',
    image: {
      src: '/images/projects/ewijobs.png',
      alt: 'Ewijobs.cz website screenshot',
    },
    highlights: ['Fast UX', 'Forms', 'Deploy pipeline'],
  },
]

export const SKILLS = [
  { label: 'Wordpress' },
  { label: 'Next.js' },
  { label: 'React' },
  { label: 'TypeScript' },
  { label: 'JavaScript' },
  { label: 'React Native' },

  { label: 'PHP' },
  { label: 'Symfony' },
  { label: 'Node.js' },
  { label: 'REST APIs' },
  { label: 'Docker' },

  { label: 'PostgreSQL' },
  { label: 'MySQL' },
  { label: 'MongoDB' },

  { label: 'CI/CD' },
  { label: 'Design systems' },
]

export const HOBBIES = [
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
]

export const LINK_SECTIONS = [
  {
    title: 'Contact',
    links: [
      { label: 'GitHub', href: 'https://github.com/rutrader' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/ruslan.ishemgulov' },
      { label: 'Instagram', href: 'https://instagram.com/ruslan.ishemgulov' },
    ],
  },
]

export interface Project {
  title: string;
  description: string;
  stacks: string[];
  link: string;
  highlights: string[];
}

export interface Skill {
  label: string;
}

export interface Hobby {
  title: string;
  description: string;
}

export interface Link {
  label: string;
  href: string;
}

export interface LinkSection {
  title: string;
  links: Link[];
}

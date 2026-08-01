export interface Project {
  title: string;
  description: string;
  stacks: string[];
  link: string;
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Hobby {
  title: string;
  description: string;
}

export type WritingLang = 'EN' | 'RU';

export interface Writing {
  title: string;
  source: string;
  href: string;
  langs: WritingLang[];
  description?: string;
}

export interface Link {
  label: string;
  href: string;
}

export interface LinkSection {
  title: string;
  links: Link[];
}

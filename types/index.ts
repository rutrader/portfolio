export interface NavItem {
  id: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  stacks: string[];
  link: string;
  image: ProjectImage;
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

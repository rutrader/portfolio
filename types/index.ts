export interface Project {
  title: string;
  description: string;
  stacks: string[];
  link: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  primary?: boolean;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
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
  /** Hosted here. Opens in the same tab and takes a same-page arrow. */
  internal?: boolean;
}

/**
 * A self-hosted piece under /writing/<slug>.
 *
 * One entry per article, and it is the only place an article's metadata is
 * written down: the page header, the <title>, the OG image, the sitemap entry
 * and the homepage row all read from here.
 */
export interface Article {
  slug: string;
  /** Page heading and <title>. Sentence case — it is a sentence, not a label. */
  title: string;
  /** Mono eyebrow above the heading. Kept short; it is a label, not a summary. */
  kicker: string;
  /** The lede under the heading, in the author's voice. Also the meta description. */
  lede: string;
  /** One line for the homepage row, where the lede would run past the 58ch measure. */
  summary: string;
  /** ISO date. Rendered as the dateline and used for `lastModified` in the sitemap. */
  date: string;
  /** Mono meta line under the lede — where the work happened, what it ran on. */
  meta: string[];
}

export interface Link {
  label: string;
  href: string;
}

export interface LinkSection {
  title: string;
  links: Link[];
}

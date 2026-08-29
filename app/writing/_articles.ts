import type { Metadata } from 'next';

import type { Article, Writing } from '@/types';

/**
 * Every self-hosted piece, newest first.
 *
 * Adding an article means adding an entry here and a `page.tsx` under a folder
 * named for its slug. The sitemap and the homepage Writing rows are derived
 * from this list, so nothing about a piece is typed twice.
 */
export const ARTICLES: Article[] = [
  {
    slug: 'what-never-costs',
    title: 'What ‘never’ costs',
    kicker: 'Don’t · Explainer',
    lede: 'A repo with 43,000 stars tells its AI assistant never to stack prose across comment lines. I rewrote that rule to say the same thing forwards, ran both versions 40 times, and counted which one got broken more.',
    summary: 'One instruction rewritten forwards, 196 runs, and a result that failed to repeat.',
    date: '2026-08-29',
    meta: ['zod + remeda', '196 runs', '$137 on Sonnet'],
  },
  {
    slug: 'what-the-typechecker-cant-see',
    title: 'What the typechecker can’t see',
    kicker: 'Piecework · Explainer',
    lede: 'I broke a large open-source monorepo on purpose, seven times, to find where free tools run out and a paid model starts to earn its keep.',
    summary: 'Seven breaks injected into WordPress/gutenberg, and what four tools found.',
    date: '2026-08-24',
    meta: ['WordPress/gutenberg', '102 packages', '7 injected breaks'],
    revised: '2026-08-27',
    revisionNote:
      'The model was re-run twice — once with a clean prompt, once with the answer in the prompt — and the two now score separately. Every model figure below moved, and the ladder gained a row. What changed is listed at the foot of the piece.',
  },
];

export const ARTICLES_BY_SLUG = new Map(ARTICLES.map((a) => [a.slug, a]));

/** The homepage Writing rows for self-hosted pieces, so nothing is typed twice. */
export const ARTICLE_WRITINGS: Writing[] = ARTICLES.map((a) => ({
  title: a.title,
  source: 'Research',
  href: `/writing/${a.slug}`,
  langs: ['EN'],
  description: a.summary,
  internal: true,
}));

/** Throws rather than returning undefined: a missing slug is a build-time bug. */
export function getArticle(slug: string): Article {
  const article = ARTICLES_BY_SLUG.get(slug);
  if (!article) throw new Error(`No article registered for slug "${slug}" in app/writing/_articles.ts`);
  return article;
}

/**
 * Page metadata for an article, derived from its one registry entry.
 *
 * The OG image is not named here: Next picks up the `opengraph-image.tsx` that
 * sits beside the article's `page.tsx`.
 */
export function articleMetadata(slug: string): Metadata {
  const article = getArticle(slug);
  const url = `/writing/${article.slug}`;

  return {
    title: article.title,
    description: article.lede,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.lede,
      publishedTime: article.date,
      ...(article.revised && { modifiedTime: article.revised }),
      authors: ['Ruslan Ishemgulov'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.lede,
    },
  };
}

/** The dateline format: "24 August 2026". Fixed locale so SSR and client agree. */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

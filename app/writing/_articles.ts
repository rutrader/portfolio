import type { Metadata } from 'next';

import type { Article } from '@/types';

/**
 * Every self-hosted piece, newest first.
 *
 * Adding an article means adding an entry here and a `page.tsx` under a folder
 * named for its slug. The sitemap and the homepage Writing rows are derived
 * from this list, so nothing about a piece is typed twice.
 */
export const ARTICLES: Article[] = [
  {
    slug: 'what-the-typechecker-cant-see',
    title: 'What the typechecker can’t see',
    kicker: 'Piecework · Explainer',
    lede: 'I broke a large open-source monorepo on purpose, seven times, to find where free tools run out and a paid model starts to earn its keep.',
    date: '2026-08-24',
    meta: ['WordPress/gutenberg', '102 packages', '7 injected breaks'],
  },
];

export const ARTICLES_BY_SLUG = new Map(ARTICLES.map((a) => [a.slug, a]));

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

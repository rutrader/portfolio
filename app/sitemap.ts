import type { MetadataRoute } from 'next';

import { ARTICLES } from './writing/_articles';

const SITE_URL = 'https://ishemgulov.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/writing`,
      lastModified: new Date(`${ARTICLES[0].date}T00:00:00Z`),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Articles carry their own publish date rather than the build time: they
    // are finished pieces, and a crawler should not be told they change daily.
    ...ARTICLES.map((article) => ({
      url: `${SITE_URL}/writing/${article.slug}`,
      lastModified: new Date(`${article.date}T00:00:00Z`),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}

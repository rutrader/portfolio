import './globals.scss';
import { Analytics } from '@vercel/analytics/next';
import { Poppins } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from 'next';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });

const SITE_URL = 'https://ishemgulov.com';
const DESCRIPTION =
  'Ruslan Ishemgulov — software engineer building products across web and mobile, with a focus on economics, investing, and AI.';
const SAME_AS = [
  'https://github.com/rutrader',
  'https://linkedin.com/in/ruslan.ishemgulov',
  'https://instagram.com/ruslan.ishemgulov',
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ruslan Ishemgulov — Software Engineer',
    template: '%s · Ruslan Ishemgulov',
  },
  description: DESCRIPTION,
  keywords: ['Ruslan Ishemgulov', 'software engineer', 'web developer', 'investing', 'AI', 'Next.js', 'React'],
  authors: [{ name: 'Ruslan Ishemgulov', url: SITE_URL }],
  creator: 'Ruslan Ishemgulov',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Ruslan Ishemgulov',
    title: 'Ruslan Ishemgulov — Software Engineer',
    description: DESCRIPTION,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruslan Ishemgulov — Software Engineer',
    description: DESCRIPTION,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ruslan Ishemgulov',
  url: SITE_URL,
  jobTitle: 'Software Engineer',
  description: DESCRIPTION,
  sameAs: SAME_AS,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${GeistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="general">
          <main>
            <div>{children}</div>
            <Analytics />
          </main>
        </div>
      </body>
    </html>
  );
}

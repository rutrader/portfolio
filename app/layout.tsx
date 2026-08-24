import './globals.scss';
import { Analytics } from '@vercel/analytics/next';
import { Source_Serif_4 } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';
import type { Metadata, Viewport } from 'next';

/**
 * The reading voice. Source Serif 4 is variable, so one download covers the
 * whole weight range the type scale asks for — 400 for prose up to 600 for the
 * display line — instead of a file per step.
 *
 * `latin-ext` is there for the Czech diacritics in project names; the site's
 * Russian is signalled by a tag, not set in Cyrillic, so that subset is not
 * paid for until there is Cyrillic text to render.
 */
const sourceSerif = Source_Serif_4({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-source-serif',
});

const SITE_URL = 'https://ishemgulov.com';
const DESCRIPTION =
  'Ruslan Ishemgulov — software engineer building products across web and mobile, with a focus on economics, investing, and AI.';
const SAME_AS = [
  'https://github.com/rutrader',
  'https://linkedin.com/in/ruslan.ishemgulov',
  'https://instagram.com/ruslan.ishemgulov',
];

/*
 * DIRECTION CONTRACT — ishemgulov.com [seed:bad72b0b · user-pinned]
 *
 * Source-only: this is the record of what the redesign committed to, kept in
 * the repo and deliberately not shipped to the browser. DESIGN.md is the
 * normative system; this is why it looks the way it does.
 *
 * THESIS: Earn credibility through calm. Dark, quiet, content-light — refusing
 *   the packed dashboard and the neon-terminal dev default.
 * OWN-WORLD: Cool slate-charcoal ground (#14161c), cool off-white text, one
 *   muted teal accent (#6fb3a6) used sparingly. Geist + Geist Mono, hairline
 *   rules, rows led by a small filled teal dot in a soft halo. No motion beyond
 *   hover.
 * STORY: A recruiter or peer reads "credible, senior, clear engineer across
 *   web, AI and investing" in seconds, then reaches GitHub/LinkedIn or the
 *   writing with zero friction.
 * FIRST VIEWPORT: ~72vh of air. A mono eyebrow naming the three fields,
 *   left-aligned headline, a lede in the real voice, two quiet text links, a
 *   mono meta line. No hero card, no metric template.
 * FORM: Editorial-dark single column of ranked rows. User-pinned over the roll
 *   (assigned #4 split-flap declined after two re-rolls).
 * FINISH: unreviewed and undocumented is unfinished; this build ended with the
 *   finish review, the verdict, and DESIGN.md.
 */

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

/**
 * Paints the mobile browser's own chrome in the paper colour. Without it the
 * address bar keeps its default — dark on most phones — and the page reads as
 * a light document dropped into someone else's dark frame.
 *
 * Mirrors --bg in styles/_tokens.scss.
 */
export const viewport: Viewport = {
  themeColor: '#fff1e5',
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
      <body className={`${sourceSerif.className} ${sourceSerif.variable} ${GeistMono.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
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

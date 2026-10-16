import type { Metadata } from 'next';
import Link from 'next/link';

import { ARTICLES, formatDate } from './_articles';

const INTRO =
  'Experiments on AI coding agents, run on real repos and counted by scripts, not by opinion. Every figure comes from a saved run.';

export const metadata: Metadata = {
  title: 'Writing',
  description: INTRO,
  alternates: { canonical: '/writing' },
};

/**
 * The index of self-hosted pieces, newest first, read from the registry.
 *
 * One row per piece: the series name over the date in a left column, then the
 * title, the one-line summary and the meta line. The series is the part of the
 * kicker before the dot ("Half-life · Field notes" → "Half-life").
 */
export default function WritingIndex() {
  return (
    <div className="article">
      <div className="articleShell">
        <nav className="articleNav" aria-label="Primary">
          <Link href="/" className="articleWordmark">
            Ruslan Ishemgulov<span className="dot">.</span>
          </Link>
          <Link href="/" className="articleBack">
            &larr; home
          </Link>
        </nav>

        <main>
          <header className="articleHead writingHead">
            <p className="articleKicker">Research &middot; {ARTICLES.length} pieces</p>
            <h1 className="articleTitle">Writing</h1>
            <p className="articleLede">{INTRO}</p>
          </header>

          <ol className="writingList">
            {ARTICLES.map((article) => (
              <li key={article.slug}>
                <Link href={`/writing/${article.slug}`} className="writingRow">
                  <span className="writingSide">
                    <span className="writingSeries">{article.kicker.split(' · ')[0]}</span>
                    <time className="writingDate" dateTime={article.date}>
                      {formatDate(article.date)}
                    </time>
                  </span>
                  <span className="writingBody">
                    <span className="writingTitle">{article.title}</span>
                    <span className="writingSummary">{article.summary}</span>
                    <span className="writingMeta">{article.meta.join(' · ')}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </main>

        <footer className="articleFooter">
          <Link href="/" className="articleFooterLink">
            &larr; Home
          </Link>
        </footer>
      </div>
    </div>
  );
}

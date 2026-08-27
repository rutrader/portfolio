import { Fragment } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUp } from 'lucide-react';

import { formatDate, getArticle } from '../_articles';

interface ArticleShellProps {
  slug: string;
  children: React.ReactNode;
}

/**
 * The chrome around every article: nav with a way back, the header, the prose
 * column, the footer.
 *
 * All header copy is read from the registry in `_articles.ts` rather than
 * passed in, so an article's page file contains its argument and nothing else.
 */
export default function ArticleShell({ slug, children }: ArticleShellProps) {
  const article = getArticle(slug);

  return (
    <div className="article" id="top">
      <div className="articleShell">
        <nav className="articleNav" aria-label="Primary">
          <Link href="/" className="articleWordmark">
            Ruslan Ishemgulov<span className="dot">.</span>
          </Link>
          <Link href="/#writing" className="articleBack">
            &larr; writing
          </Link>
        </nav>

        <main>
          <header className="articleHead">
            <p className="articleKicker">{article.kicker}</p>
            <h1 className="articleTitle">{article.title}</h1>
            <p className="articleLede">{article.lede}</p>
            <p className="articleDateline">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              {article.meta.map((item) => (
                <Fragment key={item}>
                  <span className="articleDatelineSep" aria-hidden="true">
                    &middot;
                  </span>
                  <span>{item}</span>
                </Fragment>
              ))}
            </p>
            {article.revised && article.revisionNote && (
              <aside className="articleRevision" aria-label="Revision note">
                <p className="articleRevisionLabel">
                  Revised <time dateTime={article.revised}>{formatDate(article.revised)}</time>
                </p>
                <p className="articleRevisionNote">{article.revisionNote}</p>
              </aside>
            )}
          </header>

          <article className="articleBody">{children}</article>
        </main>

        <footer className="articleFooter">
          <Link href="/#writing" className="articleFooterLink">
            <ArrowLeft size={13} aria-hidden="true" /> All writing
          </Link>
          <a className="articleFooterLink" href="#top">
            Back to top <ArrowUp size={13} aria-hidden="true" />
          </a>
        </footer>
      </div>
    </div>
  );
}

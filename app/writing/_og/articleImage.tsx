import { ImageResponse } from 'next/og';

import { loadFonts } from '@/app/_og/fonts';
import { OG } from '@/app/_og/palette';
import { formatDate, getArticle } from '../_articles';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * The share card for an article — a restatement of the page's own header, the
 * way the site card restates the first viewport: mono eyebrow, the title, a
 * hairline, then a mono line led by the teal LED.
 *
 * Everything comes from the article's registry entry, so a card can never drift
 * from the page it points at.
 */
export async function renderArticleImage(slug: string) {
  const article = getArticle(slug);

  // Satori has no clamp(): step the title down so a long one still sets on
  // three lines inside the 1200×630 frame rather than running off it.
  const fontSize = article.title.length > 46 ? 62 : 76;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '84px 90px',
        backgroundColor: OG.bg,
        backgroundImage: OG.glow,
        color: OG.text,
        fontFamily: 'Geist Sans',
      }}
    >
      <div
        style={{
          fontFamily: 'Geist Mono',
          fontSize: 22,
          letterSpacing: 3.5,
          textTransform: 'uppercase',
          color: OG.faint,
          marginBottom: 38,
        }}
      >
        {article.kicker}
      </div>

      <div
        style={{
          display: 'flex',
          fontSize,
          fontWeight: 500,
          lineHeight: 1.08,
          letterSpacing: -2.4,
          maxWidth: 1000,
        }}
      >
        {article.title}
      </div>

      <div
        style={{
          marginTop: 46,
          paddingTop: 34,
          borderTop: `1px solid ${OG.line}`,
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'Geist Mono',
          fontSize: 21,
          letterSpacing: 0.4,
          color: OG.faint,
        }}
      >
        <div
          style={{
            width: 9,
            height: 9,
            borderRadius: 9,
            backgroundColor: OG.accent,
            marginRight: 16,
          }}
        />
        ishemgulov.com &middot; {formatDate(article.date)}
      </div>
    </div>,
    { ...size, fonts: await loadFonts() }
  );
}

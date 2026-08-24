import { ImageResponse } from 'next/og';

import { loadFonts } from './_og/fonts';
import { OG } from './_og/palette';

export const alt = 'Ruslan Ishemgulov — Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
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
        color: OG.text,
        fontFamily: 'Source Serif 4',
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
        Software Engineer · Web / AI / Investing
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          // The serif carries more mass than the sans it replaced, so the card
          // headline comes down the same way the page's did, and the tracking
          // opens from -2.4 to a figure a serif does not read as cramped.
          fontSize: 68,
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: -1.4,
          maxWidth: 960,
        }}
      >
        <span>Building useful products,&nbsp;</span>
        <span style={{ color: OG.muted }}>and studying the systems behind them.</span>
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
        ishemgulov.com · Based in Czechia · EN / RU
      </div>
    </div>,
    { ...size, fonts: await loadFonts() }
  );
}

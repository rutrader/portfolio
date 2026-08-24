import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

import { OG } from './_og/palette';

export const alt = 'Ruslan Ishemgulov — Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const FONT_DIR = join(process.cwd(), 'node_modules/geist/dist/fonts');

// Satori needs real font bytes; next/font's CSS pipeline isn't available here.
async function loadFonts() {
  const [sansMedium, sansLight, mono] = await Promise.all([
    readFile(join(FONT_DIR, 'geist-sans/Geist-Medium.ttf')),
    readFile(join(FONT_DIR, 'geist-sans/Geist-Light.ttf')),
    readFile(join(FONT_DIR, 'geist-mono/GeistMono-Regular.ttf')),
  ]);
  return [
    { name: 'Geist Sans', data: sansMedium, weight: 500 as const, style: 'normal' as const },
    { name: 'Geist Sans', data: sansLight, weight: 300 as const, style: 'normal' as const },
    { name: 'Geist Mono', data: mono, weight: 400 as const, style: 'normal' as const },
  ];
}

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
        Software Engineer · Web / AI / Investing
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: 78,
          fontWeight: 500,
          lineHeight: 1.08,
          letterSpacing: -2.4,
          maxWidth: 940,
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

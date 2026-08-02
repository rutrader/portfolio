import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

const GEIST_SEMIBOLD = join(process.cwd(), 'node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.ttf');

/**
 * The site mark: an R knocked out of a Signal Teal tile.
 *
 * The filled tile is a deliberate exception to DESIGN.md's No-Box Rule — a
 * favicon competes in a browser tab strip, not on the page, and the outlined
 * variants lose their shape at 16px.
 */
export async function renderMark(px: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#6fb3a6',
          borderRadius: Math.round(px * 0.22),
          color: '#14161c',
          fontFamily: 'Geist Sans',
          fontSize: Math.round(px * 0.7),
          fontWeight: 600,
          // The R sits optically high on its own; nudge it back onto centre.
          paddingTop: Math.round(px * 0.03),
        }}
      >
        R
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: [
        {
          name: 'Geist Sans',
          data: await readFile(GEIST_SEMIBOLD),
          weight: 600,
          style: 'normal',
        },
      ],
    },
  );
}

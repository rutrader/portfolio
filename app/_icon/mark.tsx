import { ImageResponse } from 'next/og';

import { loadSerifBold } from '../_og/fonts';
import { OG } from '../_og/palette';

/**
 * The site mark: an R knocked out of a Signal Teal tile.
 *
 * The filled tile is a deliberate exception to DESIGN.md's No-Box Rule — a
 * favicon competes in a browser tab strip, not on the page, and the outlined
 * variants lose their shape at 16px.
 *
 * The letter is set in the reading face at full weight, so the mark and the
 * wordmark are the same letterform rather than two versions of the same idea.
 * It is knocked out in paper, not the old charcoal: the ground the tile is cut
 * from is cream now.
 */
export async function renderMark(px: number) {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: OG.accent,
        borderRadius: Math.round(px * 0.22),
        color: OG.bg,
        fontFamily: 'Source Serif 4',
        // A step smaller than the sans it replaced: the serif's own bracketing
        // needs the extra breathing room inside the tile to stay a shape rather
        // than a smudge at 16px.
        fontSize: Math.round(px * 0.66),
        fontWeight: 700,
        // The R sits optically high on its own; nudge it back onto centre.
        paddingTop: Math.round(px * 0.03),
      }}
    >
      R
    </div>,
    {
      width: px,
      height: px,
      fonts: await loadSerifBold(),
    }
  );
}

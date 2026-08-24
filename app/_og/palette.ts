/**
 * The palette, again — in TypeScript this time.
 *
 * Satori (next/og) rasterises the OG images and favicons without a browser, so
 * it resolves no CSS custom properties. Anything rendered through ImageResponse
 * has to carry literal colour values, which is why this file exists.
 *
 * It is a mirror of `styles/_tokens.scss`, not a second opinion. Repainting the
 * site means editing both, and the two must agree.
 */
export const OG = {
  bg: '#14161c',
  text: '#e7eaef',
  muted: '#a2a9b4',
  faint: '#7f8792',
  accent: '#6fb3a6',
  line: 'rgba(180, 200, 230, 0.11)',
  /** Page-top radial. Stronger than the web `--accent-glow`: PNG compression
   *  flattens a 0.06 wash into a flat field. */
  glow: 'radial-gradient(900px 460px at 50% -10%, rgba(111, 179, 166, 0.10), rgba(20, 22, 28, 0) 62%)',
} as const;

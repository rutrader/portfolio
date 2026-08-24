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
  bg: '#fff1e5', // Paper
  elev: '#f6e7d8', // Field
  text: '#262220', // Ink
  muted: '#5c534b',
  faint: '#766a5f',
  accent: '#0d7680', // Signal Teal
  line: '#e3d5c6',
  line2: '#efe1d3',
} as const;

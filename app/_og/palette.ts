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
  bg: '#faf7f3', // Paper
  elev: '#f2ede6', // Field
  text: '#22201e', // Ink
  muted: '#57514a',
  faint: '#71695f',
  accent: '#0d7680', // Signal Teal
  line: '#e4ddd3',
  line2: '#efe9e1',
} as const;

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const SERIF_DIR = join(process.cwd(), 'node_modules/@fontsource/source-serif-4/files');
const MONO_DIR = join(process.cwd(), 'node_modules/geist/dist/fonts/geist-mono');

/**
 * Satori needs real font bytes — next/font's pipeline isn't available to
 * anything rendered through ImageResponse, and it resolves no CSS custom
 * properties either.
 *
 * The page gets Source Serif as a variable font from next/font/google; Satori
 * cannot read a variable axis, so the static cuts come from @fontsource
 * instead. Both resolve to the same typeface, which is the point: a share card
 * that sets its type in a fallback is a share card that looks like someone
 * else's site.
 *
 * `.woff` rather than `.woff2` — Satori reads TTF, OTF and WOFF, and silently
 * fails on WOFF2.
 */
/** Just the display cut — the site mark sets one letter and needs nothing else. */
export async function loadSerifBold() {
  return [
    {
      name: 'Source Serif 4',
      data: await readFile(join(SERIF_DIR, 'source-serif-4-latin-700-normal.woff')),
      weight: 700 as const,
      style: 'normal' as const,
    },
  ];
}

export async function loadFonts() {
  const [serifRegular, serifSemi, serifBold, mono] = await Promise.all([
    readFile(join(SERIF_DIR, 'source-serif-4-latin-400-normal.woff')),
    readFile(join(SERIF_DIR, 'source-serif-4-latin-600-normal.woff')),
    readFile(join(SERIF_DIR, 'source-serif-4-latin-700-normal.woff')),
    readFile(join(MONO_DIR, 'GeistMono-Regular.ttf')),
  ]);
  return [
    { name: 'Source Serif 4', data: serifRegular, weight: 400 as const, style: 'normal' as const },
    { name: 'Source Serif 4', data: serifSemi, weight: 600 as const, style: 'normal' as const },
    { name: 'Source Serif 4', data: serifBold, weight: 700 as const, style: 'normal' as const },
    { name: 'Geist Mono', data: mono, weight: 400 as const, style: 'normal' as const },
  ];
}

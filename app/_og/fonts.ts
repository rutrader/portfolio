import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const FONT_DIR = join(process.cwd(), 'node_modules/geist/dist/fonts');

/**
 * Satori needs real font bytes — next/font's CSS pipeline isn't available to
 * anything rendered through ImageResponse. Shared by the site OG image and by
 * every article's, so the generated images set type in the same faces the page
 * does rather than in a fallback.
 */
export async function loadFonts() {
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

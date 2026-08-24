import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['geist'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // There is no /writing index page yet — the homepage section is the index.
  // Someone who truncates an article URL should land there, not on a 404.
  async redirects() {
    return [{ source: '/writing', destination: '/#writing', permanent: false }];
  },
};

export default nextConfig;

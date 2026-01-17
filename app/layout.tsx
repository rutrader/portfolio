import './globals.scss';
import { Poppins } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from 'next';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Home | Ruslan Ishemgulov',
  description:
    "Hi there! My name is Ruslan. I'm a software developer passionate about learning new skills, programming languages, economics & investing.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${GeistMono.variable}`}>
        <div className="general">
          <main>
            <div>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

import 'bootstrap/dist/css/bootstrap.css'
import './globals.scss'
import { Poppins } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] })

export const metadata = {
  title: 'Home | Ruslan Ishemgulov',
  description: 'Hi there! My name is Ruslan. I’m a software developer passionate about learning new skills, \
  programming languages, economics & investing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${GeistMono.variable}`}>
        <div className='general'>
          <main>
            <div>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}

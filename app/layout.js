import 'bootstrap/dist/css/bootstrap.css'
import './globals.scss'
import { Inter, Roboto, Poppins } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '@fortawesome/fontawesome-svg-core/styles.css'

const inter = Poppins({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] })

export const metadata = {
  title: 'Home | Ruslan Ishemgulov',
  description: 'Hi there! My name is Ruslan. I’m a software developer passionate about learning new skills, \
  programming languages, economics & investing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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

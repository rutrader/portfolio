import Header from './_layout/Header'
import About from './_layout/_sections/_about/About'
import Projects from './_layout/_sections/_projects/Projects'
import Stack from './_layout/_sections/_stacks/Stack'
import Footer from './_layout/Footer'
// import styles from './page.module.css'

export default function Home() {
  return (
    <div className='sections container'>
      {/* Header */}
      <div className="container d-flex flex-row justify-content-lg-end justify-content-center py-3">
        <Header />
      </div>
      <div className='container about-container' id="about">
        <About />
      </div>
      <div className='divider mx-auto'></div>
      <div className='container' id="stack">
        <Stack />
      </div>
      <div className='divider mx-auto'></div>
      <div className='container' id="projects">
        <Projects />
      </div>
      
      <div className='divider mx-auto'></div>
      <Footer />
    </div>
  )
}

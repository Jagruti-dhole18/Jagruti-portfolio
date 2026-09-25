import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import CodingPlatforms from './components/CodingPlatform'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {
  const [phase, setPhase] = useState('intro')
  const [typedName, setTypedName] = useState('')
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'

    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    if (phase !== 'intro') return

    const fullName = 'Jagruti Dhole'
    let index = 0

    const typingTimer = window.setInterval(() => {
      index += 1
      setTypedName(fullName.slice(0, index))

      if (index >= fullName.length) {
        window.clearInterval(typingTimer)

        const finishTimer = window.setTimeout(() => {
          setPhase('home')
        }, 700)

        return () => window.clearTimeout(finishTimer)
      }
    }, 130)

    return () => window.clearInterval(typingTimer)
  }, [phase])

  if (phase === 'intro') {
    const isComplete = typedName.length >= 'Jagruti Dhole'.length

    return (
      <div className="intro-screen" aria-live="polite" aria-busy="true">
        <div className="intro-name-wrap">
          <h1 className="intro-name" aria-label="Jagruti Dhole">
            {typedName}
            <span className="intro-cursor" aria-hidden="true" />
          </h1>
          <span className={`intro-underline ${isComplete ? 'is-visible' : ''}`} aria-hidden="true" />
        </div>
      </div>
    )
  }

  return (
    <div className="site-shell homepage-enter">
      <div className="page-noise" aria-hidden="true" />
      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <CodingPlatforms />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

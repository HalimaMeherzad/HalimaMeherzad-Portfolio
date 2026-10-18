import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import ProjectsSection from '../components/ProjectsSection'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView())
      }
    }
  }, [hash])

  return (
    <>
      <div className="hero-about">
        <Hero />
        <About />
      </div>
      <ProjectsSection />
      <Services />
      <Skills />
      <Contact />
    </>
  )
}

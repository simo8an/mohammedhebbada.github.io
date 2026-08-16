import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import MyWorld from './components/MyWorld'
import Services from './components/Services'
import Stats from './components/Stats'
import Contact from './components/Contact'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <main className="notebook-bg min-h-screen bg-cream text-navy">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <MyWorld />
      <Services />
      <Stats />
      <Contact />
      <SiteFooter />
    </main>
  )
}

import { useScrollReveal } from './hooks/index.js'
import { Navbar, Cursor, Hero, Services, NameSuggestions, Projects, Pending, Skills, Pricing, EmailCampaign, Contact, Footer } from './components/index.js'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Services />
      <NameSuggestions />
      <Projects />
      <Pending />
      <Skills />
      <Pricing />
      <EmailCampaign />
      <Contact />
      <Footer />
    </>
  )
}

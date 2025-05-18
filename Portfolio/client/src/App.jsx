import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Activities from './components/Activities'
import SocialLinks from './components/SocialLinks'

function App() {
  const [currentSection, setCurrentSection] = useState('Home')

  const renderSection = () => {
    switch (currentSection) {
      case 'Home':
        return <Home />
      case 'About':
        return <About />
      case 'Projects':
        return <Activities />
      case 'Social':
        return <SocialLinks />
      default:
        return <Home />
    }
  }

  return (
    
    <div className="font-sans text-center">
      <Navbar onNavigate={setCurrentSection} />
      <main className="p-6">
        {renderSection()}
      </main>
    </div>
  )
}

export default App

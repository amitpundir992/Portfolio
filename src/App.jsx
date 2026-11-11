import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div className='overflow-hidden bg-[#0a0a0f] relative'>
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Custom Cursor Glow (Desktop Only) */}
      <CursorGlow />
      
      {/* Main Content */}
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Project />
      <Contact />
      <Footer />
      
      {/* Back to Top Button */}
      <ScrollToTop 
        smooth 
        color='white' 
        style={{
          backgroundColor: '#3b82f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '12px',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
        }}
      />
    </div>
  )
}

export default App

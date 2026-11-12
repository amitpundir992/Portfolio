import React, { useState, useEffect } from 'react'
import Logo from '../assets/Logo.png'
import { FaChevronRight } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section for navbar highlights
      const sections = ['home', 'about', 'education', 'project', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'hero' : section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', section: 'home' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Education', href: '#education', section: 'education' },
    { name: 'Projects', href: '#project', section: 'project' },
  ];

  return (
    <nav className={`z-50 w-full fixed top-0 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
      <div className={`max-w-7xl mx-auto px-4 ${scrolled ? 'navbar-glass' : ''} rounded-full transition-all duration-300`}>
        <div className='flex items-center justify-between'>

          {/* Logo */}
          <a href='/' className='relative z-10'>
            <img 
              src={Logo} 
              alt='Amit Pundir Logo' 
              className='w-[140px] md:w-[155px] hover:opacity-80 transition-opacity duration-200' 
            />
          </a>

          {/* Desktop nav - Glass pill style */}
          <div className='hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-lg'>
            {navLinks.map((link) => (
              <a 
                key={link.section}
                href={link.href} 
                className={`nav-link px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  activeSection === link.section 
                    ? 'bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-500/20 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className='relative z-10'>{link.name}</span>
                {activeSection === link.section && (
                  <span className='absolute inset-0 bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-cyan-500/10 rounded-full blur-sm' />
                )}
              </a>
            ))}
            
            <a href='#contact'>
              <button className='btn-glow ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center gap-2 text-sm font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]'>
                Contact <FaChevronRight className='text-xs' />
              </button>
            </a>
          </div>

          {/* Mobile toggle */}
          <div className='md:hidden text-white text-3xl cursor-pointer hover:text-blue-400 transition-colors duration-200 z-10'>
            {showMenu
              ? <HiMenuAlt3 onClick={toggleMenu} aria-label="Close menu" />
              : <HiMenuAlt1 onClick={toggleMenu} aria-label="Open menu" />
            }
          </div>
        </div>
      </div>

      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </nav>
  );
}

export default Navbar

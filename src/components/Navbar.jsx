import React, { useState, useEffect } from 'react'
import Logo from '../assets/Logo.png'
import { FaChevronRight } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`z-50 w-full py-3 fixed transition-all duration-300 ${scrolled ? 'navbar-glass' : 'bg-transparent'}`}>
      <div className='flex items-center justify-between max-w-7xl mx-auto px-4'>

        {/* Logo */}
        <a href='/'>
          <img src={Logo} alt='logo img' className='w-[155px] hover:opacity-80 transition-opacity duration-200' />
        </a>

        {/* Desktop nav */}
        <nav className='hidden md:block'>
          <ul className='flex gap-7 text-lg items-center font-semibold text-white'>
            <a href='/' className='nav-link pb-1 block'>
              <li className='cursor-pointer'>Home</li>
            </a>
            <a href='#about' className='nav-link pb-1 block'>
              <li className='cursor-pointer'>About</li>
            </a>
            <a href='#education' className='nav-link pb-1 block'>
              <li className='cursor-pointer'>Education</li>
            </a>
            <a href='#project' className='nav-link pb-1 block'>
              <li className='cursor-pointer'>Projects</li>
            </a>
            <a href='#contact'>
              <button className='btn-glow px-4 py-1.5 cursor-pointer rounded-lg bg-blue-500 text-white flex items-center gap-1.5 border border-blue-400/50 font-medium hover:bg-blue-600 transition-colors'>
                Contact <FaChevronRight className='text-xs' />
              </button>
            </a>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <div className='md:hidden text-white text-3xl cursor-pointer hover:text-blue-400 transition-colors duration-200'>
          {showMenu
            ? <HiMenuAlt3 onClick={toggleMenu} />
            : <HiMenuAlt1 onClick={toggleMenu} />
          }
        </div>
      </div>

      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}

export default Navbar

import React from 'react'
import { FaUserCircle, FaChevronRight } from "react-icons/fa";

const NavItem = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick}>
    <li className='px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-200 cursor-pointer list-none font-medium'>
      {children}
    </li>
  </a>
);

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const close = () => setShowMenu(false);

  return (
    <>
      {/* Backdrop with blur */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/60 z-10 md:hidden backdrop-blur-md"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[80%] max-w-[320px] flex-col justify-between glass-card border-r border-white/10 px-6 pb-8 pt-24 md:hidden transition-all duration-300 ease-in-out shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl bg-[#0a0a0f]/95`}
      >
        <div>
          {/* User profile chip */}
          <div className='flex items-center gap-3 p-4 glass-card rounded-2xl border-blue-500/20 bg-blue-500/5 mb-8'>
            <FaUserCircle size={44} className='text-cyan-400 flex-shrink-0' />
            <div>
              <p className='text-white font-semibold text-sm'>Hello User</p>
              <p className='text-cyan-400/70 text-xs font-medium'>Welcome Back</p>
            </div>
          </div>

          {/* Nav links */}
          <nav>
            <ul className='flex flex-col gap-2 text-base font-medium'>
              <NavItem href='/'          onClick={close}>Home</NavItem>
              <NavItem href='#about'     onClick={close}>About</NavItem>
              <NavItem href='#education' onClick={close}>Education & Experience</NavItem>
              <NavItem href='#project'   onClick={close}>Projects</NavItem>

              <a href='#contact' onClick={close}>
                <button className='w-full mt-3 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center gap-2 font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] focus-ring'>
                  Contact <FaChevronRight className='text-sm' />
                </button>
              </a>
            </ul>
          </nav>
        </div>

        <p className='text-xs text-gray-600 text-center font-medium'>
          Amit Pundir &copy; {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
}

export default ResponsiveMenu

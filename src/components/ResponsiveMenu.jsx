import React from 'react'
import { FaUserCircle, FaChevronRight } from "react-icons/fa";

const NavItem = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick}>
    <li className='px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 cursor-pointer list-none'>
      {children}
    </li>
  </a>
);

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const close = () => setShowMenu(false);

  return (
    <>
      {/* Backdrop */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden backdrop-blur-sm"
          onClick={close}
        />
      )}

      {/* Drawer */}
      <div
        className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[78%] max-w-[300px] flex-col justify-between bg-gray-950 border-r border-gray-800/50 px-5 pb-8 pt-20 md:hidden transition-all duration-300 ease-in-out shadow-2xl`}
      >
        <div>
          {/* User profile chip */}
          <div className='flex items-center gap-3 p-4 bg-gray-900/70 rounded-xl border border-gray-800/50 mb-8'>
            <FaUserCircle size={40} className='text-blue-400 flex-shrink-0' />
            <div>
              <p className='text-white font-semibold text-sm'>Hello User</p>
              <p className='text-blue-400/70 text-xs'>Premium User</p>
            </div>
          </div>

          {/* Nav links */}
          <nav>
            <ul className='flex flex-col gap-1 text-base font-medium'>
              <NavItem href='/'          onClick={close}>Home</NavItem>
              <NavItem href='#about'     onClick={close}>About</NavItem>
              <NavItem href='#education' onClick={close}>Education & Experience</NavItem>
              <NavItem href='#project'   onClick={close}>Projects</NavItem>

              <a href='#contact' onClick={close}>
                <button className='w-full mt-2 px-4 py-3 rounded-xl bg-blue-500 text-white flex items-center justify-center gap-2 font-semibold hover:bg-blue-600 transition-colors border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.25)]'>
                  Contact <FaChevronRight className='text-sm' />
                </button>
              </a>
            </ul>
          </nav>
        </div>

        <p className='text-xs text-gray-700 text-center'>
          Amit Pundir &copy; {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
}

export default ResponsiveMenu

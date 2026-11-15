import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#0a0a0f] border-t border-white/10 text-gray-500 py-8 px-6 relative overflow-hidden'>
      {/* Gradient divider glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()}{' '}
          <span className='gradient-text font-semibold'>
            Amit Pundir
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

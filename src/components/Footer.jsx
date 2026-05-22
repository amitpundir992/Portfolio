import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 border-t border-gray-800/50 text-gray-500 py-8 px-4'>
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()}{' '}
          <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold'>
            Amit Pundir
          </span>
          . All rights reserved.
        </p>
       
      </div>
    </footer>
  )
}

export default Footer

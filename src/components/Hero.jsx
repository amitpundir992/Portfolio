import React from 'react'
import { LuDownload } from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Profile from "../assets/profile.jpg"


const Hero = () => {
  return (
    <section className='h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10'>
    <div className='max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between'>
     <div className='md:space-y-6 px-4'>
      <h1 className='md:text-6xl text-4xl font-bold mb-4'>Hi👋, I'm <p className='text-blue-400'>Amit Pundir</p></h1>
      <p className='md:text-2xl text-lg mb-3'>Full-Stack Developer | MERN Stack Enthusiast</p>
      <p className='lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300'>I am a passionate and dedicated full-stack developer with a strong focus on the MERN (MongoDB, Express.js, React, Node.js) stack. Constantly learning and adapting to new technologies, I am committed to staying ahead in the ever-evolving tech landscape.</p>
      <button className='px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]'><a href=".../public/Resume.pdf" download className='flex items-center gap-2'><LuDownload className='w-5 h-5'/>Download CV</a></button>
      <div className='flex gap-3 text-2xl transition-all mt-5 md:mt-0'>
      <a href='https://www.linkedin.com/in/amitpundir01/' target='_blank'><FaLinkedin className='hover:text-blue-400' /></a>
      <a href='https://github.com/amitpundir992' target='_blank'><FaGithub className='hover:text-blue-400' /></a>
     </div>
     </div>
     <div className='relative group'>
      <img src={Profile} alt='profile img' className='rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'/>
     </div>
    </div>
    </section> 
  )
}

export default Hero

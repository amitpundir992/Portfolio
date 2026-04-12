import React from 'react'
import AboutImg from "../assets/about.jpg"
import { FaChevronRight } from "react-icons/fa";


const About = () => {
  return (
    <div id='about' className='py-20 bg-gray-900 z-50 text-gray-300'>
    <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>
        {/* img section */}
            <div className='relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
                <img src={AboutImg} alt='about img' className='w-[300px] md:w-[1800px] rounded-full border-blue-600 border shadow-blue-500' />
            </div>
            {/* paragraph section */}
            <div className='p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
               <p className='text-lg leading-7 mb-1'>
Hi! I'm Amit Pundir, a Full-Stack Developer with hands-on experience in building scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I specialize in backend development, REST API design, and real-time systems.
</p>

<p className='text-lg leading-7 mb-1'>
Currently working as a Software Developer at Aucourant Technologies, I develop SaaS-based applications with role-based access control (RBAC), real-time camera streaming using WebSockets and FFmpeg, and secure subscription-based systems. I focus on writing clean, modular, and high-performance code to build reliable and scalable systems.
</p>

<p className='text-lg leading-7 mb-6'>
I have experience working on real-time video processing platforms, payment gateway integrations, and complete end-to-end application architecture. Passionate about problem-solving and continuous learning, I enjoy building impactful products and collaborating in fast-paced development environments.
</p>
                <div className='mt-5'>
                    <h1 className='font-bold text-2xl mb-5 text-blue-400'>My Skills</h1>
                    <div className='flex flex-wrap gap-4 mb-5 text-sm'>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded- full'>HTML</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded- full'>CSS</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded- full'>Javascript</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded- full'>React</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded- full'>Node.js</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded- full'>ExpressJs</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded- full'>My SQL</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded- full'>MongoDB</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded- full'>Nextjs</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded- full'>Tailwind Css</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded- full'>Git</p>
                    </div>
                <a href='#contact'><button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1'>Contact<FaChevronRight/></button></a>
                </div>
            </div>
        </div>
    </div>     
    </div>
  )
}

export default About

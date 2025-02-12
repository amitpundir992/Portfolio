import React from 'react'
import Website from '../assets/Website.png'
import Game from '../assets/game.png'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
    const projects = [
        {
          title: "Authentication & Authorization",
          description:
            "Developed a backend service for user authentication and authorization in a web application. Implemented secure user registration, login, and password reset functionality, along with email verification and password strength validation.",
          techStack: ["Node.js", "MongoDB", "ExpressJs", "React"],
          link: "/",
          github: 'https://github.com/amitpundir992/MERN',
          image: Game, // Replace with your project screenshot
        },
        {
          title: "Website",
          description:
            "Developed a professional website using React.js, featuring login functionality to personalize the user experience and effectively showcase projects.",
          techStack: ["React", "bootstrap"],
          link: "https://amitpundir992.github.io/",
          github: 'https://github.com/amitpundir992/react_live_website',
          image: Website,  
        },
        {
          title: "Game Template",
          description:
            "Create a fully responsive game template clone using only HTML, CSS, and JavaScript.",
          techStack: ["HTML","CSS","Javascript"],
          link: "https://amit-game-website.netlify.app/",
          github: 'https://github.com/amitpundir992/game_template',
          image: Game,  
        },
      ];
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {projects.map((project, index) => (
                <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                    <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
                    <div className='p-6'>
                        <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.techStack.map((tech, idx) => (
                                <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'><FaGithub/> Github</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Project
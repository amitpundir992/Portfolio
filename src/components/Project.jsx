import React from 'react'
import Atech from '../assets/Atech.png'
import Creche from '../assets/Creche.jpg'
import Farm from '../assets/Farm.jpg'
import { FaGithub } from 'react-icons/fa'

const Project = () => {

  const projects = [
    {
      title: "Creche Management System (SaaS)",
      description:
        "Built a scalable SaaS-based platform for real-time creche monitoring using live camera feeds. Implemented WebSockets for live streaming, FFmpeg for video processing, and RBAC for secure multi-user access. Integrated Razorpay for subscription-based payments, along with audit logs and support ticket system.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "WebSockets", "FFmpeg", "Razorpay"],
      link: null,
      github: null,
      status: "In Progress 🚧",
      image: Creche,
    },
    {
      title: "Farm Management System",
      description:
        "Developing a full-stack system to manage agricultural operations, track resources, and monitor farm activities. Focused on scalable backend architecture, efficient data handling, and real-time insights for improved decision-making.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "i18n"],
      link: null,
      github: null,
      status: "In Progress 🚧",
      image: Farm,
    },
    {
      title: "Aucourant Technologies CMS",
      description:
        "Worked on a fully dynamic CMS platform powering the Aucourant Technologies website. Built scalable backend APIs, modular architecture, and dynamic content management features to handle real-time updates and admin-controlled website data.",
      techStack: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      link: "https://aucouranttechnologies.com/",
      github: null,
      status: "Live ✅",
      image: Atech,
    },
  ];

  return (
    <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>
          Projects
        </h2>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projects.map((project, index) => (
            
            <div 
              key={index} 
              className='bg-gray-950 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-blue-500/20'
            >
              
              {/* Image */}
              <div className='relative'>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'
                />

                {/* Status Badge */}
                <span className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-semibold
                  ${project.status.includes("Live") 
                    ? "bg-green-500 text-white" 
                    : "bg-yellow-500 text-black"
                  }`}>
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-2xl font-semibold text-gray-200 mb-2'>
                  {project.title}
                </h3>

                <p className='text-gray-400 mb-4 text-sm leading-6'>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.techStack.map((tech, idx) => (
                    <div 
                      key={idx} 
                      className='bg-gray-900 text-gray-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition'
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className='flex gap-3'>
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block bg-blue-500 text-white px-5 py-2 rounded-lg text-sm shadow-md hover:bg-blue-600 transition'
                    >
                      View Project
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex gap-2 items-center bg-gray-800 text-white px-5 py-2 rounded-lg text-sm shadow-md hover:bg-gray-900 transition'
                    >
                      <FaGithub /> Github
                    </a>
                  )}

                  {!project.link && !project.github && (
                    <span className='bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-medium'>
                      Private / In Progress
                    </span>
                  )}

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
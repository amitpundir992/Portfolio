import React from 'react'
import Creche from '../assets/Creche.jpg'
import examora from '../assets/examora.png'
import Farm from '../assets/Farm.jpg'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import useInView from '../hooks/useInView';

const projects = [
  {
    title: "Creche Management System (SaaS)",
    description:
      "Built a scalable SaaS-based platform for real-time creche monitoring using live camera feeds. Implemented WebSockets for live streaming, FFmpeg for video processing, and RBAC for secure multi-user access. Integrated Razorpay for subscription-based payments, along with audit logs and support ticket system.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "WebSockets", "FFmpeg", "Razorpay"],
    link: "https://smart-surveillance-ai.vercel.app/",
    github: "https://github.com/amitpundir992/Smart-Surveillance-AI",
    status: "Live ✅",
    image: Creche,
  },
  {
    title: "Examora",
    description:
      "Examora is an AI-powered exam generation platform that transforms PDF documents into structured quizzes, MCQs, and assessments. Built with Next.js, TypeScript, Prisma, PostgreSQL, and AI-powered question extraction.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AI"],
    link: "https://examora-three.vercel.app/",
    github: "https://github.com/amitpundir992/Examora",
    status: "Live ✅",
    image: examora,
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
];

const ProjectCard = ({ project, index }) => {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`project-card bg-gray-950 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-blue-500/30 group ${
        visible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Image */}
      <div className='relative overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-48 object-cover px-3 pt-3 rounded-2xl transition-transform duration-500 group-hover:scale-105'
        />

        {/* Hover overlay */}
        <div className='project-image-overlay absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent flex items-end p-5'>
          <p className='text-gray-300 text-xs leading-relaxed line-clamp-4'>{project.description}</p>
        </div>

        {/* Status badge */}
        <span className={`absolute top-5 left-5 text-xs px-3 py-1 rounded-full font-semibold shadow-lg backdrop-blur-sm ${
          project.status.includes("Live")
            ? "bg-green-500/85 text-white"
            : "bg-yellow-500/85 text-black"
        }`}>
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className='p-5'>
        <h3 className='text-lg font-bold text-gray-100 mb-2'>{project.title}</h3>
        <p className='text-gray-400 text-sm leading-6 mb-4 line-clamp-3'>{project.description}</p>

        {/* Tech stack */}
        <div className='flex flex-wrap gap-1.5 mb-4'>
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className='bg-gray-900 text-gray-400 text-xs font-medium px-2.5 py-0.5 rounded-full border border-gray-700/50 hover:bg-blue-500 hover:text-white hover:border-blue-400/50 transition-all duration-200 cursor-default'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className='flex gap-3 flex-wrap'>
          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-glow flex items-center gap-1.5 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors'
            >
              <FaExternalLinkAlt className='text-xs' /> View Project
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex gap-2 items-center bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors'
            >
              <FaGithub /> Github
            </a>
          )}
          {!project.link && !project.github && (
            <span className='bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 px-4 py-2 rounded-lg text-sm font-medium'>
              Private / In Progress
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const [titleRef, titleVisible] = useInView();

  return (
    <section id='project' className='bg-gray-900 py-20 px-6 relative overflow-hidden'>

      {/* Ambient glow */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-blue-600/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className='max-w-7xl mx-auto'>

        <div
          ref={titleRef}
          className={`text-center mb-14 ${titleVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>Projects</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full' />
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project

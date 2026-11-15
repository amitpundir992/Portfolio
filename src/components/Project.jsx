import React from 'react'
import Creche from '../assets/Creche.jpg'
import examora from '../assets/examora.png'
import Jobtourer from '../assets/Jobtourer.png'
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
    title: "JobTourer",
    description:
      "JobTourer is a job discovery and application workflow platform that finds relevant opportunities, matches them with a candidate's profile and resume, and ranks recommendations by match score. It also tracks applications and creates personalized, reviewable Gmail drafts for suitable jobs.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Trigger.dev", "Gmail API"],
    link: "https://jobtourer.vercel.app/",
    github: "https://github.com/amitpundir992/Jobtourer",
    status: "Live ✅",
    image: Jobtourer,
  },
];

const ProjectCard = ({ project, index }) => {
  const [ref, visible] = useInView();

  return (
    <article
      ref={ref}
      className={`project-card glass-card rounded-2xl overflow-hidden border-blue-500/20 bg-blue-500/5 backdrop-blur-xl group ${
        visible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Image Container */}
      <div className='relative overflow-hidden bg-black/20'>
        <img
          src={project.image}
          alt={`${project.title} Screenshot`}
          className='w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110'
          loading="lazy"
        />

        {/* Hover Gradient Overlay */}
        <div className='project-image-overlay absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent flex items-end p-6'>
          <p className='text-gray-300 text-sm leading-relaxed line-clamp-4'>{project.description}</p>
        </div>

        {/* Status Badge */}
        <span className={`absolute top-4 right-4 text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg backdrop-blur-md ${
          project.status.includes("Live")
            ? "bg-green-500/90 text-white border border-green-400/50"
            : "bg-yellow-500/90 text-black border border-yellow-400/50"
        }`}>
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className='p-6'>
        <h3 className='text-xl font-bold font-heading text-white mb-3 group-hover:gradient-text transition-all'>{project.title}</h3>
        <p className='text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3'>{project.description}</p>

        {/* Tech Stack Pills */}
        <div className='flex flex-wrap gap-2 mb-5'>
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className='glass-card text-gray-300 text-xs font-medium px-3 py-1 rounded-full border-blue-500/20 hover:bg-blue-500/20 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200 cursor-default'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className='flex gap-3 flex-wrap'>
          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-glow flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] focus-ring'
            >
              <FaExternalLinkAlt className='text-xs' /> View Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex gap-2 items-center glass-card border-gray-600/50 text-gray-300 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/10 hover:text-white hover:border-white/30 transition-all focus-ring'
            >
              <FaGithub className='text-base' /> GitHub
            </a>
          )}
          {!project.link && !project.github && (
            <span className='glass-card border-yellow-500/30 bg-yellow-500/10 text-yellow-400 px-5 py-2.5 rounded-xl text-sm font-medium'>
              Private / In Progress
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  const [titleRef, titleVisible] = useInView();

  return (
    <section id='project' className='section-padding bg-[#0a0a0f] relative overflow-hidden'>

      {/* Ambient glow */}
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-blue-600/8 rounded-full filter blur-[120px] pointer-events-none animate-glow-pulse" />
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full filter blur-[120px] pointer-events-none animate-glow-pulse" style={{ animationDelay: '2s' }} />

      <div className='container-custom'>

        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-4'>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className='w-24 h-1.5 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 mx-auto rounded-full' />
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

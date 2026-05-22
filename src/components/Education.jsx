import React from 'react'
import useInView from '../hooks/useInView';

const education = [
  {
    degree: "Masters In Computer Application (MCA)",
    institution: "Graphic Era Hill University",
    year: "2022 – 2024",
    description: "Post-Graduated with a strong foundation in critical thinking and problem-solving.",
    icon: "🎓",
  },
  {
    degree: "Bachelor In Computer Applications (BCA)",
    institution: "Graphic Era Hill University",
    year: "2018 – 2021",
    description: "Focused on advanced software development, system design, and scalable application architecture, strengthening problem-solving and analytical skills.",
    icon: "🎓",
  },
];

const experience = [
  {
    role: "Software Developer",
    company: "Aucourant Technologies Private LTD",
    year: "Jul, 2025 – Present",
    description: "Built scalable SaaS backend systems with RBAC, real-time camera streaming using WebSockets & FFmpeg, and secure REST APIs with subscription-based access. Focused on performance optimization and modular architecture.",
    icon: "💻",
  },
  {
    role: "Software Developer (Intern)",
    company: "Cynoteck",
    year: "Oct, 2024 – Apr, 2025",
    description: "Gained hands-on experience in full-stack development using MERN stack. Worked on building REST APIs, improving backend logic, and understanding scalable application architecture while collaborating in a professional development environment.",
    icon: "💼",
  },
];

const TimelineCard = ({ item, index, animClass }) => {
  const [ref, visible] = useInView();
  const isEdu = 'degree' in item;

  return (
    <div
      ref={ref}
      className={`relative pl-10 mb-7 ${visible ? animClass : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Dot */}
      <div className='absolute left-[-1px] top-5 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950 shadow-[0_0_10px_rgba(59,130,246,0.6)] z-10' />

      {/* Card */}
      <div className='bg-gray-900 p-5 rounded-xl border border-gray-800/50 hover:border-blue-500/30 shadow-md hover:-translate-y-1 hover:shadow-blue-500/10 transition-all duration-300'>
        <div className='flex items-start gap-3'>
          <span className='text-2xl mt-0.5 flex-shrink-0'>{item.icon}</span>
          <div>
            <h4 className='text-base font-bold text-gray-100 leading-snug'>
              {isEdu ? item.degree : item.role}
            </h4>
            <p className='text-blue-400 font-medium text-sm mt-0.5'>
              {isEdu ? item.institution : item.company}
            </p>
            <span className='inline-block mt-1.5 mb-2 text-xs bg-blue-500/15 text-blue-300 border border-blue-500/25 px-2.5 py-0.5 rounded-full'>
              {item.year}
            </span>
            <p className='text-gray-400 text-sm leading-relaxed'>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const [titleRef, titleVisible] = useInView();

  return (
    <section id='education' className='bg-gray-950 py-20 px-6 relative overflow-hidden'>

      {/* Ambient glow */}
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-purple-600/5 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute right-0 top-20 w-64 h-64 bg-blue-600/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className='max-w-6xl mx-auto'>

        {/* Section heading */}
        <div
          ref={titleRef}
          className={`text-center mb-14 ${titleVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-4'>Education & Experience</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full' />
        </div>

        <div className='grid md:grid-cols-2 gap-8 md:gap-16'>

          {/* Education column */}
          <div>
            <h3 className='text-xl font-semibold text-gray-200 mb-6 flex items-center gap-2.5'>
              <span className='w-8 h-8 bg-blue-500/15 rounded-lg flex items-center justify-center'>🎓</span>
              Education
            </h3>
            <div className='timeline-line pl-5'>
              {education.map((edu, i) => (
                <TimelineCard key={i} item={edu} index={i} animClass='animate-slideInLeft' />
              ))}
            </div>
          </div>

          {/* Experience column */}
          <div>
            <h3 className='text-xl font-semibold text-gray-200 mb-6 flex items-center gap-2.5'>
              <span className='w-8 h-8 bg-purple-500/15 rounded-lg flex items-center justify-center'>💼</span>
              Experience
            </h3>
            <div className='timeline-line pl-5'>
              {experience.map((exp, i) => (
                <TimelineCard key={i} item={exp} index={i} animClass='animate-slideInRight' />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education

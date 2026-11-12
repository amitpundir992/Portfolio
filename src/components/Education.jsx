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
    role: "Software Developer",
    company: "Cynoteck",
    year: "Oct, 2024 – Jun, 2025",
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
      className={`relative pl-10 mb-8 ${visible ? animClass : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Glowing Dot */}
      <div className='absolute left-[-1px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-[#0a0a0f] shadow-[0_0_12px_rgba(59,130,246,0.7)] z-10' />

      {/* Glass Card */}
      <div className='glass-card glass-card-hover p-6 rounded-2xl border-blue-500/20 bg-blue-500/5 backdrop-blur-xl'>
        <div className='flex items-start gap-4'>
          <span className='text-3xl flex-shrink-0'>{item.icon}</span>
          <div>
            <h4 className='text-base sm:text-lg font-bold font-heading text-white leading-snug'>
              {isEdu ? item.degree : item.role}
            </h4>
            <p className='text-cyan-400 font-medium text-sm sm:text-base mt-1'>
              {isEdu ? item.institution : item.company}
            </p>
            <span className='inline-block mt-2 mb-3 text-xs glass-card border-blue-500/30 text-blue-300 px-3 py-1 rounded-full font-medium'>
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
    <section id='education' className='section-padding bg-[#0a0a0f] relative overflow-hidden'>

      {/* Ambient glow */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full filter blur-[100px] pointer-events-none animate-glow-pulse" />
      <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-blue-600/8 rounded-full filter blur-[100px] pointer-events-none animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className='max-w-6xl mx-auto px-6'>

        {/* Section heading */}
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white mb-4'>
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <div className='w-24 h-1.5 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 mx-auto rounded-full' />
        </div>

        <div className='grid md:grid-cols-2 gap-10 md:gap-16'>

          {/* Education column */}
          <div>
            <h3 className='text-xl sm:text-2xl font-semibold font-heading text-white mb-7 flex items-center gap-3'>
              <span className='w-10 h-10 glass-card border-blue-500/30 bg-blue-500/10 rounded-xl flex items-center justify-center text-xl'>🎓</span>
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
            <h3 className='text-xl sm:text-2xl font-semibold font-heading text-white mb-7 flex items-center gap-3'>
              <span className='w-10 h-10 glass-card border-purple-500/30 bg-purple-500/10 rounded-xl flex items-center justify-center text-xl'>💼</span>
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

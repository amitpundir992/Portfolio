import React from 'react'
import { FaChevronRight, FaRobot, FaWifi, FaCubes, FaServer } from "react-icons/fa";
import useInView from '../hooks/useInView';

const expertise = [
  {
    icon: <FaRobot />,
    label: 'AI & ML Integration',
    desc: 'YOLO · ArcFace · Face Recognition · Real-Time Event Detection',
    color:  'text-purple-400',
    border: 'border-purple-500/25',
    bg:     'bg-purple-500/8',
    glow:   'hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]',
  },
  {
    icon: <FaWifi />,
    label: 'Real-Time Systems',
    desc: 'WebSockets · Redis · RabbitMQ · Live Video Streaming (FFmpeg)',
    color:  'text-yellow-400',
    border: 'border-yellow-500/25',
    bg:     'bg-yellow-500/8',
    glow:   'hover:shadow-[0_8px_30px_rgba(234,179,8,0.15)]',
  },
  {
    icon: <FaCubes />,
    label: 'SaaS Architecture',
    desc: 'RBAC · Multi-Tenant · Subscription Billing · Audit Logging',
    color:  'text-cyan-400',
    border: 'border-cyan-500/25',
    bg:     'bg-cyan-500/8',
    glow:   'hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)]',
  },
  {
    icon: <FaServer />,
    label: 'Backend APIs & Microservices',
    desc: 'Node.js · Python · FastAPI · REST · Distributed Pipelines',
    color:  'text-green-400',
    border: 'border-green-500/25',
    bg:     'bg-green-500/8',
    glow:   'hover:shadow-[0_8px_30px_rgba(34,197,94,0.15)]',
  },
];

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '6+',   label: 'Projects Shipped'  },
  { value: '15+',  label: 'Technologies'       },
  { value: '2',    label: 'AI Systems Built'   },
];

const skills = [
  { name: 'JavaScript',   color: 'border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10' },
  { name: 'Typescript',   color: 'border-teal-400/50 text-teal-400 hover:bg-teal-400/10' },
  { name: 'Python',       color: 'border-blue-300/50   text-blue-300   hover:bg-blue-300/10'   },
  { name: 'React.js',     color: 'border-cyan-400/50   text-cyan-400   hover:bg-cyan-400/10'   },
  { name: 'Node.js',      color: 'border-green-400/50  text-green-400  hover:bg-green-400/10'  },
  { name: 'FastAPI',      color: 'border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10' },
  { name: 'Express.js',   color: 'border-gray-400/50   text-gray-400   hover:bg-gray-400/10'   },
  { name: 'MongoDB',      color: 'border-green-500/50  text-green-500  hover:bg-green-500/10'  },
  { name: 'Redis',        color: 'border-red-400/50    text-red-400    hover:bg-red-400/10'    },
  { name: 'RabbitMQ',     color: 'border-orange-400/50 text-orange-400 hover:bg-orange-400/10' },
  { name: 'WebSockets',   color: 'border-purple-400/50 text-purple-400 hover:bg-purple-400/10' },
  { name: 'FFmpeg',       color: 'border-pink-400/50   text-pink-400   hover:bg-pink-400/10'   },
  { name: 'Next.js',      color: 'border-white/30      text-white      hover:bg-white/10'       },
  { name: 'Tailwind CSS', color: 'border-cyan-500/50   text-cyan-500   hover:bg-cyan-500/10'   },
  { name: 'Docker',       color: 'border-blue-400/50   text-blue-400   hover:bg-blue-400/10'   },
  { name: 'Git',          color: 'border-red-400/50    text-red-400    hover:bg-red-400/10'    },
];

const About = () => {
  const [titleRef,  titleVisible]  = useInView();
  const [leftRef,   leftVisible]   = useInView();
  const [rightRef,  rightVisible]  = useInView();
  const [skillsRef, skillsVisible] = useInView();

  return (
    <section id='about' className='section-padding bg-[#0a0a0f] text-gray-300 relative overflow-hidden'>

      {/* Ambient aurora glow */}
      <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full filter blur-[120px] pointer-events-none animate-glow-pulse" />
      <div className="absolute left-0 bottom-20 w-[500px] h-[500px] bg-blue-600/8 rounded-full filter blur-[120px] pointer-events-none animate-glow-pulse" style={{ animationDelay: '1s' }} />

      <div className='container-custom'>

        {/* ── Section Heading ── */}
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-4'>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className='w-24 h-1.5 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 mx-auto rounded-full' />
        </div>

        {/* ── Main Two-Column Layout ── */}
        <div className='grid lg:grid-cols-2 gap-12 mb-12'>

          {/* LEFT — Bio + Stats */}
          <div
            ref={leftRef}
            className={`flex flex-col gap-6 ${leftVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}
          >
            {/* Tag */}
            <div className='inline-flex items-center gap-2 w-fit glass-card px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase border-blue-500/20'>
              <span className="text-blue-400">Full-Stack Engineer</span>
              <span className="text-gray-600">·</span>
              <span className="text-cyan-400">AI & Real-Time Systems</span>
            </div>

            {/* Bio Text */}
            <div className='space-y-5 text-gray-300 text-[15px] sm:text-base leading-relaxed'>
              <p>
                I'm <span className='text-white font-semibold'>Amit Pundir</span> — a Full-Stack Engineer
                specializing in building <span className='text-blue-400 font-medium'>scalable real-time SaaS platforms
                and AI-powered systems</span> using Node.js, Python, FastAPI, React.js, TypeScript, PostgreSQL, MongoDB, Redis, and RabbitMQ.
              </p>
              <p>
                I've delivered measurable results: <span className='text-green-400 font-medium'>optimized API latency by 35%</span>, 
                built systems processing <span className='text-purple-400 font-medium'>20+ concurrent video streams with sub-200ms 
                detection latency</span>, and architected platforms serving users across multi-tenant SaaS environments.
              </p>
              <p>
                I've architected distributed backends supporting <span className='text-purple-400 font-medium'>live
                video streaming, AI-based event detection</span> (YOLO &amp; ArcFace face recognition), WebSocket
                communication, RBAC multi-tenant systems, and payment infrastructure with Razorpay.
              </p>
              <p>
                Beyond backend systems, I build complete products: <span className='text-cyan-400 font-medium'>Jobtourer</span> (AI 
                job automation with resume matching), <span className='text-cyan-400 font-medium'>Examora</span> (OCR + AI-powered 
                exam platform), and <span className='text-cyan-400 font-medium'>Creche Management</span> (live CCTV monitoring with 
                YOLO/ArcFace). I work across the full stack — from React/Next.js interfaces to Python FastAPI microservices — 
                with a focus on <span className='text-white font-medium'>clean architecture, TypeScript-first development, 
                and production readiness</span>.
              </p>
              <p>
                Currently at <span className='text-green-400 font-medium'>Aucourant Technologies</span>, I architect 
                production-grade AI monitoring systems — from video ingestion pipelines and distributed async
                workflows (Redis &amp; RabbitMQ) to RBAC systems, subscription billing, and performance-critical APIs
                — with a strong focus on <span className='text-white font-medium'>scalability, clean architecture, and performance</span>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3'>
              {stats.map((s, i) => (
                <div
                  key={i}
                  className='glass-card glass-card-hover flex flex-col items-center justify-center p-4 rounded-2xl border-blue-500/10 bg-blue-500/5 hover:bg-blue-500/10'
                >
                  <span className='text-3xl font-extrabold gradient-text'>
                    {s.value}
                  </span>
                  <span className='text-gray-500 text-xs mt-1 text-center leading-tight font-medium'>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Expertise Cards */}
          <div
            ref={rightRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-5 content-start ${rightVisible ? 'animate-fadeInRight' : 'opacity-0'}`}
          >
            {expertise.map((e, i) => (
              <div
                key={i}
                className={`glass-card glass-card-hover p-6 rounded-2xl border ${e.border} ${e.bg} ${e.glow} backdrop-blur-xl`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`text-3xl mb-4 ${e.color}`}>{e.icon}</div>
                <h4 className={`font-bold text-base mb-2 ${e.color} font-heading`}>{e.label}</h4>
                <p className='text-gray-400 text-sm leading-relaxed'>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Skills Section ── */}
        <div
          ref={skillsRef}
          className={`glass-card p-8 rounded-2xl border-blue-500/20 bg-blue-500/5 backdrop-blur-xl ${skillsVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <div className='flex flex-wrap items-center justify-between gap-5 mb-6'>
            <h3 className='font-bold font-heading text-xl sm:text-2xl gradient-text'>Technical Skills</h3>
            <a href='#contact'>
              <button className='btn-glow px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center gap-2 text-sm font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] focus-ring'>
                Contact Me <FaChevronRight className='text-xs' />
              </button>
            </a>
          </div>
          <div className='flex flex-wrap gap-3'>
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className={`skill-tag glass-card border ${skill.color} px-4 py-2 rounded-xl text-sm font-medium cursor-default backdrop-blur-sm`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About

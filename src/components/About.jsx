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
    glow:   'hover:shadow-purple-500/10',
  },
  {
    icon: <FaWifi />,
    label: 'Real-Time Systems',
    desc: 'WebSockets · Redis · RabbitMQ · Live Video Streaming (FFmpeg)',
    color:  'text-yellow-400',
    border: 'border-yellow-500/25',
    bg:     'bg-yellow-500/8',
    glow:   'hover:shadow-yellow-500/10',
  },
  {
    icon: <FaCubes />,
    label: 'SaaS Architecture',
    desc: 'RBAC · Multi-Tenant · Subscription Billing · Audit Logging',
    color:  'text-cyan-400',
    border: 'border-cyan-500/25',
    bg:     'bg-cyan-500/8',
    glow:   'hover:shadow-cyan-500/10',
  },
  {
    icon: <FaServer />,
    label: 'Backend APIs & Microservices',
    desc: 'Node.js · Python · FastAPI · REST · Distributed Pipelines',
    color:  'text-green-400',
    border: 'border-green-500/25',
    bg:     'bg-green-500/8',
    glow:   'hover:shadow-green-500/10',
  },
];

const stats = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '4+',   label: 'Projects Shipped'  },
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
    <div id='about' className='py-24 bg-gray-900 text-gray-300 relative overflow-hidden'>

      {/* Ambient glow */}
      <div className="absolute right-0 top-10 w-80 h-80 bg-purple-600/6 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-72 h-72 bg-blue-600/6 rounded-full filter blur-[100px] pointer-events-none" />

      <div className='max-w-7xl mx-auto px-4'>

        {/* ── Section heading ── */}
        <div
          ref={titleRef}
          className={`text-center mb-14 ${titleVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>About Me</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full' />
        </div>

        {/* ── Main two-column ── */}
        <div className='grid lg:grid-cols-2 gap-10 mb-10'>

          {/* LEFT — bio + stats */}
          <div
            ref={leftRef}
            className={`flex flex-col gap-6 ${leftVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}
          >
            {/* Tag */}
            <div className='inline-flex items-center gap-2 w-fit bg-blue-500/10 border border-blue-500/25 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase'>
              Backend Engineer · AI & Real-Time Systems
            </div>

            {/* Bio */}
            <div className='space-y-4 text-gray-300 text-[15px] leading-8'>
              <p>
                I'm <span className='text-white font-semibold'>Amit Pundir</span> — a Backend Engineer
                specializing in building <span className='text-blue-400 font-medium'>scalable real-time SaaS platforms
                and AI-powered systems</span> using Node.js, Python, FastAPI, React.js, MongoDB, Redis, and RabbitMQ.
              </p>
              <p>
                I've architected distributed backends supporting <span className='text-purple-400 font-medium'>live
                video streaming, AI-based event detection</span> (YOLO &amp; ArcFace face recognition), WebSocket
                communication, RBAC multi-tenant systems, and payment infrastructure with Razorpay.
              </p>
              <p>
                Currently at <span className='text-green-400 font-medium'>Aucourant Technologies</span>, I build
                AI-integrated real-time monitoring systems — from video ingestion pipelines to distributed async
                workflows with Redis &amp; RabbitMQ — with a strong focus on <span className='text-white font-medium'>
                scalability, clean architecture, and performance</span>.
              </p>
            </div>

            {/* Stats strip */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2'>
              {stats.map((s, i) => (
                <div
                  key={i}
                  className='flex flex-col items-center justify-center p-3 bg-gray-950/70 rounded-xl border border-gray-800/50 hover:border-blue-500/30 transition-all hover:-translate-y-0.5 duration-200'
                >
                  <span className='text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    {s.value}
                  </span>
                  <span className='text-gray-500 text-xs mt-0.5 text-center leading-tight'>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — expertise cards */}
          <div
            ref={rightRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 content-start ${rightVisible ? 'animate-fadeInRight' : 'opacity-0'}`}
          >
            {expertise.map((e, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border ${e.border} ${e.bg} hover:shadow-lg ${e.glow} hover:-translate-y-1 transition-all duration-300`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`text-2xl mb-3 ${e.color}`}>{e.icon}</div>
                <h4 className={`font-bold text-sm mb-1 ${e.color}`}>{e.label}</h4>
                <p className='text-gray-500 text-xs leading-relaxed'>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Skills + CTA ── */}
        <div
          ref={skillsRef}
          className={`p-7 bg-gray-950/70 rounded-2xl border border-gray-800/50 ${skillsVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <div className='flex flex-wrap items-center justify-between gap-4 mb-5'>
            <h3 className='font-bold text-lg text-blue-400'>Technical Skills</h3>
            <a href='#contact'>
              <button className='btn-glow px-5 py-2 rounded-lg bg-blue-500 text-white flex items-center gap-2 border border-blue-400/50 text-sm font-semibold hover:bg-blue-600 transition-colors'>
                Contact Me <FaChevronRight className='text-xs' />
              </button>
            </a>
          </div>
          <div className='flex flex-wrap gap-2'>
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className={`skill-tag bg-gray-900/80 border ${skill.color} px-3 py-1.5 rounded-lg text-sm font-medium cursor-default`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default About

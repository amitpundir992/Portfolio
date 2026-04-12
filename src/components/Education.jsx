import React from 'react'

const education = [
    {
      degree: "Masters In Computer Application (MCA)",
      institution: "Graphic Era Hill University",
      year: "2022 - 2024",
      description: "Post-Graduated with a strong foundation in critical thinking and problem-solving.",
      icon: "🎓",
    },
    {
      degree: "Bachelor In Computer Applications(BCA)",
      institution: "Graphic Era Hill University",
      year: "2018-2021",
      description: "Focused on advanced software development, system design, and scalable application architecture, strengthening problem-solving and analytical skills.",
      icon: "🎓",
    },
  ];

  const experience = [
    {
        
      role: "Software Developer",
      company: "Aucourant Technologies Private LTD",
      year: "Jul,2025 - present ",
      description: "Built scalable SaaS backend systems with RBAC, real-time camera streaming using WebSockets & FFmpeg, and secure REST APIs with subscription-based access. Focused on performance optimization and modular architecture.",
      icon: "💻",
    },
    {
      role: "Software Developer (Intern)",
      company: "Cynoteck",
      year: "Oct,2024 - Apr,2025",
      description: "Gained hands-on experience in full-stack development using MERN stack. Worked on building REST APIs, improving backend logic, and understanding scalable application architecture while collaborating in a professional development environment.",
      icon: "💼",
    }
  
  ];

const Education = () => {
  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
    <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Experience</h2>
        <div className='grid md:grid-cols-2 gap-12'>
            {/* Education section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
            {education.map((edu, index) => (
                <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transfrom hover:-translate-y-2 mb-6'>
                <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                <div>
                <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                <p className='text-gray-300'>{edu.institution}</p>
                <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                <p className='text-gray-300 mt-2'>{edu.description}</p>
                </div>

                </div>
            ))}
            </div>

            {/* Experience Section */}
             <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>
                {experience.map((exp, index) => (
                <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transfrom hover:-translate-y-2 mb-6'>
                <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                <div>
                <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                <p className='text-gray-300'>{exp.company}</p>
                <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                <p className='text-gray-300 mt-2'>{exp.description}</p>
                </div>
                </div>
            ))}
             </div>
        </div>
    </div>
       
    </section>
  )
}

export default Education

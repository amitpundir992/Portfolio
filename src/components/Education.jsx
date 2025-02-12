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
      description: "Graduated with a Degree",
      icon: "🎓",
    },
  ];

  const experience = [
    {
      role: "Software Developer (Intern)",
      company: "Cynoteck",
      year: "Oct,2024 - Present",
      description: "Learning New Things",
      icon: "💼",
    },
    {
      role: "MERN Stack Developer (Intership)",
      company: "Brillica Service",
      year: "NOV,2023 - Apr,2024 ",
      description: "Developed and optimized MERN stack applications, enhancing user experience.",
      icon: "💻",
    },
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

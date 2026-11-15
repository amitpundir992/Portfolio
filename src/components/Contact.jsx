import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaReddit, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import useInView from '../hooks/useInView';

const SERVICE_ID  = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_PUBLIC_KEY;

const socials = [
  { icon: <FaGithub />,   href: "https://github.com/amitpundir992",                  label: "GitHub"   },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/amitpundir01/",          label: "LinkedIn" },
  { icon: <FaReddit />,   href: "https://www.reddit.com/u/Amitpundir/s/u3nE7ElmNy",  label: "Reddit"   },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors,   setErrors]   = useState({});
  const [success,  setSuccess]  = useState(false);
  const [loading,  setLoading]  = useState(false);

  const [titleRef, titleVisible] = useInView();
  const [leftRef,  leftVisible]  = useInView();
  const [formRef,  formVisible]  = useInView();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim())    newErrors.name    = "Name is required";
    if (!formData.email.trim())   newErrors.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        name:    formData.name,
        email:   formData.email,
        message: formData.message,
        title:   "Contact Form",
        time:    new Date().toLocaleString(),
      }, PUBLIC_KEY)
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(() => alert("Something went wrong. Try again!"))
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="section-padding bg-[#0a0a0f] relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full filter blur-[100px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full filter blur-[100px] pointer-events-none animate-glow-pulse" style={{ animationDelay: '1s' }} />

      <div className="container-custom">

        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left panel */}
          <div ref={leftRef} className={`space-y-8 ${leftVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight mb-4">
                Let's Work{" "}
                <span className="gradient-text">
                  Together 🚀
                </span>
              </h1>
              <p className="text-gray-400 text-base leading-relaxed">
                I'm always open to discussing new opportunities, freelance projects, or building scalable SaaS
                products. If you have an idea or project in mind, feel free to reach out — let's build something
                amazing together.
              </p>
            </div>

            {/* Email Card */}
            <div className="glass-card glass-card-hover flex items-center gap-4 p-5 rounded-2xl border-blue-500/20 bg-blue-500/5 backdrop-blur-xl group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 text-xl group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all flex-shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Email me at</p>
                <a
                  href="mailto:pundiramit06@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm sm:text-base focus-ring rounded"
                >
                  pundiramit06@gmail.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-semibold font-heading text-white mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    aria-label={s.label}
                    className="glass-card w-12 h-12 rounded-xl flex items-center justify-center text-xl text-gray-400 border-gray-700/50 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:scale-110 transition-all duration-300 focus-ring"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className={`${formVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <div className="glass-card rounded-2xl border-blue-500/20 bg-blue-500/5 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] p-8">
              <h3 className="text-2xl font-bold font-heading text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`form-input w-full px-4 py-3 glass-card text-gray-200 border rounded-xl placeholder-gray-600 focus-ring ${
                      errors.name ? 'border-red-500/60' : 'border-blue-500/20'
                    }`}
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`form-input w-full px-4 py-3 glass-card text-gray-200 border rounded-xl placeholder-gray-600 focus-ring ${
                      errors.email ? 'border-red-500/60' : 'border-blue-500/20'
                    }`}
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className={`form-input w-full px-4 py-3 glass-card text-gray-200 border rounded-xl placeholder-gray-600 resize-none focus-ring ${
                      errors.message ? 'border-red-500/60' : 'border-blue-500/20'
                    }`}
                  />
                  {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glow w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3.5 rounded-xl hover:from-blue-600 hover:to-cyan-600 font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.3)] focus-ring"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Success toast */}
        {success && (
          <div className="fixed bottom-8 right-8 glass-card border-green-500/50 bg-green-500/20 text-white px-6 py-4 rounded-2xl shadow-[0_8px_30px_rgba(34,197,94,0.3)] animate-fadeInUp flex items-center gap-3 z-50 backdrop-blur-xl">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Message sent successfully!</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

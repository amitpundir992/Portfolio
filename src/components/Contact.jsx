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
    <section id="contact" className="bg-gray-950 py-20 px-6 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/6 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/6 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-14 ${titleVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left panel */}
          <div ref={leftRef} className={`space-y-8 ${leftVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Let's Work{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Together 🚀
                </span>
              </h1>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new opportunities, freelance projects, or building scalable SaaS
                products. If you have an idea or project in mind, feel free to reach out — let's build something
                amazing together.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-gray-900/60 rounded-xl border border-gray-800/50 hover:border-blue-500/30 transition-all group">
              <div className="w-10 h-10 bg-blue-500/15 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-500/25 transition-colors flex-shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">Email me at</p>
                <a
                  href="mailto:pundiramit06@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm"
                >
                  pundiramit06@gmail.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-11 h-11 bg-gray-900 border border-gray-700/60 rounded-xl flex items-center justify-center text-xl text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 hover:scale-110 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className={`${formVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <div className="bg-gray-900/80 rounded-2xl border border-gray-800/60 shadow-[0px_0px_40px_rgba(0,0,0,0.4)] p-7 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`form-input w-full px-4 py-3 bg-gray-950 text-gray-200 border rounded-xl placeholder-gray-600 ${
                      errors.name ? 'border-red-500/60' : 'border-gray-700/60'
                    }`}
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`form-input w-full px-4 py-3 bg-gray-950 text-gray-200 border rounded-xl placeholder-gray-600 ${
                      errors.email ? 'border-red-500/60' : 'border-gray-700/60'
                    }`}
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className={`form-input w-full px-4 py-3 bg-gray-950 text-gray-200 border rounded-xl placeholder-gray-600 resize-none ${
                      errors.message ? 'border-red-500/60' : 'border-gray-700/60'
                    }`}
                  />
                  {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glow w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
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
          <div className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-xl shadow-xl animate-fadeInUp flex items-center gap-2 z-50">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Message sent successfully!
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

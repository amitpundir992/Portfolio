import React, { useState, useEffect } from "react";
import { LuDownload } from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Profile from "../assets/profile.jpg";

const TEXTS = ["Full-Stack Engineer", "MERN Stack Enthusiast", "Backend Engineer"];

const Hero = () => {
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const displayText = TEXTS[textIdx].slice(0, charIdx);

  useEffect(() => {
    const current = TEXTS[textIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(i => i + 1), 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(i => i - 1), 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx(i => (i + 1) % TEXTS.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx]);

  return (
    <section id="hero" className="min-h-screen hero-bg grid-pattern noise-texture text-white flex flex-col justify-center items-center relative overflow-hidden pb-10 pt-24 md:pt-28">

      {/* Animated aurora glow blobs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full filter blur-[120px] opacity-30 animate-blob pointer-events-none" />
      <div className="absolute bottom-10 right-[5%] w-[600px] h-[600px] bg-blue-600/15 rounded-full filter blur-[140px] opacity-25 animate-blob pointer-events-none" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-cyan-600/10 rounded-full filter blur-[100px] opacity-20 animate-blob pointer-events-none" style={{ animationDelay: "7s" }} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20 justify-between px-6 w-full relative z-10">

        {/* ── Text Content ── */}
        <div className="space-y-6 animate-fadeInLeft flex-1">

          {/* Available for work badge */}
          <div className="inline-flex items-center gap-2.5 glass-card px-4 py-2 rounded-full text-sm font-medium w-fit border-green-500/20 bg-green-500/5">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
            <span className="text-green-400">Available for Work</span>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] tracking-tight">
            Hi👋, I'm{" "}
            <span className="gradient-text gradient-text-animated inline-block">
              Amit Pundir
            </span>
          </h1>

          {/* Typewriter Effect */}
          <div className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 min-h-[2.5rem] flex items-center gap-1">
            <span className="text-balance">{displayText}</span>
            <span className="animate-blink text-cyan-400 font-thin text-2xl">|</span>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed text-balance">
            Full-stack engineer building production SaaS platforms and AI-powered systems. I ship scalable applications with TypeScript,
            React, Next.js, Node.js, and PostgreSQL—from real-time video processing to intelligent automation. Focused on performance, clean architecture, and solving complex
            problems with elegant code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <a
              href="/Amit_Pundir_Resume.pdf"
              download="Amit_Pundir_Resume.pdf"
              className="btn-glow group px-6 py-3.5 flex items-center gap-2.5 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 rounded-2xl text-white hover:from-blue-600 hover:to-cyan-600 font-semibold transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] focus-ring"
            >
              <LuDownload className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </a>

            <div className="flex gap-3 text-3xl">
              <a
                href="https://www.linkedin.com/in/amitpundir01/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 hover:scale-110 transition-all duration-300 focus-ring"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/amitpundir992"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 focus-ring"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* ── Profile Image with Glow Effect ── */}
        <div className="relative animate-fadeInRight flex-shrink-0 delay-200">
          {/* Animated gradient ring */}
          <div className="absolute inset-[-20px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 opacity-40 blur-2xl animate-spin-slow pointer-events-none" />
          
          {/* Spinning decorative rings */}
          <div className="absolute inset-[-18px] rounded-full border-2 border-blue-500/20 animate-spin-slow pointer-events-none" />
          <div className="absolute inset-[-10px] rounded-full border-2 border-dashed border-violet-400/20 animate-spin-reverse pointer-events-none" />

          {/* Main profile image */}
          <div className="relative">
            <img
              src={Profile}
              alt="Amit Pundir - Full-Stack Engineer"
              className="relative rounded-full border-4 border-blue-500/30 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] animate-float shadow-[0_0_80px_rgba(59,130,246,0.4)] hover:shadow-[0_0_100px_rgba(59,130,246,0.6)] transition-shadow duration-500"
              loading="eager"
            />
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/10 via-transparent to-violet-500/10 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center p-1">
          <div className="w-1.5 h-2 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

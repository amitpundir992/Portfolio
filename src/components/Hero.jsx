import React, { useState, useEffect } from "react";
import { LuDownload } from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Profile from "../assets/profile.jpg";

const TEXTS = ["Full-Stack Developer", "MERN Stack Enthusiast", "Backend Engineer"];

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
    <section className="min-h-screen hero-bg grid-pattern text-white flex flex-col justify-center items-center relative overflow-hidden pb-10 pt-20">

      {/* Ambient blobs */}
      <div className="absolute top-24 left-[5%] w-72 h-72 bg-blue-600 rounded-full filter blur-[120px] opacity-20 animate-blob pointer-events-none" />
      <div className="absolute bottom-16 right-[8%] w-96 h-96 bg-purple-700 rounded-full filter blur-[130px] opacity-10 animate-blob pointer-events-none" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-600 rounded-full filter blur-[100px] opacity-10 animate-blob pointer-events-none" style={{ animationDelay: "6s" }} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 justify-between px-4 w-full">

        {/* ── Text block ── */}
        <div className="space-y-5 animate-fadeInLeft">

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full text-sm font-medium w-fit">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for Work
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi👋, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Amit Pundir
            </span>
          </h1>

          {/* Typewriter */}
          <div className="md:text-2xl text-lg font-medium text-gray-300 min-h-[2rem] flex items-center gap-0.5">
            <span>{displayText}</span>
            <span className="animate-blink text-blue-400 font-thin">|</span>
          </div>

          <p className="lg:w-[560px] text-sm text-gray-400 leading-relaxed">
            I am a passionate and dedicated full-stack developer with a strong
            focus on the MERN (MongoDB, Express.js, React, Node.js) stack.
            Constantly learning and adapting to new technologies, I am committed
            to staying ahead in the ever-evolving tech landscape.
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <a
              href="/Amit_Pundir_Resume.pdf"
              download="Amit_Pundir_Resume.pdf"
              className="btn-glow px-6 py-3 flex items-center gap-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 border border-blue-400/50 font-medium transition-colors"
            >
              <LuDownload className="w-5 h-5" />
              Download CV
            </a>

            <div className="flex gap-4 text-3xl">
              <a
                href="https://www.linkedin.com/in/amitpundir01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 hover:scale-125 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/amitpundir992"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* ── Profile image ── */}
        <div className="relative animate-fadeInRight flex-shrink-0" style={{ animationDelay: "0.2s" }}>
          {/* Spinning rings */}
          <div className="absolute inset-[-18px] rounded-full border border-blue-500/20 animate-spin-slow pointer-events-none" />
          <div className="absolute inset-[-9px] rounded-full border-2 border-dashed border-blue-400/25 animate-spin-reverse pointer-events-none" />

          {/* Glow backdrop */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 filter blur-3xl scale-110 pointer-events-none" />

          <img
            src={Profile}
            alt="profile img"
            className="relative rounded-full border-2 border-blue-500 md:w-[380px] w-[270px] animate-float shadow-[0_0_60px_rgba(59,130,246,0.35)]"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Hero() {
  const socials = [
    { icon: <FiGithub size={18} />, href: "https://github.com/masindes", label: "GitHub" },
    { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/m-sylvester-9bb732251/", label: "LinkedIn" },
    { icon: <FiMail size={18} />, href: "mailto:watty.s@outlook.com", label: "Email" },
  ];

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-slate-950 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_-10%,rgba(99,102,241,0.18),transparent)]" />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.035] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-indigo-400 uppercase">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.06] mb-4"
            >
              Masinde
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
                Sylvester
              </span>
            </motion.h1>

            {/* Disciplines */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-slate-400 font-medium tracking-[0.18em] text-xs uppercase mb-7"
            >
              Creative Designer &nbsp;·&nbsp; Software Engineer &nbsp;·&nbsp; L&D Professional
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Bridging visual storytelling, full-stack engineering, and instructional
              design — delivering outcomes that are visually powerful, technically
              sound, and strategically aligned.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="#projects"
                className="px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 text-slate-300 border border-slate-700 font-semibold rounded-xl hover:border-indigo-500/60 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.56 }}
              className="flex justify-center lg:justify-start gap-2"
            >
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
            className="flex-shrink-0 mt-4 lg:mt-0"
          >
            <div className="relative">
              {/* Photo frame */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-indigo-950/60">
                <img
                  src="/resume/sylvester.jpeg"
                  alt="Masinde Sylvester"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative offset border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-indigo-500/20 -z-10" />
              {/* Corner accent block */}
              <div className="absolute -top-3 -left-3 w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 border border-indigo-500/20" />

              {/* Quote chip */}
              <div className="absolute -bottom-7 left-4 right-4 px-4 py-2.5 bg-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-800 shadow-xl">
                <p className="text-[11px] text-slate-400 italic text-center">
                  "Design is made visual." — Saul Bass
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-slate-600 hover:text-slate-400 transition-colors"
        >
          <span className="text-[10px] tracking-[0.18em] uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

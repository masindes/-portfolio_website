import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ResumeDownload from "./components/ResumeDownload";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-display font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              Masinde Sylvester
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Creative Designer · Software Engineer · L&D Professional
            </p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: <FiGithub size={16} />, href: "https://github.com/masindes", label: "GitHub" },
              { icon: <FiLinkedin size={16} />, href: "https://www.linkedin.com/in/m-sylvester-9bb732251/", label: "LinkedIn" },
              { icon: <FiMail size={16} />, href: "mailto:watty.s@outlook.com", label: "Email" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-slate-800 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-800/60 text-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Masinde Watii Sylvester. Built with React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <ResumeDownload />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

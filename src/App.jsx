import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun, FiDownload } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import ResumeDownload from "./components/ResumeDownload";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) return JSON.parse(savedMode);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Persist dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sticky download button component
  const DownloadButton = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a 
        href="/resume/YourName_Resume.pdf" 
        download="YourName_Resume.pdf"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
        title="Download Resume"
        aria-label="Download resume"
      >
        <FiDownload className="w-6 h-6" />
      </a>
    </motion.div>
  );

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <ResumeDownload />
          <Contact />
        </main>

        {/* Sticky download button */}
        <DownloadButton />
      </div>
    </div>
  );
}
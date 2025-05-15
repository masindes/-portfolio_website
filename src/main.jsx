import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Removed unused AnimatePresence
import { FiMoon, FiSun } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-dark transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}
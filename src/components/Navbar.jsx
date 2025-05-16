import { motion } from 'framer-motion';
import { FiMoon, FiSun, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialIcons = [
    { icon: <FiGithub size={18} />, href: 'https://github.com/masindesylvester' },
    { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/masindesylvester' },
    { icon: <FiMail size={18} />, href: 'mailto:watty.s@outlook.com' },
  ];

  return (
    <>
      <nav className="h-20 w-full px-4 sm:px-6 lg:px-8 flex items-center sticky top-0 z-50">
        {/* Full-width background card */}
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800"></div>
        
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center relative z-10">
          {/* Logo/Name Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-xs border border-gray-100 dark:border-gray-700"
          >
            <a 
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Masinde Sylvester
            </a>
          </motion.div>
          
          {/* Desktop Navigation - Card Style */}
          <div className="hidden md:flex items-center h-full space-x-2">
            <div className="flex h-full px-3 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-xs border border-gray-100 dark:border-gray-700">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="h-full px-4 flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-4/5 rounded-t-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Social and Theme Card */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-xs border border-gray-100 dark:border-gray-700"
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {social.icon}
                </motion.a>
              ))}

              <div className="h-5 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>

              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile menu button - Card Style */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2.5 rounded-lg bg-white dark:bg-gray-800 shadow-xs border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </motion.button>
        </div>

        {/* Mobile Menu - Card Style */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-4 top-24 z-40 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="flex justify-between items-center pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-3">
                  {socialIcons.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}
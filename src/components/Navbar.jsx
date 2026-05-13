import { motion } from 'framer-motion';
import { FiMoon, FiSun, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: <FiGithub size={16} />, href: 'https://github.com/masindes', label: 'GitHub' },
    { icon: <FiLinkedin size={16} />, href: 'https://www.linkedin.com/in/m-sylvester-9bb732251/', label: 'LinkedIn' },
    { icon: <FiMail size={16} />, href: 'mailto:watty.s@outlook.com', label: 'Email' },
  ];

  return (
    <>
      <nav className="h-16 w-full px-4 sm:px-6 lg:px-8 flex items-center sticky top-0 z-50">
        {/* Background */}
        <div className="absolute inset-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/60" />

        <div className="w-full max-w-7xl mx-auto flex justify-between items-center relative z-10">

          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="font-display font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600"
          >
            Masinde Sylvester
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.06 * i }}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all"
              >
                {item.name}
              </motion.a>
            ))}

            <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-2" />

            {/* Social icons */}
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all"
              >
                {s.icon}
              </a>
            ))}

            <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-1" />

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all"
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </div>

          {/* Mobile: dark mode + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="md:hidden fixed inset-x-4 top-20 z-40 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 px-4 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-700 flex gap-2">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}

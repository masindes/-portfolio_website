import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center min-h-[50vh] py-8">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent dark:from-blue-500/20" />
      
      {/* Main content */}
      <div className="w-full max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold dark:text-white">
            <span className="block">Hello, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Masinde Sylvester
            </span>
          </h1>
          
          <div className="inline-block px-4 py-1 rounded-md bg-white dark:bg-gray-800 shadow-xs border border-gray-100 dark:border-gray-700">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Fullstack Developer & UI Designer
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-md mx-auto">
            Creating digital experiences that blend beautiful interfaces with powerful functionality.
          </p>
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="pt-6"
          >
            <a href="#about" className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <ArrowDown className="w-3 h-3 mr-1" />
              EXPLORE MY WORK
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
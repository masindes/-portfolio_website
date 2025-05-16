import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center min-h-[60vh] py-12">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent dark:from-blue-500/30" />
      
      {/* Main content */}
      <div className="w-full max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold dark:text-white">
            <span className="block mb-2">Hello, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Masinde Sylvester
            </span>
          </h1>
          
          <div className="inline-block px-5 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-xs border border-gray-100 dark:border-gray-700">
            <span className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium">
              Fullstack Developer & UI Designer
            </span>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Creating digital experiences that blend beautiful interfaces with powerful functionality.
          </p>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="pt-8"
          >
            <a 
              href="#about" 
              className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 group"
            >
              <ArrowDown className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
              EXPLORE MY WORK
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
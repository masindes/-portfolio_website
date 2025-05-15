import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.1, 0.8, 0.3, 1],
        duration: 0.8
      }
    }
  };

  return (
    <section id="home" className="relative flex items-center min-h-[90vh] py-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/3 dark:to-purple-500/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-blue-500/5 dark:to-blue-500/10 opacity-40" />
      </div>
      
      {/* Main content container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="w-full max-w-3xl mx-auto px-6 lg:px-8 relative z-10 text-center"
      >
        {/* Headline */}
        <motion.h1 
          variants={item}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight dark:text-white"
        >
          <span className="block mb-3">Hello, I'm</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Masinde Sylvester
          </span>
        </motion.h1>
        
        {/* Title */}
        <motion.div 
          variants={item}
          className="mt-6 mb-8"
        >
          <div className="inline-block px-6 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-xs border border-gray-100 dark:border-gray-700">
            <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              Fullstack Developer & UI Designer
            </span>
          </div>
        </motion.div>
        
        {/* Description */}
        <motion.p 
          variants={item}
          className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
        >
          Creating digital experiences that blend beautiful interfaces with 
          powerful functionality to solve real problems.
        </motion.p>
        
        {/* Scroll indicator */}
        <motion.div 
          variants={item}
          className="mt-20 text-center"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
        >
          <a 
            href="#about" 
            className="inline-flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-3 font-medium tracking-wider group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              EXPLORE MY WORK
            </span>
            <div className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-xs border border-gray-200 dark:border-gray-700 group-hover:border-blue-400 dark:group-hover:border-blue-400 transition-colors">
              <ArrowDown className="w-5 h-5" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
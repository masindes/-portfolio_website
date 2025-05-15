import { motion } from 'framer-motion';
import { ArrowDown, Palette, Code } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative py-28 md:py-36 lg:py-44 flex items-center min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      
      {/* Main content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="container mx-auto px-6 text-center relative z-10"
      >
        {/* Welcome badge */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
            <Palette className="w-4 h-4 mr-2" />
            <Code className="w-4 h-4 mr-2" />
            Creating digital experiences since 2020
          </span>
        </motion.div>
        
        {/* Name headline */}
        <motion.h1 
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 dark:text-white"
        >
          <span className="block">Hello, I'm</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Masinde Sylvester
          </span>
        </motion.h1>
        
        {/* Title with icons */}
        <motion.h2 
          variants={item}
          className="text-2xl md:text-3xl mb-8 dark:text-gray-300 font-medium flex flex-wrap justify-center items-center gap-3"
        >
          <span className="inline-flex items-center">
            <Code className="w-6 h-6 mr-2" />
            Fullstack Developer
          </span>
          <span className="hidden md:inline-block">•</span>
          <span className="inline-flex items-center">
            <Palette className="w-6 h-6 mr-2" />
            Graphic Designer
          </span>
        </motion.h2>
        
        {/* Description */}
        <motion.p 
          variants={item}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed"
        >
          Bridging the gap between beautiful design and robust functionality. 
          I craft pixel-perfect interfaces while building scalable backends 
          to deliver complete digital solutions.
        </motion.p>
        
        {/* Action buttons */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
          <button className="btn-primary px-8 py-4 text-lg flex items-center">
            <Code className="w-5 h-5 mr-2" />
            View Projects
          </button>
          <button className="btn-secondary px-8 py-4 text-lg flex items-center">
            <Palette className="w-5 h-5 mr-2" />
            Design Portfolio
          </button>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          variants={item}
          className="mt-24 flex justify-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <a href="#about" className="p-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowDown className="w-6 h-6" />
            <span className="sr-only">Scroll down</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
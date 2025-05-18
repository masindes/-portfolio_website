import { motion } from "framer-motion";
import { ArrowDown, MousePointerClick } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/resume/sylvester.jpeg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/10 to-black/90" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 sm:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm font-medium tracking-widest text-blue-400 uppercase"
          >
            Welcome to my portfolio
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">I'm Masinde Sylvester</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Digital Craftsman
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl text-lg text-gray-300 mb-10"
          >
            Building exceptional digital experiences through code and design. 
            Specializing in full-stack development with a focus on performance 
            and user-centered interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#projects"
              className="relative px-8 py-3.5 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex items-center gap-2">
                <MousePointerClick className="w-4 h-4" />
                View Projects
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 font-medium text-white border border-gray-600 rounded-lg hover:bg-white/5 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8"
          >
            <a href="#about" className="flex flex-col items-center group">
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="mb-1 text-sm text-gray-400 group-hover:text-white transition-colors"
              >
                Scroll down
              </motion.div>
              <ArrowDown className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
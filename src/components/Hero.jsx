import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import backgroundImage from '../assets/hero-bg.jpg'; // Update this path

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative flex items-center min-h-[70vh] md:min-h-[80vh] py-12 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 -z-10"></div>
      
      {/* Content */}
      <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            <span className="block mb-3">Hello, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Masinde Sylvester
            </span>
          </h1>
          
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-6 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className="text-lg text-white font-medium">
              Fullstack Developer & UI Designer
            </span>
          </motion.div>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Creating digital experiences that blend beautiful interfaces with powerful functionality.
          </p>
          
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="pt-12"
          >
            <a 
              href="#about" 
              className="inline-flex flex-col items-center text-white/80 hover:text-white transition-colors group"
              aria-label="Scroll down"
            >
              <span className="text-sm mb-3 font-medium tracking-wider">EXPLORE MY WORK</span>
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-blue-400 transition-colors">
                <ArrowDown className="w-5 h-5" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
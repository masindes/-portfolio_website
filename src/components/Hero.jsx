import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

// For Next.js (place image in public folder)
const backgroundImage = "/resume/sylvester.jpeg";

// For Create React App (use this instead):
// import backgroundImage from "../assets/sylvester.jpeg";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen py-16 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Content Container */}
      <div className="w-full max-w-5xl px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
            <span className="block mb-4">Hello, I'm</span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Masinde Sylvester
            </motion.span>
          </h1>

          {/* Title Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="inline-block px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
          >
            <span className="text-lg md:text-xl text-white font-medium tracking-wide">
              Fullstack Developer & UI Designer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mt-6"
          >
            I create digital experiences that blend beautiful interfaces with powerful functionality,
            solving real-world problems through code and design.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-16"
          >
            <a 
              href="#about" 
              className="inline-flex flex-col items-center text-white/80 hover:text-white transition-colors group"
              aria-label="Scroll down"
            >
              <motion.span
                animate={{ y: [0, 10, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5,
                  ease: "easeInOut"
                }}
                className="text-sm font-medium tracking-wider mb-4"
              >
                EXPLORE MY WORK
              </motion.span>
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-blue-400 transition-colors">
                <ArrowDown className="w-6 h-6" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent -z-10"></div>
    </section>
  );
}
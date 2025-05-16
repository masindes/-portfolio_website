import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const backgroundImage = "/resume/sylvester.jpeg"; // Update path as needed

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full h-[40vh] min-h-[300px] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Content Container */}
      <div className="container mx-auto h-full px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between w-full"
        >
          {/* Text Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              <span className="block">Hello, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Masinde Sylvester
              </span>
            </h1>
            <div className="inline-block px-4 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 mt-3">
              <span className="text-sm md:text-base text-white font-medium">
                Fullstack Developer & UI Designer
              </span>
            </div>
          </div>

          {/* CTA/Scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 md:mt-0"
          >
            <a 
              href="#about" 
              className="inline-flex items-center text-white/90 hover:text-white transition-colors group"
              aria-label="Scroll down"
            >
              <span className="text-sm font-medium mr-2">View Work</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-blue-400"
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent"></div>
    </section>
  );
}
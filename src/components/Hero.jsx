import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 dark:text-white">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 dark:text-gray-300">
          Frontend Developer | UI Designer
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10">
          I build exceptional digital experiences with modern technologies.
        </p>
        <button className="btn-primary">
          View My Work
        </button>
      </motion.div>
    </section>
  )
}
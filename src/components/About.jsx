import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

export default function About() {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="max-w-6xl mx-auto"
      >
        {/* Title */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="section-title">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Detail-oriented full-stack developer and graphic designer creating user-focused digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-bold dark:text-white mb-6">Professional Profile</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Dynamic software developer with strong foundations in full-stack web development and graphic design. 
                Proficient in both front-end and back-end technologies including HTML, CSS, JavaScript, React, Python, 
                Flask, and SQLite.
              </p>
              <p>
                Experienced in creating user-focused solutions and delivering high-quality designs for web and digital media. 
                Passionate about combining technical expertise with creative design to build innovative projects.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center text-blue-600 dark:text-blue-400">
                  <FiAward className="w-5 h-5 mr-2" />
                  <span>4+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold dark:text-white mb-6">Work Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="font-bold dark:text-white">Graphic Designer</h4>
                  <p className="text-gray-500 dark:text-gray-400">Practical Social Limited | July 2023 – August 2024</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Created designs for print and digital media including brochures, stores, and product packaging. 
                    Improved team productivity by 10% through efficient design workflows.
                  </p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="font-bold dark:text-white">Graphic Designer</h4>
                  <p className="text-gray-500 dark:text-gray-400">PointSight Limited | June 2021 – July 2023</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Designed marketing materials including business cards, posters, and headers. 
                    Increased customer satisfaction by 20% through quality designs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
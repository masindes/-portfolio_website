import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiUser } from 'react-icons/fi';

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
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 dark:text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Detail-oriented full-stack developer and graphic designer creating user-focused digital experiences
          </p>
        </motion.div>

        {/* Content - Horizontal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Card */}
          <motion.div 
            variants={item} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 h-full flex flex-col"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                <FiUser className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white">Professional Profile</h3>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 flex-grow">
              <p className="text-lg">
                Dynamic software developer with strong foundations in full-stack web development and graphic design. 
                Proficient in both front-end and back-end technologies including HTML, CSS, JavaScript, React, Python, 
                Flask, and SQLite.
              </p>
              <p className="text-lg">
                Experienced in creating user-focused solutions and delivering high-quality designs for web and digital media. 
                Passionate about combining technical expertise with creative design to build innovative projects.
              </p>
              <div className="flex items-center space-x-4 pt-4 mt-auto">
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-lg">
                  <FiAward className="w-5 h-5 mr-2" />
                  <span>4+ Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div 
            variants={item} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 h-full"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mr-4">
                <FiBriefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white">Work Experience</h3>
            </div>
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-blue-500">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1"></div>
                <div className="mb-2">
                  <h4 className="text-xl font-bold dark:text-white">Graphic Designer</h4>
                  <p className="text-gray-500 dark:text-gray-400">Practical Social Limited | July 2023 – August 2024</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Created designs for print and digital media including brochures, stores, and product packaging. 
                  Improved team productivity by 10% through efficient design workflows.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-purple-500">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-1"></div>
                <div className="mb-2">
                  <h4 className="text-xl font-bold dark:text-white">Graphic Designer</h4>
                  <p className="text-gray-500 dark:text-gray-400">PointSight Limited | June 2021 – July 2023</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Designed marketing materials including business cards, posters, and headers. 
                  Increased customer satisfaction by 20% through quality designs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
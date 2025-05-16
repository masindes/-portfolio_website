import { motion } from 'framer-motion';
import { FiCode, FiPenTool, FiLayers, FiDatabase, FiCpu } from 'react-icons/fi';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Design",
      icon: <FiPenTool className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: <FiDatabase className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Node.js", "Python", "Flask", "SQLite", "REST APIs"]
    },
    {
      title: "UI/UX Design",
      icon: <FiLayers className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"]
    },
    {
      title: "Graphic Design",
      icon: <FiCpu className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: ["Adobe Photoshop", "Illustrator", "Brand Identity", "Print Design", "Marketing Materials"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 dark:text-white"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      <span className="text-sm font-medium dark:text-gray-200">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Design Skills Visualization */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Design Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                With 4+ years of graphic design experience, I combine technical development skills with strong visual design principles.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium dark:text-white">UI/UX Design</span>
                    <span className="text-gray-500 dark:text-gray-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full" 
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium dark:text-white">Brand Identity</span>
                    <span className="text-gray-500 dark:text-gray-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full" 
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium dark:text-white">Print Design</span>
                    <span className="text-gray-500 dark:text-gray-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2.5 rounded-full" 
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex items-center">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mr-4">
                  <FiPenTool className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">200+</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Design Projects</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex items-center">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                  <FiLayers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">50+</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Brand Identities</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex items-center">
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-4">
                  <FiCpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">100%</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Client Satisfaction</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex items-center">
                <div className="p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 mr-4">
                  <FiCode className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">4+ Years</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Design Experience</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Moringa School Portal",
    description: "Student management system with attendance tracking, course materials, and progress dashboards using React frontend and Flask backend.",
    tags: ["React", "Flask", "SQLite", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "React Jobs App",
    description: "Job search platform with authentication, filters, and application tracking built with React and Node.js backend.",
    tags: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Rental Management System",
    description: "Full-stack property management solution with tenant tracking and payment processing.",
    tags: ["React", "Python", "Flask", "SQLite"],
    link: "#"
  },
  {
    title: "Church Website",
    description: "Interactive church platform with event management and member portal using React and Flask.",
    tags: ["React", "Flask", "JavaScript", "HTML/CSS"],
    link: "#"
  },
  {
    title: "Task Management CLI",
    description: "Command-line productivity tool built with Python and SQLite for local task tracking.",
    tags: ["Python", "SQLite", "Click"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio showcasing projects with dark mode and animations.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 dark:text-white"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-3 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tag === 'React' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                      tag === 'Node.js' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      tag === 'Python' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      tag === 'Flask' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline mt-auto"
              >
                View Project <FiExternalLink className="ml-1.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Moringa School Portal",
    description: "A comprehensive student management system with attendance tracking, course materials distribution, and progress analytics dashboard. Built with React frontend and Flask backend.",
    tags: ["React", "Flask", "SQLite", "Tailwind CSS", "Python"],
    link: "#"
  },
  {
    title: "React Jobs App",
    description: "Job search platform with user authentication, advanced filtering, and application tracking system. Features a responsive React frontend with Node.js API backend.",
    tags: ["React", "Node.js", "JavaScript", "Tailwind CSS", "HTML5"],
    link: "#"
  },
  {
    title: "Rental Management System",
    description: "Full-stack property management solution with tenant records, lease tracking, payment processing, and maintenance request system.",
    tags: ["React", "Python", "Flask", "SQLite", "CSS3"],
    link: "#"
  },
  {
    title: "Church Website",
    description: "Interactive church platform with event calendar, sermon archive, online donations, and member portal. React frontend with Flask API services.",
    tags: ["React", "Flask", "JavaScript", "HTML5", "CSS3"],
    link: "#"
  },
  {
    title: "Task Management CLI",
    description: "Command-line productivity application for local task organization with priority levels, deadlines, and project categorization.",
    tags: ["Python", "SQLite", "Click", "Typer"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Modern responsive portfolio with dark mode, project showcase, and smooth animations. Built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Framer Motion", "HTML5"],
    link: "#"
  }
];

// Color mapping for technologies
const tagColors = {
  'React': { bg: 'bg-blue-100', text: 'text-blue-800', darkBg: 'dark:bg-blue-900/30', darkText: 'dark:text-blue-400' },
  'Node.js': { bg: 'bg-green-100', text: 'text-green-800', darkBg: 'dark:bg-green-900/30', darkText: 'dark:text-green-400' },
  'JavaScript': { bg: 'bg-yellow-100', text: 'text-yellow-800', darkBg: 'dark:bg-yellow-900/30', darkText: 'dark:text-yellow-400' },
  'Python': { bg: 'bg-purple-100', text: 'text-purple-800', darkBg: 'dark:bg-purple-900/30', darkText: 'dark:text-purple-400' },
  'Flask': { bg: 'bg-red-100', text: 'text-red-800', darkBg: 'dark:bg-red-900/30', darkText: 'dark:text-red-400' },
  'SQLite': { bg: 'bg-cyan-100', text: 'text-cyan-800', darkBg: 'dark:bg-cyan-900/30', darkText: 'dark:text-cyan-400' },
  'Tailwind CSS': { bg: 'bg-emerald-100', text: 'text-emerald-800', darkBg: 'dark:bg-emerald-900/30', darkText: 'dark:text-emerald-400' },
  'HTML5': { bg: 'bg-orange-100', text: 'text-orange-800', darkBg: 'dark:bg-orange-900/30', darkText: 'dark:text-orange-400' },
  'CSS3': { bg: 'bg-indigo-100', text: 'text-indigo-800', darkBg: 'dark:bg-indigo-900/30', darkText: 'dark:text-indigo-400' },
  'Framer Motion': { bg: 'bg-pink-100', text: 'text-pink-800', darkBg: 'dark:bg-pink-900/30', darkText: 'dark:text-pink-400' },
  'Click': { bg: 'bg-gray-100', text: 'text-gray-800', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-gray-300' },
  'Typer': { bg: 'bg-gray-100', text: 'text-gray-800', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-gray-300' }
};

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow text-lg leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, i) => {
                  const color = tagColors[tag] || { 
                    bg: 'bg-gray-100', 
                    text: 'text-gray-800', 
                    darkBg: 'dark:bg-gray-700', 
                    darkText: 'dark:text-gray-300' 
                  };
                  return (
                    <span 
                      key={i} 
                      className={`px-4 py-1.5 rounded-full text-sm font-medium ${color.bg} ${color.text} ${color.darkBg} ${color.darkText}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline mt-auto text-lg group"
              >
                View Project 
                <FiExternalLink className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
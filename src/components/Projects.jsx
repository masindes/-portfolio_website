import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Moringa School Portal",
    description: "Comprehensive student management system with attendance tracking, course materials distribution, and progress analytics dashboard. Built with React frontend and Flask backend with SQLite database.",
    tags: ["React", "Javascript", "Flask", "SQLite", "Tailwind CSS", "Python"],
    link: "https://moringa-school-portal-frontend.vercel.app/"
  },
  {
    title: "React Jobs App",
    description: "Job search platform with user authentication, advanced filtering, and application tracking system. Features a responsive React frontend with Node.js API backend and JWT authentication.",
    tags: ["React", "Node.js", "JavaScript", "Tailwind CSS", "HTML5"],
    link: "https://react-jobs-fkmm.vercel.app/"
  },
  {
    title: "Rental Management System",
    description: "Full-stack property management solution with tenant records, lease tracking, payment processing, and maintenance request system using Python Flask backend and React admin dashboard.",
    tags: ["React", "Python", "Flask", "SQLite", "CSS3"],
    link: "https://user-snowy.vercel.app/"
  },
  {
    title: "Church Website",
    description: "Interactive church platform with event calendar, sermon archive, online donations, and member portal. React frontend with Flask API services and content management capabilities.",
    tags: ["React", "Flask", "JavaScript", "HTML5", "CSS3"],
    link: "https://website-rouge-beta-92.vercel.app/"
  },
  {
    title: "Task Management CLI",
    description: "Command-line productivity application for local task organization with priority levels, deadlines, and project categorization. Built with Python and SQLite for data persistence.",
    tags: ["Python", "SQLite", "Click", "Typer"],
    link: "https://task-management-swart-ten.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "Modern responsive portfolio with dark mode, project showcase, and smooth animations. Built with React, Tailwind CSS, and Framer Motion for interactive elements.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Framer Motion", "HTML5"],
    link: "#"
  }
];

// Color mapping for technologies
const tagColors = {
  'React': 'from-blue-500 to-blue-600',
  'Node.js': 'from-green-500 to-green-600',
  'JavaScript': 'from-yellow-500 to-yellow-600',
  'Python': 'from-purple-500 to-purple-600',
  'Flask': 'from-red-500 to-red-600',
  'SQLite': 'from-cyan-500 to-cyan-600',
  'Tailwind CSS': 'from-emerald-500 to-emerald-600',
  'HTML5': 'from-orange-500 to-orange-600',
  'CSS3': 'from-indigo-500 to-indigo-600',
  'Framer Motion': 'from-pink-500 to-pink-600'
};

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 dark:text-white"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-full"
            >
              {/* Content area */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-start">
                  {/* Gradient side bar indicator - mobile/desktop alternative */}
                  <div className="hidden md:block w-1.5 h-full mr-4 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4 md:mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${tagColors[tag] || 'from-gray-500 to-gray-600'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline mt-auto text-sm md:text-base group"
                    >
                      View Project 
                      <FiExternalLink className="ml-1 md:ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
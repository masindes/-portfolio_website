import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Moringa School Portal",
    description: "Student management system for Moringa School with attendance tracking, course materials, and progress dashboards.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://moringa-portal.example.com"
  },
  {
    title: "React Jobs App",
    description: "Job search platform with filters, saved jobs, and application tracking built with React and Firebase.",
    tags: ["React", "Firebase", "Context API", "Material UI"],
    link: "https://react-jobs.example.com"
  },
  {
    title: "Rental Management System",
    description: "Full-stack solution for property managers to track tenants, payments, and maintenance requests.",
    tags: ["Next.js", "Python", "PostgreSQL", "Django"],
    link: "https://rental-system.example.com"
  },
  {
    title: "Church Website",
    description: "Modern church website with event calendars, sermon archives, and online donations.",
    tags: ["WordPress", "PHP", "MySQL", "Elementor"],
    link: "https://faith-community.example.com"
  },
  {
    title: "Task Management CLI",
    description: "Command-line productivity tool for managing tasks with deadlines and priorities.",
    tags: ["Python", "Click", "SQLite", "Typer"],
    link: "https://github.com/yourusername/task-cli"
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio showcasing projects with responsive design and dark mode.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "https://yourportfolio.example.com"
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
          className="section-title text-center mb-16"
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
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium"
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
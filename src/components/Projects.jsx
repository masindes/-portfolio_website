import { motion } from 'framer-motion'

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-featured online store with cart functionality",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="section-title">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.link} className="text-primary font-medium hover:underline">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
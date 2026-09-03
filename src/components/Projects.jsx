import { motion } from 'framer-motion';
import { FiExternalLink, FiStar } from 'react-icons/fi';

const featuredProject = {
  title: "PrideInn Pulse (Servio)",
  description:
    "Enterprise learning management platform built for PrideInn Hotels, Resorts & Camps. Delivers course authoring, role-based admin dashboards across properties, gamified learner progress, QR-verifiable digital certificates, compliance tracking, and audit logging — with an AI-assisted support chat.",
  tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
  link: "https://prideinnpulse.vercel.app",
};

const projects = [
  {
    title: "Beeman Honey",
    description: "Brand and e-commerce showcase for a Kenyan-highlands honey producer — product catalogue, brand storytelling, and a fully responsive, animation-rich shopping experience.",
    tags: ["React", "Vite", "React Router", "CSS3"],
    link: "https://my-beeman.vercel.app/",
  },
  {
    title: "Youth Explosion",
    description: "Community platform for a youth empowerment organisation, with event registration, online payments, an interactive 3D hero experience, and downloadable PDF certificates.",
    tags: ["React", "Three.js", "Framer Motion", "React Router"],
    link: "https://youth-explosion.vercel.app/",
  },
  {
    title: "Moringa School Portal",
    description: "Comprehensive student management system with attendance tracking, course materials distribution, and progress analytics dashboard.",
    tags: ["React", "Flask", "Python", "SQLite", "Tailwind CSS"],
    link: "https://moringa-school-portal-frontend.vercel.app/",
  },
  {
    title: "Rental Management System",
    description: "Full-stack property management solution with tenant records, lease tracking, payment processing, and maintenance requests.",
    tags: ["React", "Python", "Flask", "SQLite", "CSS3"],
    link: "https://user-snowy.vercel.app/",
  },
  {
    title: "Church Website",
    description: "Interactive church platform with event calendar, sermon archive, online donations, and member portal with content management.",
    tags: ["React", "Flask", "JavaScript", "HTML5"],
    link: "https://website-rouge-beta-92.vercel.app/",
  },
  {
    title: "React Jobs App",
    description: "Job search platform with user authentication, advanced filtering, and application tracking. Features a responsive React frontend with JWT authentication.",
    tags: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
    link: "https://react-jobs-fkmm.vercel.app/",
  },
  {
    title: "Task Management CLI",
    description: "Command-line productivity application for local task organisation with priority levels, deadlines, and project categorisation using SQLite.",
    tags: ["Python", "SQLite", "Click", "Typer"],
    link: "https://task-management-swart-ten.vercel.app/",
  },
];

const tagColor = {
  React: "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300",
  "Node.js": "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  JavaScript: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
  Python: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  Flask: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
  SQLite: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300",
  "Tailwind CSS": "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
  HTML5: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  CSS3: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
  "Framer Motion": "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
  Click: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400",
  Typer: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400",
  "Next.js": "bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200",
  TypeScript: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  Prisma: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
  PostgreSQL: "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300",
  Vite: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300",
  "React Router": "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300",
  "Three.js": "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
};

const Tag = ({ tag }) => (
  <span
    className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${tagColor[tag] || 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'}`}
  >
    {tag}
  </span>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label">Work</p>
          <h2 className="section-title">Projects</h2>
          <div className="section-rule" />
        </motion.div>

        {/* Featured project */}
        <motion.a
          href={featuredProject.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative block mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-900/40 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-950/40 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_0%,rgba(99,102,241,0.25),transparent)]" />
          <div className="relative p-8 sm:p-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-5">
              <FiStar size={12} />
              Featured Project
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              {featuredProject.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {featuredProject.tags.map((tag) => <Tag key={tag} tag={tag} />)}
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 group-hover:text-white transition-colors">
              Visit Live Site
              <FiExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </motion.a>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group bg-slate-50 dark:bg-gray-800 rounded-2xl border border-slate-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800/60 hover:shadow-lg dark:hover:shadow-slate-900/60 transition-all duration-300 flex flex-col"
            >
              {/* Top accent bar */}
              <div className="h-1 rounded-t-2xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, i) => <Tag key={i} tag={tag} />)}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors mt-auto"
                >
                  View Project
                  <FiExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

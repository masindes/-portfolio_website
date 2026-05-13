import { motion } from 'framer-motion';
import { FiPenTool, FiCode, FiBookOpen } from 'react-icons/fi';

const skillGroups = [
  {
    title: "Design & Creative",
    icon: <FiPenTool className="w-4 h-4" />,
    accent: "indigo",
    skills: [
      "Adobe Illustrator", "Photoshop", "InDesign",
      "CorelDRAW", "Acrobat", "Pre-press / DTP / CTP",
      "Brand Campaigns", "Typography & Layout",
      "Visual Communication", "Art Direction",
      "Photography", "Infographics",
    ],
  },
  {
    title: "Software Engineering",
    icon: <FiCode className="w-4 h-4" />,
    accent: "violet",
    skills: [
      "HTML5 / CSS3", "JavaScript", "React",
      "Python", "Flask", "SQLite",
      "TailwindCSS", "REST APIs", "Git",
      "Full-Stack Web Dev", "UI/UX Prototyping",
      "E-Learning Systems",
    ],
  },
  {
    title: "Learning & Development",
    icon: <FiBookOpen className="w-4 h-4" />,
    accent: "blue",
    skills: [
      "Instructional Design", "Content Development",
      "Digital Learning Production",
      "Script Writing (AV / e-Learning)",
      "Visual Training Materials",
      "LMS Administration",
      "Cross-functional Facilitation",
    ],
  },
];

const accent = {
  indigo: {
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    tag: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60",
    bar: "from-indigo-500 to-violet-500",
    border: "border-indigo-100 dark:border-indigo-900/40 hover:border-indigo-300 dark:hover:border-indigo-700",
  },
  violet: {
    iconBg: "bg-violet-100 dark:bg-violet-900/30",
    iconColor: "text-violet-600 dark:text-violet-400",
    tag: "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60",
    bar: "from-violet-500 to-purple-500",
    border: "border-violet-100 dark:border-violet-900/40 hover:border-violet-300 dark:hover:border-violet-700",
  },
  blue: {
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    tag: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60",
    bar: "from-blue-500 to-cyan-500",
    border: "border-blue-100 dark:border-blue-900/40 hover:border-blue-300 dark:hover:border-blue-700",
  },
};

const stats = [
  { value: "4+", label: "Years in Design" },
  { value: "200+", label: "Design Projects" },
  { value: "50+", label: "Brand Identities" },
  { value: "Full-Stack", label: "Engineering" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills &amp; Tools</h2>
          <div className="section-rule" />
        </motion.div>

        {/* Three skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => {
            const a = accent[group.accent];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white dark:bg-gray-900 rounded-2xl border ${a.border} p-6 hover:shadow-lg dark:hover:shadow-slate-900/60 transition-all duration-300`}
              >
                {/* Accent rule */}
                <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${a.bar} mb-6`} />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg ${a.iconBg}`}>
                    <span className={a.iconColor}>{group.icon}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{group.title}</h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.88 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: i * 0.03 }}
                      viewport={{ once: true }}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${a.tag}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 px-6 py-5 text-center">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1 font-display">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

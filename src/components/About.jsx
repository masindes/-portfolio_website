import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiUser, FiAward } from 'react-icons/fi';

const experiences = [
  {
    role: "Digital Learning & Creative Designer",
    company: "PrideInn Hotel, Resorts & Camps",
    dept: "L&D Department",
    period: "2025 – Present",
    current: true,
    points: [
      "Design and develop digital learning materials, e-learning content, and staff training resources.",
      "Build internal digital tools and learning systems using HTML, CSS, JavaScript, and Python.",
      "Apply UX principles to improve learner experience across digital training platforms.",
    ],
  },
  {
    role: "DTP / Creative Designer",
    company: "Polyflex Natal Limited",
    dept: "South Africa",
    period: "Jan 2023 – Dec 2024",
    current: false,
    points: [
      "Led ideation, conceptualisation, and visual communication across all brand and marketing media.",
      "Directed the creative team; wrote scripts for TV & Radio campaigns.",
      "Handled all pre-press: Stripping, Imposition, and CTP production.",
    ],
    clients: "Zain, Pacific Petroleum, Trinity Energy, Medi Blue Laboratories, Linku Pay, Raptor Security",
  },
  {
    role: "Creative Designer",
    company: "PrintKnight Advertising",
    dept: "Nairobi, Kenya",
    period: "Dec 2021 – Dec 2022",
    current: false,
    points: [
      "Conceptualised and led brand campaigns; managed studio traffic and design team.",
      "Layout design for annual reports, calendars, and corporate collateral.",
    ],
    clients: "Stanbic Bank, Business Daily, AquaFresh/GSK, Toyota Kenya, KICC, Liberty Insurance",
  },
  {
    role: "Graphic Designer",
    company: "Color Labels",
    dept: "Nairobi, Kenya",
    period: "Feb 2021 – Dec 2021",
    current: false,
    points: [
      "Lead designer on Sprite across East, Central & Southern Africa.",
      "One of the main designers on BAT pan-African campaigns.",
    ],
    clients: "BAT, Sprite, Coca-Cola, Brand Kenya, Airtel, KTB",
  },
];

const education = [
  {
    degree: "BSc. Computer Science",
    institution: "Open University of Kenya (OUK)",
    period: "Jan 2026 – Present",
    detail: "In progress",
  },
  {
    degree: "Software Engineering",
    institution: "Moringa School, Nairobi",
    period: "Jul 2024 – Apr 2025",
    detail: "Full-stack: Python, JavaScript, React, Flask, SQLite, REST APIs",
  },
  {
    degree: "BTEC Diploma in Graphic Design",
    institution: "Academy of Graphic Technologies Ltd.",
    period: "Jan 2019 – Dec 2022",
    detail: "Art & Design — Graphic Design Option",
  },
  {
    degree: "Certificate in Electronic Publishing",
    institution: "Academy of Graphic Technologies Ltd.",
    period: "Jan 2017 – Apr 2017",
    detail: "Art & Design — Graphic Design Applications",
  },
];

const awards = [
  {
    title: "Stanbic Bank Kenya",
    period: "2015 & 2016",
    detail: "Recognised for outstanding contribution to marketing & communications.",
  },
  {
    title: "Polyplex Natal — Reflag Initiative",
    period: "",
    detail: "Recognised for key role played in the organisational initiative.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-rule" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* ── Left column: Profile + Education ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Profile card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                  <FiUser className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Profile</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                A multidisciplinary creative and technology professional who bridges visual
                storytelling, software engineering, and learning & development. Expert in
                transforming complex ideas into compelling design and digital solutions across
                print, web, and training environments — bringing a rare combination of creative
                direction, full-stack engineering, and instructional design that delivers
                outcomes which are visually powerful, technically sound, and strategically
                aligned with organisational goals.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Creative Design", "Software Engineering", "L&D"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-violet-100 dark:bg-violet-900/30">
                  <FiBook className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className={i > 0 ? "pt-5 border-t border-slate-200 dark:border-gray-700" : ""}
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-white leading-snug">
                        {edu.degree}
                      </h4>
                      <span className="text-[11px] text-slate-400 whitespace-nowrap shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recognition card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                  <FiAward className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Recognition &amp; Awards</h3>
              </div>
              <div className="space-y-4">
                {awards.map((award, i) => (
                  <div
                    key={i}
                    className={i > 0 ? "pt-4 border-t border-slate-200 dark:border-gray-700" : ""}
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-white leading-snug">
                        {award.title}
                      </h4>
                      {award.period && (
                        <span className="text-[11px] text-slate-400 whitespace-nowrap shrink-0">
                          {award.period}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{award.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right column: Work Experience Timeline ── */}
          <div className="lg:col-span-3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <FiBriefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Work Experience</h3>
            </motion.div>

            <div className="relative space-y-4 pl-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-slate-200 dark:before:bg-gray-700">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' },
                    },
                  }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[1.55rem] top-[1.1rem] w-3 h-3 rounded-full border-2 transition-colors ${
                      exp.current
                        ? 'bg-indigo-600 border-indigo-600 shadow-[0_0_0_3px_rgba(99,102,241,0.2)]'
                        : 'bg-white dark:bg-gray-900 border-slate-300 dark:border-gray-600'
                    }`}
                  />

                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800/60 transition-colors">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug">
                          {exp.role}
                        </h4>
                        <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                          {exp.company}
                          <span className="text-slate-400 dark:text-slate-500 font-normal"> · {exp.dept}</span>
                        </p>
                      </div>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${
                          exp.current
                            ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300'
                            : 'bg-slate-100 dark:bg-gray-700 text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    {exp.clients && (
                      <p className="mt-3 pt-3 border-t border-slate-200 dark:border-gray-700 text-[11px] text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-slate-600 dark:text-slate-300">Key Clients:</span> {exp.clients}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

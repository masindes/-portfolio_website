import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

export default function ResumeDownload() {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-10 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/40 dark:to-violet-950/40 border border-indigo-100 dark:border-indigo-900/50"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-indigo-600 dark:text-indigo-400 uppercase mb-3">
            CV / Résumé
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Download My Resume
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            A complete overview of my skills, experience across design, software engineering,
            and learning & development.
          </p>
          <motion.a
            href="/resume/Dev_resume.pdf"
            download="Masinde_Sylvester_Resume.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
            aria-label="Download resume PDF"
          >
            <FiDownload size={18} />
            Download PDF
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

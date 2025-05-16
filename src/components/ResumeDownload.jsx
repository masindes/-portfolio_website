import { FiDownload } from 'react-icons/fi';

const ResumeDownload = () => {
  // Replace with your actual resume path
  const resumeUrl = "/resume/YourName_Resume.pdf"; 
  const fileName = "YourName_Resume.pdf"; // Customize filename
  
  return (
    <section 
      id="resume" 
      className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Download My Resume</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Get a complete overview of my skills, experience, and qualifications.
        </p>
        <a 
          href={resumeUrl} 
          download={fileName}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          aria-label="Download resume"
        >
          <FiDownload className="mr-2 text-xl" />
          Download PDF Resume
        </a>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
    </section>
  );
};

export default ResumeDownload;
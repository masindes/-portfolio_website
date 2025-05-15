import { FiMoon, FiSun, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
      
      <div className="flex items-center space-x-6">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        
        <a href="#projects" className="hidden sm:block hover:text-primary">Projects</a>
        <a href="#skills" className="hidden sm:block hover:text-primary">Skills</a>
        <a href="#contact" className="hidden sm:block hover:text-primary">Contact</a>
        
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank">
            <FiGithub size={20} className="hover:text-primary" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">
            <FiLinkedin size={20} className="hover:text-primary" />
          </a>
          <a href="mailto:youremail@example.com">
            <FiMail size={20} className="hover:text-primary" />
          </a>
        </div>
      </div>
    </nav>
  )
}
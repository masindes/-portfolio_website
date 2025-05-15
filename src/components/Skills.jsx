export default function Skills() {
    const skills = [
      "HTML/CSS", "JavaScript", "React", "Tailwind CSS", 
      "Node.js", "Git", "Figma", "Python"
    ]
  
    return (
      <section id="skills" className="py-20">
        <h2 className="section-title">My Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="font-medium dark:text-white">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    )
  }
export default function Contact() {
    return (
      <section id="contact" className="py-20">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-white">
                Your Name
              </label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                required 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">
                Your Email
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                required 
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white">
                Message
              </label>
              <textarea 
                id="message" 
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>
    )
  }
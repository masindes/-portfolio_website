import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.5
      }
    }
  };

  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Email",
      value: "watty.s@outlook.com",
      href: "mailto:watty.s@outlook.com"
    },
    {
      icon: <FiPhone className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Phone",
      value: "+254 712 258 858",
      href: "tel:+254712258858"
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Location",
      value: "Nairobi, Kenya"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/masindes"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/m-sylvester-9bb732251/"
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      href: "https://x.com/sylvesterwatty1"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          variants={item}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 dark:text-white"
        >
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Centered on mobile */}
          <motion.div 
            variants={item}
            className="space-y-8 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mx-auto md:mx-0 max-w-md">
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out through any of these channels.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-start items-center space-y-3 md:space-y-0 md:space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                    {method.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-medium text-gray-900 dark:text-white">{method.title}</h4>
                    {method.href ? (
                      <a 
                        href={method.href} 
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-4 text-center md:text-left">Follow Me</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Centered on mobile */}
          <motion.div 
            variants={item}
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mx-auto w-full max-w-md lg:max-w-none"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-gray-300">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-gray-300">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-gray-300">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-md transition-all"
              >
                <FiSend className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Mail, MapPin, Globe, Briefcase, Twitter, Github, Linkedin, Dribbble } from "lucide-react";

const Contact = () => {
  return (
    <section className="section inset-0 overflow-y-auto p-4 sm:p-8 md:p-12">
      <div className="max-w-5xl mx-auto pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-heading font-semibold mb-4">Send Me a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-heading font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 mt-1 mr-3">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <p className="font-medium break-words">pradiptoshivam85@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 mt-1 mr-3">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                    <p className="font-medium">Assam, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 mt-1 mr-3">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Active on</p>
                    <p className="font-medium break-words">X (@Pradipto02)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-heading font-semibold mb-4">Connect with Me</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <motion.a
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  href="https://twitter.com/Pradipto02"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-primary hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  href="https://github.com/ggps2002"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  href="https://www.linkedin.com/in/pradipto-shivam-ba19ba243/"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-primary hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                {/* <motion.a
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  href="https://dribbble.com/johndoe"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors duration-200"
                >
                  <Dribbble className="w-5 h-5" />
                </motion.a> */}
              </div>
            </div>
            
            <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">Available for Work</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">I'm currently available for freelance work and open to new opportunities.</p>
              <button 
                onClick={() => window.open("mailto:pradiptoshivam85@gmail.com", "_blank")}
                className="w-full bg-primary hover:bg-primary/90 dark:bg-[#1E3A8A] text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

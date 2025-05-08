import { motion } from "framer-motion";
import { MapPin, Mail, Globe, Check } from "lucide-react";

const About = () => {
  return (
    <section className="section inset-0 overflow-y-auto p-4 sm:p-8 md:p-12">
      <div className="max-w-5xl mx-auto pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden">
              <img 
                src="assets/whatsapp_pic.jpg" 
                alt="Profile picture" 
                className="w-full aspect-square object-cover" 
              />
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-1">Pradipto Shivam</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Full Stack Web Developer</p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-slate-500 dark:text-slate-400" />
                    <span className="text-sm">Assam, India</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-slate-500 dark:text-slate-400 flex-shrink-0" />
                    <span className="text-sm break-words">pradiptoshivam85@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-slate-500 dark:text-slate-400 flex-shrink-0" />
                    <span className="text-sm break-words">@Pradipto02 (active in X)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Who I Am</h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>I'm a passionate full stack web developer with a focus on creating beautiful, functional, and user-friendly websites and applications that solves real world problems.</p>
                <p>My approach combines technical expertise with an eye for design, allowing me to create solutions that not only work well but also look great. I believe that good design should be invisible, enhancing the user experience without getting in the way.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-heading font-semibold mb-4">My Philosophy</h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>I believe in creating web experiences that are:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span><strong className="font-medium">User-centered</strong> – Focusing on the needs and expectations of the end user</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span><strong className="font-medium">Accessible</strong> – Ensuring websites work for everyone, regardless of abilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span><strong className="font-medium">Performant</strong> – Building fast-loading, optimized experiences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span><strong className="font-medium">Beautiful</strong> – Crafting visually appealing interfaces that delight users</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-heading font-semibold mb-4">When I'm Not Coding</h3>
              <div className="text-slate-600 dark:text-slate-300">
                <p>Outside of work, I enjoy sharing my knowledge on Twitter, where I post about web development tips, design insights, and my latest projects. I also enjoy reading technical books and staying updated with the latest web technologies and trends.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

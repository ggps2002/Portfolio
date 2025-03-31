import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HomeProps {
  onSectionChange: (section: string) => void;
}

const Home = ({ onSectionChange }: HomeProps) => {
  return (
    <section className="section active inset-0 overflow-y-auto p-4 sm:p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col justify-center min-h-screen pt-16 md:pt-0 md:py-12">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 rounded-full text-sm font-medium">
                Web Developer
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 dark:text-white leading-tight">
                Building <span className="text-primary dark:text-blue-400">exceptional</span><br className="hidden sm:block" /> <span className="text-primary dark:text-blue-400">interactive</span> web experiences
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
                I design and develop websites that are not just beautiful, but also functional, scalable and user-friendly making sure it solves the problem in the most elegant way.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button 
                onClick={() => onSectionChange("projects")}
                className="dark:bg-[#0F172A] bg-white dark:hover:bg-[#0F172A]/90 dark:text-white text-black  px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md flex items-center "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
              <motion.button 
                onClick={() => onSectionChange("contact")}
                className="bg-gray-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-lg font-medium transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-12"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Featured Technologies</p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center px-3 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-5 h-5 mr-2" />
                  <span className="text-sm">React.js</span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center px-3 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-5 h-5 mr-2" />
                  <span className="text-sm">TypeScript</span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center px-3 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="w-5 h-5 mr-2" />
                  <span className="text-sm">Tailwind CSS</span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center px-3 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-5 h-5 mr-2 dark:invert" />
                  <span className="text-sm">Next.js</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

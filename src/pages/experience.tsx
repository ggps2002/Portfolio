import { motion } from "framer-motion";
import { experiences } from "../lib/constants";
import ExperienceTimeline from "../components/ExperienceTimeline";

const Experience = () => {
  return (
    <section className="section inset-0 overflow-y-auto p-4 sm:p-8 md:p-12">
      <div className="max-w-5xl mx-auto pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            My professional journey as a web developer and designer.
          </p>
        </motion.div>
        
        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  );
};

export default Experience;

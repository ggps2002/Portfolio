import { motion } from "framer-motion";
import { projects } from "../lib/constants";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="section inset-0 overflow-y-auto p-4 sm:p-8 md:p-12">
      <div className="max-w-5xl mx-auto pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            Here are some of the projects I've worked on. Each one has presented unique challenges and opportunities for growth.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

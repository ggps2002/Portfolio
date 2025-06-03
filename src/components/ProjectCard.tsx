import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Project } from "../lib/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md group"
    >
      <div className="relative">
        <div className="">
          <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        </div>
        <div className="absolute top-4 right-4">
          <span className={`inline-block px-3 py-1 ${
            project.category === 'Personal Project' 
              ? 'bg-blue-200/90 text-blue-600' 
              : project.category === 'Hackathon'
              ? 'bg-indigo-100/90 text-indigo-600'
              : 'bg-blue-200/90 text-blue-600'
          } text-xs font-medium rounded-full`}>
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          {project.demo && <a href={project.demo} className="text-primary hover:text-primary/80 text-sm font-medium flex items-center">
            View Project
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>}
          <div className="flex items-center space-x-2">
            {project.github && (
              <a 
                href={project.github} 
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
              {project.demo && <a 
              href={project.demo} 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
            </a>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

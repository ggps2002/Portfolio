import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Experience } from "../lib/types";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div>
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 sm:pl-32 py-6 group"
        >
          <div className="flex flex-col sm:flex-row items-start mb-1 group-first:before:top-0 relative before:absolute before:left-0 sm:before:left-24 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
            <div
              className={`absolute z-10 -left-3 sm:-left-[27px] border-4 border-white dark:border-slate-900 top-0 ${
                index === 0 ? "bg-primary" : "bg-slate-500 dark:bg-slate-400"
              } rounded-full w-6 h-6 flex items-center justify-center`}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div className="font-heading text-xl leading-none mb-4 sm:mb-0 sm:mr-8 ml-4 sm:w-16 sm:text-right text-slate-500 dark:text-slate-400">
              {experience.year}
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-tr-xl rounded-br-xl p-6 w-full shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-xl font-heading font-semibold">
                  {experience.role}
                </h3>
                {index === 0 && (
                  <span className="w-fit mt-2 sm:mt-0 bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {experience.company}
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {experience.description}
              </p>

              <div>
                <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achieveIndex) => (
                    <li key={achieveIndex} className="flex items-start">
                      <CheckCircle className=" text-green-500 mr-2 mt-1" />
                      <span className="text-slate-600 dark:text-slate-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;

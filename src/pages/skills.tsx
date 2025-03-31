import { motion } from "framer-motion";
import { skills } from "../lib/constants";
import SkillCard from "../components/SkillCard";
import { 
  Layout, 
  Server, 
  PenTool, 
  Wrench, 
  Users, 
  Cloud 
} from "lucide-react";

const Skills = () => {
  const getIconAndColor = (category: string) => {
    switch(category) {
      case 'Front-end Development':
        return { 
          icon: Layout, 
          colorClass: 'bg-blue-100 dark:bg-blue-900 text-primary' 
        };
      case 'Back-end Development':
        return { 
          icon: Server, 
          colorClass: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400' 
        };
      case 'Design':
        return { 
          icon: PenTool, 
          colorClass: 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400' 
        };
      case 'Tools & Workflow':
        return { 
          icon: Wrench, 
          colorClass: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' 
        };
      case 'Soft Skills':
        return { 
          icon: Users, 
          colorClass: 'bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400' 
        };
      case 'Cloud & Deployment':
        return { 
          icon: Cloud, 
          colorClass: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400' 
        };
      default:
        return { 
          icon: Layout, 
          colorClass: 'bg-blue-100 dark:bg-blue-900 text-primary' 
        };
    }
  };

  return (
    <section className="section inset-0 overflow-y-auto p-4 sm:p-8 md:p-12">
      <div className="max-w-5xl mx-auto pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            A collection of technologies and tools I've worked with.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const { icon, colorClass } = getIconAndColor(skill.category);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard 
                  skill={skill} 
                  icon={icon} 
                  colorClass={colorClass} 
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from "framer-motion";
import { Skill } from "../lib/types";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  skill: Skill;
  icon: LucideIcon;
  colorClass: string;
}

const SkillCard = ({ skill, icon: Icon, colorClass }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm"
    >
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center mr-3`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-heading font-semibold">{skill.category}</h3>
      </div>
      
      <div className="space-y-4">
        {skill.items.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{item.name}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{item.level}</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
              <div 
                className={`${item.colorClass} h-2 rounded-full`} 
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;

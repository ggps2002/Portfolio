import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, Dribbble } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/Pradipto02", color: "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" },
  { icon: Github, href: "https://github.com/ggps2002", color: "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pradipto-shivam-ba19ba243/", color: "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" },
  // { icon: Dribbble, href: "https://dribbble.com/johndoe", color: "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" }
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-3 mb-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        
        return (
          <motion.a
            key={index}
            href={link.href}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 ${link.color} transition-colors duration-200`}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;

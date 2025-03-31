import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "../lib/constants";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";
import {
  Home,
  User,
  Briefcase,
  Clock,
  Code,
  Mail,
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getIcon = (id: string) => {
    switch (id) {
      case "home":
        return <Home className="w-6 h-6" />;
      case "about":
        return <User className="w-6 h-6" />;
      case "projects":
        return <Briefcase className="w-6 h-6" />;
      case "experience":
        return <Clock className="w-6 h-6" />;
      case "skills":
        return <Code className="w-6 h-6" />;
      case "contact":
        return <Mail className="w-6 h-6" />;
      default:
        return <Home className="w-6 h-6" />;
    }
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <AnimatePresence>
        {windowWidth >= 768 && (
          <motion.aside
            className="md:w-72 w-full h-full bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col shadow-md fixed md:relative z-20 overflow-hidden"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary dark:bg-[#1E3A8A] flex items-center justify-center text-white font-bold">
                  PS
                </div>
                <div>
                  <h1 className="font-heading font-semibold text-xl">
                    Pradipto Shivam
                  </h1>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Web Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-4 overflow-y-auto">
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => onSectionChange(section.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors duration-200 group ${
                        activeSection === section.id
                          ? "bg-slate-100 dark:bg-slate-700 text-primary"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      {getIcon(section.id)}
                      <span className="ml-3">{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <SocialLinks />
              <ThemeToggle isMobile={false}/>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Horizontal Bar for Mobile */}
      {windowWidth < 768 && (
        <div className="fixed mt-1 mx-1 rounded-lg top-0 left-0 w-full backdrop-blur-md shadow-md z-30 flex justify-around items-center py-2 dark:border-slate-700">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`flex flex-col items-center text-sm gap-1 ${
                activeSection === section.id
                  ? "text-primary"
                  : "text-slate-500 dark:text-slate-400"
              } hover:text-primary transition-colors`}
            >
              {getIcon(section.id)}
              {activeSection === section.id && <div className="w-full h-[2px] bg-primary rounded-md"/>}
            </button>
          ))}
          <ThemeToggle isMobile={true}/>
        </div>
      )}
    </>
  );
};

export default Sidebar;

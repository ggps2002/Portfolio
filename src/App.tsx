import { useState, useEffect } from "react";
import { Toaster } from "./components/ui/toaster";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Skills from "./pages/skills";
import Testimonials from "./pages/testimonials";
import Contact from "./pages/contact";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    // Add smooth scroll behavior to all sections
    document.querySelectorAll(".section").forEach((section) => {
      section.addEventListener("scroll", (e) => e.stopPropagation());
    });
  }, []);

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-50 font-sans antialiased transition-colors duration-300">
        <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
        
        <main className="flex-1 h-screen transition-all duration-300 overflow-hidden relative md:ml-0">
          <AnimatePresence mode="wait">
            {activeSection === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 overflow-y-auto section"
              >
                <Home onSectionChange={handleSectionChange} />
              </motion.div>
            )}
            
            {activeSection === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 overflow-y-auto section"
              >
                <About />
              </motion.div>
            )}
            
            {activeSection === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 overflow-y-auto section"
              >
                <Projects />
              </motion.div>
            )}
            
            {activeSection === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 overflow-y-auto section"
              >
                <Experience />
              </motion.div>
            )}
            
            {activeSection === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 overflow-y-auto section"
              >
                <Skills />
              </motion.div>
            )}
            
            {activeSection === "testimonials" && (
              <motion.div
                key="testimonials"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 overflow-y-auto section"
              >
                <Testimonials />
              </motion.div>
            )}
            
            {activeSection === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 overflow-y-auto section"
              >
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
      <Toaster />
    </>
  );
}

export default App;

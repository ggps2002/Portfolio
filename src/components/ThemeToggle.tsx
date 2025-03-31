import {  useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';



// This is a simplified version that doesn't use context
interface ThemeToggleProps {
  isMobile: boolean;
}

const ThemeToggle = ({ isMobile }: ThemeToggleProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Check for saved theme preference or use OS preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newTheme;
    });
  };


  return (
    <>
      {isMobile ? (
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
        >
          {theme === 'light' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      ) : (
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-full px-3 py-2 mt-4 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-4 h-4 mr-2" />
              <span className="text-sm">Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 mr-2" />
              <span className="text-sm">Dark Mode</span>
            </>
          )}
        </button>
      )}
    </>
  );
};

export default ThemeToggle;

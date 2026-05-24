import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center ${className}`}>
      <button
        type="button"
        onClick={toggleTheme}
        className={`relative w-14 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none shadow-inner border select-none ${
          isDark
            ? 'bg-[#2d3135] border-gray-700/50'
            : 'bg-gray-200 border-gray-300/60'
        }`}
        aria-label="Toggle dark/light theme"
      >
        <motion.div
          className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${
            isDark ? 'bg-gray-700' : 'bg-white'
          }`}
          animate={{
            x: isDark ? 24 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 28,
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-center"
              >
                <Moon className="w-3.5 h-3.5 text-gray-300 fill-gray-300/10" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-center"
              >
                <Sun className="w-3.5 h-3.5 text-gray-700 fill-gray-700/10" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </button>
    </div>
  );
};

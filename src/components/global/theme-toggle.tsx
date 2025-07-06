import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      if (savedTheme) {
        return savedTheme;
      }
      // Check system preference if no saved theme
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        return 'dark';
      }
    }
    // Default to dark theme
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both classes first to avoid conflicts
    root.classList.remove('light', 'dark');

    // Add the current theme class
    root.classList.add(theme);

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            <div className="relative">
              {theme === 'light' ? (
                <Sun className="h-5 w-5 text-amber-500 transition-transform duration-200 rotate-0 scale-100" />
              ) : (
                <Moon className="h-5 w-5 text-blue-400 transition-transform duration-200 rotate-0 scale-100" />
              )}
            </div>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Switch to {theme === 'light' ? 'dark' : 'light'} mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;

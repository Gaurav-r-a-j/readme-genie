import { ReactNode, useEffect } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  useEffect(() => {
    const initializeDarkMode = () => {
      try {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;

        // Default to dark mode if no saved preference
        const isDarkMode =
          savedTheme === 'dark' || (!savedTheme && (systemPrefersDark || true)); // Default to dark

        document.documentElement.classList.toggle('dark', isDarkMode);

        // Save the default theme if none was saved
        if (!savedTheme) {
          localStorage.setItem('theme', 'dark');
        }
      } catch (error) {
        console.error('Error initializing dark mode:', error);
        // Fallback to dark mode on error
        document.documentElement.classList.add('dark');
      }
    };
    initializeDarkMode();
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;

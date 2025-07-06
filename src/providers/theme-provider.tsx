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
        const isDarkMode =
          savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
        document.documentElement.classList.toggle('dark', isDarkMode);
      } catch (error) {
        console.error('Error initializing dark mode:', error);
      }
    };
    initializeDarkMode();
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;

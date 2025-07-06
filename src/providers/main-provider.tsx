import { TooltipProvider } from '@/components/ui/tooltip';
import { ReactNode } from 'react';
import ThemeProvider from './theme-provider';

interface MainProviderProps {
  children: ReactNode;
}

const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <ThemeProvider>
      <TooltipProvider>{children}</TooltipProvider>;
    </ThemeProvider>
  );
};

export default MainProvider;

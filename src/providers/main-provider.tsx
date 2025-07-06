import { TooltipProvider } from '@/components/ui/tooltip';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import ThemeProvider from './theme-provider';

interface MainProviderProps {
  children: ReactNode;
}

const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <ThemeProvider>
      <TooltipProvider>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              color: 'hsl(var(--foreground))',
            },
          }}
        />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default MainProvider;

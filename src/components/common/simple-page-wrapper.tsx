import { cn } from '@/lib/utils';
import * as React from 'react';

export interface SimplePageWrapper {
  className?: string;
  children: React.ReactNode;
}

export const SimplePageWrapper = ({
  className,
  children,
}: SimplePageWrapper) => {
  return (
    <div
      className={cn(
        'w-full min-h-screen bg-background ',

        className
      )}
    >
      {children}
    </div>
  );
};

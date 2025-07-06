import { cn } from '@/lib/utils';
import * as React from 'react';

export interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  fullHeight?: boolean;
  background?: 'default' | 'muted' | 'gradient';
  padding?: boolean;
}

const PageWrapper = React.forwardRef<HTMLDivElement, PageWrapperProps>(
  (
    {
      className,
      fullHeight = false,
      background = 'default',
      padding = true,
      ...props
    },
    ref
  ) => {
    const backgroundClasses = {
      default: 'bg-background',
      muted: 'bg-muted/30',
      gradient: 'bg-gradient-to-br from-background to-muted/50',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          fullHeight ? 'min-h-screen' : 'min-h-0',
          backgroundClasses[background],
          padding && 'p-4 md:p-6 lg:p-8',
          className
        )}
        {...props}
      />
    );
  }
);

PageWrapper.displayName = 'PageWrapper';

export { PageWrapper };

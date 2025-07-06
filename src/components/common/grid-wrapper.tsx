import { cn } from '@/lib/utils';
import * as React from 'react';

export interface GridWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  responsive?: boolean;
}

const GridWrapper = React.forwardRef<HTMLDivElement, GridWrapperProps>(
  ({ className, cols = 1, gap = 'md', responsive = true, ...props }, ref) => {
    const colClasses = {
      1: 'grid-cols-1',
      2: responsive ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2',
      3: responsive
        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        : 'grid-cols-3',
      4: responsive
        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        : 'grid-cols-4',
      5: responsive
        ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5'
        : 'grid-cols-5',
      6: responsive
        ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6'
        : 'grid-cols-6',
      12: responsive
        ? 'grid-cols-1 md:grid-cols-6 lg:grid-cols-12'
        : 'grid-cols-12',
    };

    const gapClasses = {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-12',
    };

    return (
      <div
        ref={ref}
        className={cn('grid', colClasses[cols], gapClasses[gap], className)}
        {...props}
      />
    );
  }
);

GridWrapper.displayName = 'GridWrapper';

export { GridWrapper };

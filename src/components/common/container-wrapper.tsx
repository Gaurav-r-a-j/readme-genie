import { cn } from '@/lib/utils';
import * as React from 'react';

export interface ContainerWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
}

const ContainerWrapper = React.forwardRef<
  HTMLDivElement,
  ContainerWrapperProps
>(
  (
    { className, maxWidth = '7xl', padding = 'md', center = true, ...props },
    ref
  ) => {
    const maxWidthClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      '3xl': 'max-w-3xl',
      '4xl': 'max-w-4xl',
      '5xl': 'max-w-5xl',
      '6xl': 'max-w-6xl',
      '7xl': 'max-w-7xl',
      full: 'max-w-full',
    };

    const paddingClasses = {
      none: '',
      sm: 'px-4 py-2',
      md: 'px-6 py-4',
      lg: 'px-8 py-6',
      xl: 'px-12 py-8',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          maxWidthClasses[maxWidth],
          paddingClasses[padding],
          center && 'mx-auto',
          className
        )}
        {...props}
      />
    );
  }
);

ContainerWrapper.displayName = 'ContainerWrapper';

export { ContainerWrapper };

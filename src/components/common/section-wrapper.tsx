import { cn } from '@/lib/utils';
import * as React from 'react';

export interface SectionWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'section' | 'div' | 'article' | 'aside';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  background?: 'transparent' | 'muted' | 'card' | 'accent';
  border?: boolean;
  rounded?: boolean;
}

const SectionWrapper = React.forwardRef<HTMLDivElement, SectionWrapperProps>(
  (
    {
      className,
      as: Component = 'section',
      spacing = 'lg',
      background = 'transparent',
      border = false,
      rounded = false,
      ...props
    },
    ref
  ) => {
    const spacingClasses = {
      none: '',
      sm: 'py-4',
      md: 'py-6',
      lg: 'py-8',
      xl: 'py-12',
      '2xl': 'py-16',
    };

    const backgroundClasses = {
      transparent: '',
      muted: 'bg-muted/50',
      card: 'bg-card',
      accent: 'bg-accent/10',
    };

    return (
      <Component
        ref={ref}
        className={cn(
          'w-full',
          spacingClasses[spacing],
          backgroundClasses[background],
          border && 'border',
          rounded && 'rounded-lg',
          className
        )}
        {...props}
      />
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';

export { SectionWrapper };

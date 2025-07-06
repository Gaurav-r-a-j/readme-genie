import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import * as React from 'react';

export interface CardWrapperProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  variant?: 'default' | 'outlined' | 'elevated' | 'ghost';
}

const CardWrapper = React.forwardRef<HTMLDivElement, CardWrapperProps>(
  (
    {
      title,
      description,
      children,
      className,
      headerClassName,
      contentClassName,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      default: '',
      outlined: 'border-2',
      elevated: 'shadow-lg',
      ghost: 'border-0 shadow-none bg-transparent',
    };

    return (
      <Card
        ref={ref}
        className={cn(variantClasses[variant], className)}
        {...props}
      >
        {(title || description) && (
          <CardHeader className={cn('pb-4', headerClassName)}>
            {title && (
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            )}
            {description && (
              <CardDescription className="text-sm text-muted-foreground">
                {description}
              </CardDescription>
            )}
          </CardHeader>
        )}
        <CardContent className={cn('pt-0', contentClassName)}>
          {children}
        </CardContent>
      </Card>
    );
  }
);

CardWrapper.displayName = 'CardWrapper';

export { CardWrapper };

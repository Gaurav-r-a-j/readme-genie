import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Loader2, LucideIcon } from 'lucide-react';
import React from 'react';

interface LoadingStateProps {
  message?: string;
  className?: string;
}

interface ErrorStateProps {
  title?: string;
  message: string;
  icon?: LucideIcon;
  variant?: 'default' | 'destructive';
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading...',
  className,
}) => {
  return (
    <Card className={className}>
      <CardContent className="flex items-center justify-center py-12">
        <Loader2 className="h-6 w-6 animate-spin mr-2" />
        <span className="text-muted-foreground">{message}</span>
      </CardContent>
    </Card>
  );
};

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Error',
  message,
  icon: Icon,
  variant = 'destructive',
  className,
}) => {
  return (
    <Alert
      variant={variant}
      className={cn('flex items-center gap-2', className)}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <AlertDescription>
        {title && <span className="font-medium">{title}: </span>}
        {message}
      </AlertDescription>
    </Alert>
  );
};

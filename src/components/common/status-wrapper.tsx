import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import * as React from 'react';

export interface StatusWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: 'loading' | 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message?: string;
  action?: React.ReactNode;
  compact?: boolean;
}

const StatusWrapper = React.forwardRef<HTMLDivElement, StatusWrapperProps>(
  (
    {
      className,
      status,
      title,
      message,
      action,
      compact = false,
      children,
      ...props
    },
    ref
  ) => {
    const statusConfig = {
      loading: {
        icon: (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-r-transparent" />
        ),
        bgColor: 'bg-muted/50',
        textColor: 'text-muted-foreground',
        borderColor: 'border-muted',
      },
      success: {
        icon: <CheckCircle className="h-5 w-5" />,
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        textColor: 'text-green-700 dark:text-green-300',
        borderColor: 'border-green-200 dark:border-green-800',
      },
      error: {
        icon: <XCircle className="h-5 w-5" />,
        bgColor: 'bg-red-50 dark:bg-red-900/20',
        textColor: 'text-red-700 dark:text-red-300',
        borderColor: 'border-red-200 dark:border-red-800',
      },
      warning: {
        icon: <AlertCircle className="h-5 w-5" />,
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
        textColor: 'text-yellow-700 dark:text-yellow-300',
        borderColor: 'border-yellow-200 dark:border-yellow-800',
      },
      info: {
        icon: <Info className="h-5 w-5" />,
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        textColor: 'text-blue-700 dark:text-blue-300',
        borderColor: 'border-blue-200 dark:border-blue-800',
      },
    };

    const config = statusConfig[status];

    if (compact) {
      return (
        <div
          ref={ref}
          className={cn(
            'flex items-center gap-2 text-sm',
            config.textColor,
            className
          )}
          {...props}
        >
          {config.icon}
          <span>{message || children}</span>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border p-4',
          config.bgColor,
          config.borderColor,
          className
        )}
        {...props}
      >
        <div className="flex gap-3">
          <div className={cn('flex-shrink-0', config.textColor)}>
            {config.icon}
          </div>
          <div className="flex-1 space-y-2">
            {title && (
              <h3 className={cn('font-medium text-sm', config.textColor)}>
                {title}
              </h3>
            )}
            {message && (
              <p className={cn('text-sm', config.textColor)}>{message}</p>
            )}
            {children && <div className={config.textColor}>{children}</div>}
            {action && <div className="mt-3">{action}</div>}
          </div>
        </div>
      </div>
    );
  }
);

StatusWrapper.displayName = 'StatusWrapper';

export { StatusWrapper };

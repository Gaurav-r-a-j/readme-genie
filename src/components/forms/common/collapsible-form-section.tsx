import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { ReactNode } from 'react';

interface CollapsibleFormSectionProps {
  title: string;
  icon: ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
}

export const CollapsibleFormSection: React.FC<CollapsibleFormSectionProps> = ({
  title,
  icon,
  isExpanded,
  onToggle,
  children,
  className,
  headerClassName,
  contentClassName,
}) => {
  return (
    <Card className={cn('w-full transition-all duration-200', className)}>
      <CardHeader
        className={cn(
          'pb-3 flex flex-row items-center justify-between space-y-0 cursor-pointer hover:bg-muted/50 transition-colors',
          headerClassName
        )}
        onClick={onToggle}
      >
        <CardTitle className="text-xl flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground transition-transform" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform" />
        )}
      </CardHeader>

      {isExpanded && (
        <CardContent className={cn('pt-0', contentClassName)}>
          {children}
        </CardContent>
      )}
    </Card>
  );
};

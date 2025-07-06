import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface PageHeadingProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHeading({
  title,
  description,
  children,
  className,
}: PageHeadingProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {description && <p className="text-muted-foreground">{description}</p>}
      {children}
    </div>
  );
}

interface SectionHeadingProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('space-y-1', className)}>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
      {children}
    </div>
  );
}

interface SubsectionHeadingProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function SubsectionHeading({
  title,
  description,
  children,
  className,
}: SubsectionHeadingProps) {
  return (
    <div className={cn('space-y-1', className)}>
      <h3 className="text-lg font-medium">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  );
}

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

interface StepNavigationProps {
  showBack?: boolean;
  showNext?: boolean;
  backLabel?: string;
  nextLabel?: string;
  onBack?: () => void;
  onNext?: () => void;
  className?: string;
  isNextDisabled?: boolean;
}

export const StepNavigation: React.FC<StepNavigationProps> = ({
  showBack = true,
  showNext = true,
  backLabel = 'Back',
  nextLabel = 'Continue',
  onBack,
  onNext,
  className,
  isNextDisabled = false,
}) => (
  <div className={cn('flex justify-between items-center pt-6', className)}>
    {showBack ? (
      <Button variant="outline" onClick={onBack} type="button">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {backLabel}
      </Button>
    ) : (
      <div />
    )}
    {showNext && (
      <Button onClick={onNext} type="submit" disabled={isNextDisabled}>
        {nextLabel}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    )}
  </div>
);

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

export interface StepWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  currentStep: number;
  totalSteps: number;
  onNext?: () => void;
  onPrev?: () => void;
  onSkip?: () => void;
  nextLabel?: string;
  prevLabel?: string;
  skipLabel?: string;
  showProgress?: boolean;
  canProceed?: boolean;
  isLoading?: boolean;
}

const StepWrapper = React.forwardRef<HTMLDivElement, StepWrapperProps>(
  (
    {
      className,
      currentStep,
      totalSteps,
      onNext,
      onPrev,
      onSkip,
      nextLabel = 'Next',
      prevLabel = 'Previous',
      skipLabel = 'Skip',
      showProgress = true,
      canProceed = true,
      isLoading = false,
      children,
      ...props
    },
    ref
  ) => {
    const progressPercentage = (currentStep / totalSteps) * 100;

    return (
      <div ref={ref} className={cn('w-full space-y-6', className)} {...props}>
        {showProgress && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>
                Step {currentStep} of {totalSteps}
              </span>
              <span>{Math.round(progressPercentage)}% complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex-1">{children}</div>

        <div className="flex justify-between items-center pt-6 border-t">
          <div>
            {currentStep > 1 && onPrev && (
              <Button
                type="button"
                variant="outline"
                onClick={onPrev}
                disabled={isLoading}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                {prevLabel}
              </Button>
            )}
          </div>

          <div className="flex gap-3">
            {onSkip && currentStep < totalSteps && (
              <Button
                type="button"
                variant="ghost"
                onClick={onSkip}
                disabled={isLoading}
              >
                {skipLabel}
              </Button>
            )}

            {onNext && (
              <Button
                type="button"
                onClick={onNext}
                disabled={!canProceed || isLoading}
                className="flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
                    Processing...
                  </>
                ) : (
                  <>
                    {nextLabel}
                    {currentStep < totalSteps && (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

StepWrapper.displayName = 'StepWrapper';

export { StepWrapper };

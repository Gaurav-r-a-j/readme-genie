import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle2,
  Circle,
  Code,
  Palette,
  Share2,
  Sparkles,
  User,
} from 'lucide-react';
import React from 'react';

export interface StepperStep {
  id: string;
  label: string;
  description: string;
  completed: boolean;
  visited?: boolean;
  hasData?: boolean;
  icon?: React.ReactNode;
}

interface StepperProps {
  steps: StepperStep[];
  currentStep: string;
  className?: string;
  compact?: boolean;
  onStepClick?: (stepId: string) => void;
}

const getStepIcon = (stepId: string) => {
  switch (stepId) {
    case 'basic':
      return <User className="h-4 w-4" />;
    case 'skills':
      return <Code className="h-4 w-4" />;
    case 'socials':
      return <Share2 className="h-4 w-4" />;
    case 'appearance':
      return <Palette className="h-4 w-4" />;
    case 'addons':
      return <Sparkles className="h-4 w-4" />;
    default:
      return <Circle className="h-4 w-4" />;
  }
};

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  className = '',
  compact = false,
  onStepClick,
}) => {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  // Only count as completed if step has been visited AND actually completed
  const completedStepsCount = steps.filter(
    step => step.completed && step.visited === true
  ).length;

  // Progress calculation: only count truly completed steps (not current step)
  const progressPercentage = (completedStepsCount / steps.length) * 100;

  return (
    <Card className={className}>
      <CardContent className={compact ? 'p-4' : 'p-6'}>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3
              className={`font-semibold ${compact ? 'text-base' : 'text-lg'}`}
            >
              Progress
            </h3>
            <Badge variant="secondary" className="text-xs">
              {completedStepsCount}/{steps.length} Complete
            </Badge>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progressPercentage}%`,
              }}
            />
          </div>

          {/* Steps container */}
          <div className="relative space-y-0">
            {steps.map((step, index) => {
              const isCurrent = step.id === currentStep;
              const isCompleted = step.completed && step.visited === true;
              const isVisited = step.visited === true || isCurrent;
              const hasData = step.hasData;
              const isLastStep = index === steps.length - 1;
              const isClickable = onStepClick !== undefined;

              return (
                <div key={step.id} className="relative">
                  {/* Connecting line - positioned behind the step */}
                  {!isLastStep && (
                    <div
                      className={`absolute ${compact ? 'left-[11px]' : 'left-[15px]'} ${compact ? 'top-6' : 'top-8'} w-0.5 ${compact ? 'h-8' : 'h-10'} -z-10`}
                      style={{
                        backgroundColor:
                          isCompleted &&
                          steps[index + 1] &&
                          steps[index + 1].completed &&
                          steps[index + 1].visited === true
                            ? 'hsl(var(--primary))'
                            : isCompleted
                              ? 'hsl(var(--primary))'
                              : 'hsl(var(--muted-foreground) / 0.3)',
                      }}
                    />
                  )}

                  {/* Step item */}
                  <div
                    onClick={() => isClickable && onStepClick(step.id)}
                    className={`relative flex items-start gap-4 ${compact ? 'py-2 px-3' : 'py-3 px-4'} rounded-lg transition-all duration-200 ${
                      isClickable ? 'cursor-pointer' : ''
                    } ${
                      isCurrent
                        ? 'bg-primary/5 border border-primary/20 shadow-sm'
                        : isCompleted
                          ? 'bg-green-50/80 dark:bg-green-950/20 border border-green-200/50 dark:border-green-800/50'
                          : isVisited && hasData
                            ? 'bg-blue-50/80 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/50'
                            : 'hover:bg-muted/30'
                    } ${isClickable ? 'hover:shadow-md hover:bg-accent/10' : ''}`}
                  >
                    {/* Step icon/number */}
                    <div
                      className={`relative z-10 flex-shrink-0 ${compact ? 'w-6 h-6' : 'w-8 h-8'} rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        isCompleted
                          ? 'bg-green-500 border-green-500 text-white shadow-sm'
                          : isCurrent
                            ? 'bg-primary border-primary text-primary-foreground shadow-sm'
                            : isVisited && hasData
                              ? 'bg-blue-500/80 border-blue-500 text-white shadow-sm'
                              : 'bg-background border-muted-foreground/50 text-muted-foreground'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2
                          className={compact ? 'h-3 w-3' : 'h-4 w-4'}
                        />
                      ) : isVisited && hasData && !isCurrent ? (
                        <div
                          className={`${compact ? 'w-2 h-2' : 'w-2.5 h-2.5'} rounded-full bg-white`}
                        />
                      ) : (
                        <div className={compact ? 'text-xs' : ''}>
                          {getStepIcon(step.id)}
                        </div>
                      )}
                    </div>

                    {/* Step content */}
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-medium ${compact ? 'text-sm' : 'text-base'} ${
                          isCurrent
                            ? 'text-primary'
                            : isCompleted
                              ? 'text-green-700 dark:text-green-400'
                              : isVisited && hasData
                                ? 'text-blue-700 dark:text-blue-400'
                                : 'text-foreground'
                        }`}
                      >
                        {step.label}
                      </div>
                      {!compact && (
                        <div className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {step.description}
                        </div>
                      )}
                    </div>

                    {/* Step status indicator */}
                    <div className="flex-shrink-0 flex items-center">
                      {isCompleted && (
                        <Badge
                          variant="outline"
                          className={`${compact ? 'text-xs px-2 py-0.5' : 'text-xs px-2 py-1'} bg-green-100 text-green-700 border-green-300 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700`}
                        >
                          ✓ Done
                        </Badge>
                      )}
                      {isCurrent && !isCompleted && (
                        <Badge
                          className={`${compact ? 'text-xs px-2 py-0.5' : 'text-xs px-2 py-1'} animate-pulse`}
                        >
                          Active
                        </Badge>
                      )}
                      {!isCurrent && !isCompleted && isVisited && hasData && (
                        <Badge
                          variant="outline"
                          className={`${compact ? 'text-xs px-2 py-0.5' : 'text-xs px-2 py-1'} bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700`}
                        >
                          Draft
                        </Badge>
                      )}
                      {!isCurrent &&
                        !isCompleted &&
                        (!isVisited || !hasData) && (
                          <div
                            className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} rounded-full bg-muted border border-muted-foreground/30`}
                          />
                        )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div
            className={`${compact ? 'pt-3' : 'pt-4'} border-t border-border/50`}
          >
            <div className="text-xs text-muted-foreground text-center">
              {completedStepsCount === steps.length ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    🎉 All steps completed!
                  </span>
                  <Badge
                    variant="outline"
                    className="text-xs bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700"
                  >
                    Ready to generate
                  </Badge>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span>
                    Step {currentStepIndex + 1} of {steps.length}
                  </span>
                  <span className="text-muted-foreground/60">•</span>
                  <span className="text-primary font-medium">
                    {steps.find(s => s.id === currentStep)?.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Stepper;

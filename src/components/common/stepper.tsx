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
  icon?: React.ReactNode;
}

interface StepperProps {
  steps: StepperStep[];
  currentStep: string;
  className?: string;
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
}) => {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep);
  const completedStepsCount = steps.filter(step => step.completed).length;

  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Progress</h3>
            <Badge variant="secondary" className="text-xs">
              {completedStepsCount}/{steps.length} Complete
            </Badge>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-muted rounded-full h-2 mb-6">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${(completedStepsCount / steps.length) * 100}%`,
              }}
            ></div>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const isCurrent = step.id === currentStep;
              const isCompleted = step.completed;

              return (
                <div
                  key={step.id}
                  className={`relative flex items-start gap-3 p-3 rounded-lg transition-all duration-200 ${
                    isCurrent
                      ? 'bg-primary/10 border border-primary/20'
                      : isCompleted
                        ? 'bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800'
                        : 'hover:bg-muted/50'
                  }`}
                >
                  {/* Step icon/number */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isCompleted
                        ? 'bg-green-500 border-green-500 text-white'
                        : isCurrent
                          ? 'bg-primary border-primary text-primary-foreground'
                          : 'bg-background border-muted-foreground text-muted-foreground'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      getStepIcon(step.id)
                    )}
                  </div>

                  {/* Step content */}
                  <div className="flex-1 min-w-0">
                    <div
                      className={`font-medium text-sm ${
                        isCurrent
                          ? 'text-primary'
                          : isCompleted
                            ? 'text-green-700 dark:text-green-400'
                            : 'text-muted-foreground'
                      }`}
                    >
                      {step.label}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {step.description}
                    </div>
                  </div>

                  {/* Step status indicator */}
                  <div className="flex-shrink-0">
                    {isCompleted && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      >
                        ✓
                      </Badge>
                    )}
                    {isCurrent && !isCompleted && (
                      <Badge className="text-xs">Current</Badge>
                    )}
                  </div>

                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute left-6 top-12 w-0.5 h-4 transition-colors ${
                        isCompleted ? 'bg-green-500' : 'bg-muted'
                      }`}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="mt-6 pt-4 border-t">
            <div className="text-xs text-muted-foreground text-center">
              {completedStepsCount === steps.length ? (
                <span className="text-green-600 dark:text-green-400 font-medium">
                  🎉 All steps completed! Ready to generate.
                </span>
              ) : (
                <span>
                  Step {currentStepIndex + 1} of {steps.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Stepper;

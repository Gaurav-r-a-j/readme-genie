import Stepper, { StepperStep } from '@/components/common/stepper-new';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FormDataType, readmeFormSchema } from '@/types/readme-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, ChevronRight, RotateCcw, Sparkles } from 'lucide-react';
import React, { useCallback, useMemo, useState } from 'react';
import { Form, FormProvider, useForm } from 'react-hook-form';
import {
  AddonsSection,
  AppearanceSection,
  BasicInfoSection,
  SkillsSection,
  SocialsSection,
} from './sections';

type StepperFormProps = {
  formData: FormDataType;
  setFormData: (
    data: FormDataType | ((prev: FormDataType) => FormDataType)
  ) => void;
  onGenerateReadme: () => void;
};

const StepperFormNew: React.FC<StepperFormProps> = ({
  formData,
  setFormData,
  onGenerateReadme,
}) => {
  const [currentStep, setCurrentStep] = useState('basic');
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(readmeFormSchema),
    defaultValues: formData,
    mode: 'onChange',
  });

  // Watch form values and update parent state
  React.useEffect(() => {
    const subscription = form.watch(value => {
      if (value) {
        setFormData(value as FormDataType);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, setFormData]);

  const steps: StepperStep[] = useMemo(
    () => [
      {
        id: 'basic',
        label: 'Basic Info',
        description: 'Personal details and introduction',
        completed: !!(formData.name && formData.title && formData.about),
      },
      {
        id: 'skills',
        label: 'Skills',
        description: 'Technical skills and expertise',
        completed: formData.skills.length > 0,
      },
      {
        id: 'socials',
        label: 'Social Links',
        description: 'GitHub and social media profiles',
        completed: !!formData.github,
      },
      {
        id: 'appearance',
        label: 'Appearance',
        description: 'Customize the visual style',
        completed: true, // Optional section
      },
      {
        id: 'addons',
        label: 'Add-ons',
        description: 'Extra features and widgets',
        completed: true, // Optional section
      },
    ],
    [
      formData.name,
      formData.title,
      formData.about,
      formData.skills.length,
      formData.github,
    ]
  );

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;
  const allRequiredCompleted = steps.slice(0, 3).every(step => step.completed); // Only first 3 are required

  const handleNext = useCallback(() => {
    if (!isLastStep) {
      setCurrentStep(steps[currentStepIndex + 1].id);
    }
  }, [isLastStep, steps, currentStepIndex]);

  const handlePrevious = useCallback(() => {
    if (!isFirstStep) {
      setCurrentStep(steps[currentStepIndex - 1].id);
    }
  }, [isFirstStep, steps, currentStepIndex]);

  // Add keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case 'ArrowLeft':
            event.preventDefault();
            if (!isFirstStep) handlePrevious();
            break;
          case 'ArrowRight':
            event.preventDefault();
            if (!isLastStep) handleNext();
            break;
          case 'r':
            event.preventDefault();
            setIsResetDialogOpen(true);
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFirstStep, isLastStep, handleNext, handlePrevious]);

  const handleStepClick = (stepId: string) => {
    setCurrentStep(stepId);
  };

  const handleReset = () => {
    const emptyData: FormDataType = {
      name: '',
      title: '',
      about: '',
      location: '',
      portfolio: '',
      currentWork: '',
      education: '',
      funFact: '',
      skills: [],
      github: '',
      twitter: '',
      linkedin: '',
      email: '',
      instagram: '',
      facebook: '',
      codepen: '',
      dribbble: '',
      stackoverflow: '',
      youtube: '',
      dev: '',
      medium: '',
      buymeacoffee: '',
      kofi: '',
      darkMode: false,
      bannerColor: '#0891b2',
      layoutStyle: 'standard' as const,
      showStats: true,
      showVisitors: true,
      showTrophies: false,
      showStreak: false,
    };

    form.reset(emptyData);
    setFormData(emptyData);
    setCurrentStep('basic');
    setIsResetDialogOpen(false);
  };

  const renderCurrentSection = () => {
    switch (currentStep) {
      case 'basic':
        return <BasicInfoSection />;
      case 'skills':
        return <SkillsSection />;
      case 'socials':
        return <SocialsSection />;
      case 'appearance':
        return <AppearanceSection />;
      case 'addons':
        return <AddonsSection />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...form}>
      <div className="space-y-6">
        {/* Mobile Layout - Stepper on top */}
        <div className="lg:hidden">
          <Stepper
            steps={steps}
            currentStep={currentStep}
            onStepClick={handleStepClick}
          />
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
          {/* Left Side - Stepper (30% width on desktop) */}
          <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-6">
            <Stepper
              steps={steps}
              currentStep={currentStep}
              compact
              onStepClick={handleStepClick}
            />
          </div>

          {/* Right Side - Form Content (70% width on desktop) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Current Step Content */}
            <Card className="transition-all duration-300 ease-in-out">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                      <span className="text-sm font-bold text-primary">
                        {currentStepIndex + 1}
                      </span>
                    </div>
                    {steps[currentStepIndex].label}
                  </CardTitle>

                  {/* Reset Button with Confirmation Dialog */}
                  <Dialog
                    open={isResetDialogOpen}
                    onOpenChange={setIsResetDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Reset Form
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Reset Form</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to reset the form? This will
                          clear all your progress and you&apos;ll need to start
                          over. This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setIsResetDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={handleReset}
                          className="flex items-center gap-2"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Reset Everything
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <p className="text-sm text-muted-foreground">
                  {steps[currentStepIndex].description}
                  {/* Step validation hint */}
                  {currentStep === 'basic' && !steps[0].completed && (
                    <span className="block text-xs text-amber-600 dark:text-amber-400 mt-1">
                      ⚠️ Required: Name, Title, and About sections
                    </span>
                  )}
                  {currentStep === 'skills' && !steps[1].completed && (
                    <span className="block text-xs text-amber-600 dark:text-amber-400 mt-1">
                      ⚠️ Required: At least one skill
                    </span>
                  )}
                  {currentStep === 'socials' && !steps[2].completed && (
                    <span className="block text-xs text-amber-600 dark:text-amber-400 mt-1">
                      ⚠️ Required: GitHub username
                    </span>
                  )}
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form className="space-y-6">
                    <div
                      key={currentStep}
                      className="animate-in fade-in-50 duration-300"
                    >
                      {renderCurrentSection()}
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Card className="bg-muted/30">
              <CardContent className="pt-4">
                <div className="flex justify-between items-center">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={isFirstStep}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                      {currentStepIndex + 1} of {steps.length}
                    </div>
                    <div className="flex gap-1">
                      {steps.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentStepIndex
                              ? 'bg-primary'
                              : index < currentStepIndex
                                ? 'bg-green-500'
                                : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {!isLastStep ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center gap-2"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={onGenerateReadme}
                      disabled={!allRequiredCompleted}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Sparkles className="w-4 h-4" />
                      Generate README
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Progress Info */}
            {!allRequiredCompleted && (
              <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-800">
                <CardContent className="pt-4">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    Please complete the required sections (Basic Info, Skills,
                    and Social Links) to generate your README.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Keyboard Shortcuts Hint */}
            <Card className="bg-muted/20 border-dashed">
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground text-center">
                  💡 <strong>Shortcuts:</strong> Use{' '}
                  <kbd className="px-1 py-0.5 bg-muted rounded text-xs">
                    Ctrl/Cmd + ←→
                  </kbd>{' '}
                  to navigate steps,
                  <kbd className="px-1 py-0.5 bg-muted rounded text-xs ml-1">
                    Ctrl/Cmd + R
                  </kbd>{' '}
                  to reset form, or click on any step in the progress panel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default StepperFormNew;

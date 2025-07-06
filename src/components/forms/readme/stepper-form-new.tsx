import Stepper, { StepperStep } from '@/components/common/stepper-new';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormDataType, readmeFormSchema } from '@/types/readme-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
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

  const steps: StepperStep[] = [
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
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;
  const allRequiredCompleted = steps.slice(0, 3).every(step => step.completed); // Only first 3 are required

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep(steps[currentStepIndex + 1].id);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(steps[currentStepIndex - 1].id);
    }
  };

  const renderCurrentSection = () => {
    switch (currentStep) {
      case 'basic':
        return <BasicInfoSection isExpanded={true} onToggle={() => {}} />;
      case 'skills':
        return <SkillsSection isExpanded={true} onToggle={() => {}} />;
      case 'socials':
        return <SocialsSection isExpanded={true} onToggle={() => {}} />;
      case 'appearance':
        return <AppearanceSection isExpanded={true} onToggle={() => {}} />;
      case 'addons':
        return <AddonsSection isExpanded={true} onToggle={() => {}} />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...form}>
      <div className="space-y-6">
        {/* Mobile Layout - Stepper on top */}
        <div className="lg:hidden">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
          {/* Left Side - Stepper (30% width on desktop) */}
          <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-6">
            <Stepper steps={steps} currentStep={currentStep} compact />
          </div>

          {/* Right Side - Form Content (70% width on desktop) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Current Step Content */}
            <Card className="transition-all duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                    <span className="text-sm font-bold text-primary">
                      {currentStepIndex + 1}
                    </span>
                  </div>
                  {steps[currentStepIndex].label}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {steps[currentStepIndex].description}
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
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default StepperFormNew;

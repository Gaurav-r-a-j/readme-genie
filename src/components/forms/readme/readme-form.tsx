import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Form } from '@/components/ui/form';
import {
  alternativeSampleData,
  sampleReadmeData,
} from '@/constants/sample-data';
import {
  FormDataType,
  ReadmeFormData,
  readmeFormSchema,
  SectionState,
} from '@/types/readme-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RotateCcw, Sparkles, User, Wand2 } from 'lucide-react';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  AddonsSection,
  AppearanceSection,
  BasicInfoSection,
  SkillsSection,
  SocialsSection,
} from './sections';

type ReadmeFormProps = {
  formData: ReadmeFormData;
  setFormData: React.Dispatch<React.SetStateAction<ReadmeFormData>>;
};

const ReadmeForm: React.FC<ReadmeFormProps> = ({ formData, setFormData }) => {
  const [expandedSections, setExpandedSections] = useState<SectionState>({
    basic: true,
    skills: true,
    socials: true,
    appearance: true,
    addons: true,
  });

  // Initialize form with React Hook Form and Zod validation
  const form = useForm({
    resolver: zodResolver(readmeFormSchema),
    defaultValues: formData,
    mode: 'onChange',
  });

  // Watch form values and update parent state
  React.useEffect(() => {
    const subscription = form.watch(value => {
      if (value) {
        setFormData(value as ReadmeFormData);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, setFormData]);

  const toggleSection = (section: keyof SectionState) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleFormSubmit = (data: z.infer<typeof readmeFormSchema>) => {
    console.log('Form submitted:', data);
    setFormData(data);
  };

  const loadSampleData = (sampleType: 'developer' | 'alternative') => {
    const sampleData =
      sampleType === 'developer' ? sampleReadmeData : alternativeSampleData;
    form.reset(sampleData);
    setFormData(sampleData);
  };

  const clearForm = () => {
    const emptyData: ReadmeFormData = {
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
      layoutStyle: 'standard',
      showStats: true,
      showVisitors: true,
      showTrophies: false,
      showStreak: false,
    };
    form.reset(emptyData);
    setFormData(emptyData);
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-6"
        >
          {/* Sample Data Controls */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Get started quickly with sample data or start from scratch. Use
                sample profiles to see what a complete README looks like!
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => loadSampleData('developer')}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950/20 border-blue-200 dark:border-blue-800"
                >
                  <User className="h-4 w-4" />
                  Load Developer Profile
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-950/20 border-purple-200 dark:border-purple-800"
                    >
                      <Wand2 className="h-4 w-4" />
                      More Samples
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem
                      onClick={() => loadSampleData('alternative')}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Creative Developer
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => loadSampleData('developer')}
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      Full Stack Developer
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={clearForm}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-950/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400"
                >
                  <RotateCcw className="h-4 w-4" />
                  Clear All
                </Button>
              </div>
            </CardContent>
          </Card>

          <BasicInfoSection
            isExpanded={expandedSections.basic}
            onToggle={() => toggleSection('basic')}
          />

          <SkillsSection
            isExpanded={expandedSections.skills}
            onToggle={() => toggleSection('skills')}
          />

          <SocialsSection
            isExpanded={expandedSections.socials}
            onToggle={() => toggleSection('socials')}
          />

          <AppearanceSection
            isExpanded={expandedSections.appearance}
            onToggle={() => toggleSection('appearance')}
          />

          <AddonsSection
            isExpanded={expandedSections.addons}
            onToggle={() => toggleSection('addons')}
          />

          {/* Form Debug Panel - Remove in production */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h3 className="text-sm font-medium mb-2">Form Debug Info</h3>
              <div className="text-xs space-y-1">
                <p>Valid: {form.formState.isValid ? 'Yes' : 'No'}</p>
                <p>Errors: {Object.keys(form.formState.errors).length}</p>
                {Object.keys(form.formState.errors).length > 0 && (
                  <details className="mt-2">
                    <summary className="cursor-pointer text-destructive">
                      Show Errors ({Object.keys(form.formState.errors).length})
                    </summary>
                    <pre className="mt-2 text-xs bg-destructive/10 p-2 rounded">
                      {JSON.stringify(form.formState.errors, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            </div>
          )}
        </form>
      </Form>
    </FormProvider>
  );
};

export default ReadmeForm;

// Export for backward compatibility
export type { FormDataType };

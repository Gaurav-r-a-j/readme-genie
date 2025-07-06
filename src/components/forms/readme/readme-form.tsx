import { Form } from '@/components/ui/form';
import {
  FormDataType,
  ReadmeFormData,
  readmeFormSchema,
  SectionState,
} from '@/types/readme-form';
import { zodResolver } from '@hookform/resolvers/zod';
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

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-6"
        >
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

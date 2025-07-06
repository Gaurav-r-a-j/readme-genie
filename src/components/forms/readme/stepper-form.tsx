import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormDataType } from '@/types/readme-form';
import { Sparkles } from 'lucide-react';
import React from 'react';
import ReadmeForm from './readme-form';

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
  const isFormValid =
    formData.name &&
    formData.title &&
    formData.about &&
    formData.github &&
    formData.skills.length > 0;

  return (
    <div className="space-y-6">
      <ReadmeForm formData={formData} setFormData={setFormData} />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Generate Your README
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Ready to create your awesome GitHub profile README? Make sure
              you&apos;ve filled out all the required fields above.
            </p>
            <Button
              onClick={onGenerateReadme}
              disabled={!isFormValid}
              className="w-full"
              size="lg"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Generate README
            </Button>
            {!isFormValid && (
              <p className="text-xs text-destructive">
                Please fill out all required fields: Name, Title, About, GitHub
                username, and at least one skill.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StepperFormNew;

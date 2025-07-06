import React from 'react';
import { Code } from 'lucide-react';
import { FormSectionProps } from '@/types/readme-form';
import { CollapsibleFormSection } from '@/components/forms/common';
import SkillSelector from '@/components/custom/skill-selector';
import { useFormContext } from 'react-hook-form';

export const SkillsSection: React.FC<FormSectionProps> = ({
  isExpanded,
  onToggle,
}) => {
  const form = useFormContext();
  const selectedSkills = form.watch('skills') || [];

  const handleSkillsUpdate = (skills: string[]) => {
    form.setValue('skills', skills, { shouldValidate: true });
  };

  return (
    <CollapsibleFormSection
      title="Skills & Technologies"
      icon={<Code className="h-5 w-5 text-primary" />}
      isExpanded={isExpanded}
      onToggle={onToggle}
    >
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Select the skills and technologies you work with. These will be displayed in your README with their respective icons.
        </p>
        
        <SkillSelector
          selectedSkills={selectedSkills}
          setSelectedSkills={handleSkillsUpdate}
        />
        
        {selectedSkills.length > 0 && (
          <p className="text-sm text-muted-foreground">
            Selected {selectedSkills.length} skill{selectedSkills.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>
    </CollapsibleFormSection>
  );
};

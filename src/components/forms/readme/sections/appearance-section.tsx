import { GridWrapper } from '@/components/common';
import {
  FormSelectField,
  FormSwitchField,
  FormTextField,
} from '@/components/forms/common';
import { LayoutDashboard, Moon, Palette } from 'lucide-react';
import React from 'react';

export const AppearanceSection: React.FC = () => {
  const layoutOptions = [
    { value: 'standard', label: 'Standard Layout' },
    { value: 'compact', label: 'Compact Layout' },
    { value: 'creative', label: 'Creative Layout' },
  ];

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Customize the visual appearance and layout of your README profile.
      </p>

      {/* Theme Options */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
          <Moon className="h-4 w-4" />
          Theme Settings
        </h4>

        <FormSwitchField
          name="darkMode"
          label="Enable Dark Mode"
          description="Use dark theme colors for your README components"
        />
      </div>

      {/* Layout Configuration */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
          <LayoutDashboard className="h-4 w-4" />
          Layout Style
        </h4>

        <FormSelectField
          name="layoutStyle"
          label="README Layout"
          placeholder="Choose a layout style"
          options={layoutOptions}
          description="Select how your README content should be organized"
        />
      </div>

      {/* Color Customization */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
          <Palette className="h-4 w-4" />
          Colors
        </h4>

        <GridWrapper cols={1} gap="md">
          <FormTextField
            name="bannerColor"
            label="Banner Color"
            placeholder="#0891b2"
            type="color"
            description="Choose the primary color for your README banner and accents"
          />
        </GridWrapper>
      </div>

      {/* Preview Section */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Preview</h4>
        <div className="border rounded-lg p-4 bg-card">
          <p className="text-sm text-muted-foreground text-center">
            README preview will be updated based on your appearance settings
          </p>
        </div>
      </div>
    </div>
  );
};

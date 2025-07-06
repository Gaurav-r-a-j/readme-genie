import React from 'react';
import { Zap, BarChart3, Users, Award, TrendingUp } from 'lucide-react';
import { FormSectionProps } from '@/types/readme-form';
import { CollapsibleFormSection, FormSwitchField } from '@/components/forms/common';

export const AddonsSection: React.FC<FormSectionProps> = ({
  isExpanded,
  onToggle,
}) => {
  return (
    <CollapsibleFormSection
      title="Add-ons & Features"
      icon={<Zap className="h-5 w-5 text-primary" />}
      isExpanded={isExpanded}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Enable additional features and widgets to enhance your GitHub profile README.
        </p>

        {/* Statistics & Analytics */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            GitHub Statistics
          </h4>
          
          <div className="space-y-3">
            <FormSwitchField
              name="showStats"
              label="GitHub Stats Card"
              description="Display your GitHub statistics including commits, PRs, and contributions"
            />
            
            <FormSwitchField
              name="showStreak"
              label="Contribution Streak"
              description="Show your current contribution streak and longest streak"
            />
          </div>
        </div>

        {/* Profile Metrics */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
            <Users className="h-4 w-4" />
            Profile Metrics
          </h4>
          
          <div className="space-y-3">
            <FormSwitchField
              name="showVisitors"
              label="Visitor Counter"
              description="Track and display the number of profile visitors"
            />
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
            <Award className="h-4 w-4" />
            Achievements
          </h4>
          
          <div className="space-y-3">
            <FormSwitchField
              name="showTrophies"
              label="GitHub Trophies"
              description="Display GitHub achievement trophies and badges"
            />
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Features Preview
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="border rounded-lg p-3 bg-card">
              <div className="h-20 bg-gradient-to-r from-primary/10 to-primary/5 rounded flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <p className="text-xs text-center mt-2 text-muted-foreground">GitHub Stats</p>
            </div>
            <div className="border rounded-lg p-3 bg-card">
              <div className="h-20 bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded flex items-center justify-center">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <p className="text-xs text-center mt-2 text-muted-foreground">Trophies</p>
            </div>
          </div>
        </div>
      </div>
    </CollapsibleFormSection>
  );
};

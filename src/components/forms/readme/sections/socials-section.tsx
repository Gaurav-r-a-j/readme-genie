import React from 'react';
import { Globe, Github, Twitter, Linkedin, Mail, Instagram, Coffee, MessageCircle } from 'lucide-react';
import { FormSectionProps } from '@/types/readme-form';
import { CollapsibleFormSection, FormTextField } from '@/components/forms/common';
import { GridWrapper } from '@/components/common';

export const SocialsSection: React.FC<FormSectionProps> = ({
  isExpanded,
  onToggle,
}) => {
  return (
    <CollapsibleFormSection
      title="Social Links"
      icon={<Globe className="h-5 w-5 text-primary" />}
      isExpanded={isExpanded}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Add your social media profiles and professional links. These will be displayed as badges in your README.
        </p>

        {/* Primary Social Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground">Primary Platforms</h4>
          <GridWrapper cols={1} gap="md">
            <FormTextField
              name="github"
              label="GitHub Username"
              placeholder="your-username"
              icon={<Github className="h-4 w-4" />}
              required
              description="Your GitHub username (without @)"
            />
            
            <FormTextField
              name="email"
              label="Email Address"
              placeholder="your.email@example.com"
              icon={<Mail className="h-4 w-4" />}
              type="email"
            />
          </GridWrapper>
        </div>

        {/* Professional Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground">Professional Networks</h4>
          <GridWrapper cols={2} gap="md" className="lg:grid-cols-2 md:grid-cols-1">
            <FormTextField
              name="linkedin"
              label="LinkedIn"
              placeholder="your-linkedin-username"
              icon={<Linkedin className="h-4 w-4" />}
            />
            
            <FormTextField
              name="twitter"
              label="Twitter/X"
              placeholder="your-handle"
              icon={<Twitter className="h-4 w-4" />}
            />
          </GridWrapper>
        </div>

        {/* Social Media & Creative Platforms */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground">Social & Creative</h4>
          <GridWrapper cols={2} gap="md" className="lg:grid-cols-2 md:grid-cols-1">
            <FormTextField
              name="instagram"
              label="Instagram"
              placeholder="your-username"
              icon={<Instagram className="h-4 w-4" />}
            />
            
            <FormTextField
              name="youtube"
              label="YouTube"
              placeholder="channel-name"
              icon={<MessageCircle className="h-4 w-4" />}
            />
            
            <FormTextField
              name="dribbble"
              label="Dribbble"
              placeholder="your-username"
              icon={<Globe className="h-4 w-4" />}
            />
            
            <FormTextField
              name="codepen"
              label="CodePen"
              placeholder="your-username"
              icon={<Globe className="h-4 w-4" />}
            />
          </GridWrapper>
        </div>

        {/* Developer Platforms */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground">Developer Communities</h4>
          <GridWrapper cols={2} gap="md" className="lg:grid-cols-2 md:grid-cols-1">
            <FormTextField
              name="stackoverflow"
              label="Stack Overflow"
              placeholder="user-id"
              icon={<Globe className="h-4 w-4" />}
            />
            
            <FormTextField
              name="dev"
              label="DEV Community"
              placeholder="your-username"
              icon={<Globe className="h-4 w-4" />}
            />
            
            <FormTextField
              name="medium"
              label="Medium"
              placeholder="@your-username"
              icon={<Globe className="h-4 w-4" />}
            />
          </GridWrapper>
        </div>

        {/* Support Platforms */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-foreground">Support & Donations</h4>
          <GridWrapper cols={2} gap="md" className="lg:grid-cols-2 md:grid-cols-1">
            <FormTextField
              name="buymeacoffee"
              label="Buy Me a Coffee"
              placeholder="your-username"
              icon={<Coffee className="h-4 w-4" />}
            />
            
            <FormTextField
              name="kofi"
              label="Ko-fi"
              placeholder="your-username"
              icon={<Coffee className="h-4 w-4" />}
            />
          </GridWrapper>
        </div>
      </div>
    </CollapsibleFormSection>
  );
};

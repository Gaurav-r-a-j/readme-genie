import { GridWrapper } from '@/components/common';
import {
  CollapsibleFormSection,
  FormTextAreaField,
  FormTextField,
} from '@/components/forms/common';
import { FormSectionProps } from '@/types/readme-form';
import {
  Briefcase,
  FileText,
  Globe,
  GraduationCap,
  MapPin,
  User,
  Zap,
} from 'lucide-react';
import React from 'react';

export const BasicInfoSection: React.FC<FormSectionProps> = ({
  isExpanded,
  onToggle,
}) => {
  return (
    <CollapsibleFormSection
      title="Basic Information"
      icon={<User className="h-5 w-5 text-primary" />}
      isExpanded={isExpanded}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        {/* Primary Info */}
        <GridWrapper cols={1} gap="md">
          <FormTextField
            name="name"
            label="Full Name"
            placeholder="Enter your full name"
            icon={<User className="h-4 w-4" />}
            required
          />

          <FormTextField
            name="title"
            label="Professional Title"
            placeholder="e.g., Full-Stack Developer, Data Scientist"
            icon={<Briefcase className="h-4 w-4" />}
            required
          />
        </GridWrapper>

        {/* About Section */}
        <FormTextAreaField
          name="about"
          label="About Me"
          placeholder="Write a brief description about yourself, your interests, and what you do..."
          icon={<FileText className="h-4 w-4" />}
          rows={4}
          required
        />

        {/* Additional Info */}
        <GridWrapper
          cols={2}
          gap="md"
          className="lg:grid-cols-2 md:grid-cols-1"
        >
          <FormTextField
            name="location"
            label="Location"
            placeholder="e.g., San Francisco, CA"
            icon={<MapPin className="h-4 w-4" />}
          />

          <FormTextField
            name="portfolio"
            label="Portfolio Website"
            placeholder="https://yourportfolio.com"
            icon={<Globe className="h-4 w-4" />}
            type="url"
          />
        </GridWrapper>

        <GridWrapper cols={1} gap="md">
          <FormTextField
            name="currentWork"
            label="Current Work"
            placeholder="What are you currently working on?"
            icon={<Briefcase className="h-4 w-4" />}
          />

          <FormTextField
            name="education"
            label="Education"
            placeholder="Your educational background"
            icon={<GraduationCap className="h-4 w-4" />}
          />

          <FormTextField
            name="funFact"
            label="Fun Fact"
            placeholder="Share something interesting about yourself"
            icon={<Zap className="h-4 w-4" />}
          />
        </GridWrapper>
      </div>
    </CollapsibleFormSection>
  );
};

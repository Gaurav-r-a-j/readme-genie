import { z } from 'zod';

// Zod validation schemas
export const basicInfoSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name is too long'),
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  about: z
    .string()
    .min(10, 'About section should be at least 10 characters')
    .max(500, 'About section is too long'),
  location: z.string().default(''),
  portfolio: z
    .string()
    .url('Please enter a valid URL')
    .or(z.literal(''))
    .default(''),
  currentWork: z.string().default(''),
  education: z.string().default(''),
  funFact: z.string().default(''),
});

export const skillsSchema = z.object({
  skills: z
    .array(z.string())
    .min(1, 'Please select at least one skill')
    .max(20, 'Maximum 20 skills allowed'),
});

export const socialsSchema = z.object({
  github: z.string().min(1, 'GitHub username is required'),
  twitter: z.string().default(''),
  linkedin: z.string().default(''),
  email: z
    .string()
    .email('Please enter a valid email')
    .or(z.literal(''))
    .default(''),
  instagram: z.string().default(''),
  facebook: z.string().default(''),
  codepen: z.string().default(''),
  dribbble: z.string().default(''),
  stackoverflow: z.string().default(''),
  youtube: z.string().default(''),
  dev: z.string().default(''),
  medium: z.string().default(''),
  buymeacoffee: z.string().default(''),
  kofi: z.string().default(''),
});

export const appearanceSchema = z.object({
  darkMode: z.boolean().default(false),
  bannerColor: z
    .string()
    .regex(/^#[0-9A-F]{6}$/i, 'Please enter a valid hex color')
    .default('#0891b2'),
  layoutStyle: z.enum(['standard', 'compact', 'creative']).default('standard'),
  templateStyle: z
    .enum(['classic', 'modern', 'minimal', 'creative', 'professional'])
    .default('classic'),
});

export const addonsSchema = z.object({
  showStats: z.boolean().default(true),
  showVisitors: z.boolean().default(true),
  showTrophies: z.boolean().default(false),
  showStreak: z.boolean().default(false),
});

// Combined form schema
export const readmeFormSchema = z.object({
  ...basicInfoSchema.shape,
  ...skillsSchema.shape,
  ...socialsSchema.shape,
  ...appearanceSchema.shape,
  ...addonsSchema.shape,
});

// TypeScript types derived from schemas
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
export type SkillsFormData = z.infer<typeof skillsSchema>;
export type SocialsFormData = z.infer<typeof socialsSchema>;
export type AppearanceFormData = z.infer<typeof appearanceSchema>;
export type AddonsFormData = z.infer<typeof addonsSchema>;
export type ReadmeFormData = z.infer<typeof readmeFormSchema>;

// Section state type
export type SectionState = {
  basic: boolean;
  skills: boolean;
  socials: boolean;
  appearance: boolean;
  addons: boolean;
};

// Form section props base type
export interface FormSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

// Legacy type compatibility (for gradual migration)
export type FormDataType = ReadmeFormData;

// Form data type definitions
export type FormDataType = {
  name: string;
  title: string;
  about: string;
  location: string;
  portfolio: string;
  currentWork: string;
  skills: string[];
  education: string;
  funFact: string;
  github: string;
  twitter: string;
  linkedin: string;
  email: string;
  instagram?: string;
  facebook?: string;
  codepen?: string;
  dribbble?: string;
  stackoverflow?: string;
  youtube?: string;
  dev?: string;
  medium?: string;
  buymeacoffee?: string;
  kofi?: string;
  showStats: boolean;
  showVisitors: boolean;
  showTrophies?: boolean;
  showStreak?: boolean;
  darkMode: boolean;
  bannerColor: string;
  layoutStyle: 'standard' | 'compact' | 'creative';
};

export type BasicInfoData = Pick<
  FormDataType,
  | 'name'
  | 'title'
  | 'about'
  | 'location'
  | 'portfolio'
  | 'currentWork'
  | 'education'
  | 'funFact'
>;

export type SocialData = Pick<
  FormDataType,
  | 'github'
  | 'twitter'
  | 'linkedin'
  | 'email'
  | 'instagram'
  | 'facebook'
  | 'codepen'
  | 'dribbble'
  | 'stackoverflow'
  | 'youtube'
  | 'dev'
  | 'medium'
  | 'buymeacoffee'
  | 'kofi'
>;

export type AppearanceData = Pick<
  FormDataType,
  'darkMode' | 'bannerColor' | 'layoutStyle'
>;

export type AddonsData = Pick<
  FormDataType,
  | 'showStats'
  | 'showVisitors'
  | 'showTrophies'
  | 'showStreak'
  | 'buymeacoffee'
  | 'kofi'
>;

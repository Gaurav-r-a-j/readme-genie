import { ReadmeFormData } from '@/types/readme-form';

export const sampleReadmeData: ReadmeFormData = {
  // Basic Info
  name: 'Gaurav Raj',
  title: 'A passionate full stack developer from India',
  about:
    "👨‍💻 I'm a passionate developer who loves creating innovative solutions and learning new technologies. Currently working on exciting projects and always ready for new challenges!",
  location: 'India',
  portfolio: 'https://gaurav-raj.theportfolyo.com/',
  currentWork:
    '👨‍💻 All of my projects are available at https://gaurav-raj.theportfolyo.com/',
  education: '',
  funFact: '⚡ Fun fact: I love coding and exploring new technologies!',

  // Skills
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'Python',
    'Bootstrap',
    'Tailwind CSS',
    'Git',
    'Firebase',
    'Heroku',
    'Postman',
  ],

  // Social Links
  github: 'gaurav-r-a-j',
  twitter: '',
  linkedin: 'gaurav2raj',
  email: 'gauravraj858204@gmail.com',
  instagram: 'gaurav_r_a_j',
  facebook: '',
  codepen: '',
  dribbble: '',
  stackoverflow: '',
  youtube: '',
  dev: '',
  medium: '',
  buymeacoffee: '',
  kofi: '',

  // Appearance
  darkMode: false,
  bannerColor: '#0891b2',
  layoutStyle: 'creative' as const,
  templateStyle: 'modern' as const,

  // Add-ons
  showStats: true,
  showVisitors: true,
  showTrophies: true,
  showStreak: true,
};

export const alternativeSampleData: ReadmeFormData = {
  // Basic Info
  name: 'John Doe',
  title: 'Creative Frontend Developer & UI/UX Enthusiast',
  about:
    "🎨 I'm a creative frontend developer with a passion for beautiful user interfaces and smooth user experiences. I love turning ideas into interactive digital experiences.",
  location: 'San Francisco, CA',
  portfolio: 'https://johndoe.dev',
  currentWork: "🔭 I'm currently working on a revolutionary web application",
  education: '🎓 I studied Computer Science at Stanford University',
  funFact: "⚡ Fun fact: I can solve a Rubik's cube in under 2 minutes!",

  // Skills
  skills: [
    'React',
    'Vue.js',
    'Angular',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Sass',
    'Figma',
    'Adobe XD',
    'Node.js',
    'GraphQL',
    'Docker',
    'AWS',
    'Jest',
  ],

  // Social Links
  github: 'johndoe',
  twitter: 'johndoe_dev',
  linkedin: 'john-doe-dev',
  email: 'john@johndoe.dev',
  instagram: 'johndoe_creates',
  facebook: '',
  codepen: 'johndoe',
  dribbble: 'johndoe',
  stackoverflow: 'johndoe',
  youtube: '',
  dev: 'johndoe',
  medium: '@johndoe',
  buymeacoffee: 'johndoe',
  kofi: '',

  // Appearance
  darkMode: true,
  bannerColor: '#8b5cf6',
  layoutStyle: 'standard' as const,
  templateStyle: 'creative' as const,

  // Add-ons
  showStats: true,
  showVisitors: false,
  showTrophies: false,
  showStreak: true,
};

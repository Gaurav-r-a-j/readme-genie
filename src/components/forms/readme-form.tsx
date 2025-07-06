import SkillSelector from '@/components/custom/skill-selector';
import SocialSelector from '@/components/custom/social-selector';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Award,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Code,
  Coffee,
  FileText,
  Globe,
  GraduationCap,
  LayoutDashboard,
  MapPin,
  Palette,
  User,
  Users,
  Zap,
} from 'lucide-react';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

type ReadmeFormProps = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

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

const ReadmeForm: React.FC<ReadmeFormProps> = ({ formData, setFormData }) => {
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    skills: true,
    socials: true,
    appearance: true,
    addons: true,
  });

  // Show a live example of the layout style
  const layoutPreviewExamples = {
    standard:
      '# Standard Layout\n## Professional & Clear\n- Structured sections\n- Clean typography\n- Professional appearance',
    compact:
      '# Compact Layout 🚀\nOptimized for quick scanning with condensed sections and minimal whitespace.',
    creative:
      "<div align='center'><h1>✨ Creative Layout ✨</h1><p>Eye-catching design with centered content and decorative elements</p></div>",
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const updateSkills = (skills: string[]) => {
    setFormData(prev => ({ ...prev, skills }));
  };

  const updateSocial = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Basic Information Section */}
      <Card>
        <CardHeader
          className="pb-3 flex flex-row items-center justify-between space-y-0 cursor-pointer"
          onClick={() => toggleSection('basic')}
        >
          <CardTitle className="text-xl flex items-center gap-2">
            <User className="h-5 w-5 text-blue-500" />
            Basic Information
          </CardTitle>
          {expandedSections.basic ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </CardHeader>

        {expandedSections.basic && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  Professional Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Full Stack Developer"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                About You
              </label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="I'm a passionate developer who loves to build..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="San Francisco, CA"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  Portfolio Website
                </label>
                <input
                  type="text"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://johndoe.com"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  Current Work
                </label>
                <input
                  type="text"
                  name="currentWork"
                  value={formData.currentWork}
                  onChange={handleChange}
                  placeholder="Working on XYZ Project at ABC Company"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  Education
                </label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="BS in Computer Science, University Name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                <Zap className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                Fun Fact
              </label>
              <input
                type="text"
                name="funFact"
                value={formData.funFact}
                onChange={handleChange}
                placeholder="I can solve a Rubik's cube in under a minute!"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
          </CardContent>
        )}
      </Card>

      {/* Skills Section */}
      <Card>
        <CardHeader
          className="pb-3 flex flex-row items-center justify-between space-y-0 cursor-pointer"
          onClick={() => toggleSection('skills')}
        >
          <CardTitle className="text-xl flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-500" />
            Skills & Technologies
          </CardTitle>
          {expandedSections.skills ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </CardHeader>

        {expandedSections.skills && (
          <CardContent>
            <SkillSelector
              selectedSkills={formData.skills}
              setSelectedSkills={updateSkills}
            />
          </CardContent>
        )}
      </Card>

      {/* Social Links Section */}
      <Card>
        <CardHeader
          className="pb-3 flex flex-row items-center justify-between space-y-0 cursor-pointer"
          onClick={() => toggleSection('socials')}
        >
          <CardTitle className="text-xl flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-500" />
            Social Links
          </CardTitle>
          {expandedSections.socials ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </CardHeader>

        {expandedSections.socials && (
          <CardContent>
            <SocialSelector socialData={formData} updateSocial={updateSocial} />
          </CardContent>
        )}
      </Card>

      {/* Add-ons Section */}
      <Card>
        <CardHeader
          className="pb-3 flex flex-row items-center justify-between space-y-0 cursor-pointer"
          onClick={() => toggleSection('addons')}
        >
          <CardTitle className="text-xl flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-500" />
            GitHub Add-ons
          </CardTitle>
          {expandedSections.addons ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </CardHeader>

        {expandedSections.addons && (
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Award className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Show GitHub Stats
                      </span>
                    </label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Display your GitHub statistics</p>
                  </TooltipContent>
                </Tooltip>
                <Switch
                  checked={formData.showStats}
                  onCheckedChange={checked =>
                    handleSwitchChange('showStats', checked)
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Show Profile Visitors
                      </span>
                    </label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Display a visitor counter on your profile</p>
                  </TooltipContent>
                </Tooltip>
                <Switch
                  checked={formData.showVisitors}
                  onCheckedChange={checked =>
                    handleSwitchChange('showVisitors', checked)
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Award className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Show GitHub Trophies
                      </span>
                    </label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Display GitHub achievement trophies</p>
                  </TooltipContent>
                </Tooltip>
                <Switch
                  checked={formData.showTrophies || false}
                  onCheckedChange={checked =>
                    handleSwitchChange('showTrophies', checked)
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Zap className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Show GitHub Streak
                      </span>
                    </label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Display your GitHub contribution streak</p>
                  </TooltipContent>
                </Tooltip>
                <Switch
                  checked={formData.showStreak || false}
                  onCheckedChange={checked =>
                    handleSwitchChange('showStreak', checked)
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Coffee className="h-4 w-4 text-amber-500 fill-amber-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Add Support Buttons
                      </span>
                    </label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Add &quot;Buy Me A Coffee&quot; or &quot;Ko-fi&quot;
                      support buttons to your profile
                    </p>
                  </TooltipContent>
                </Tooltip>
                <Switch
                  checked={!!formData.buymeacoffee || !!formData.kofi}
                  onCheckedChange={checked => {
                    if (checked) {
                      setFormData(prev => ({
                        ...prev,
                        buymeacoffee: prev.buymeacoffee || 'yourusername',
                      }));
                    } else {
                      setFormData(prev => ({
                        ...prev,
                        buymeacoffee: '',
                        kofi: '',
                      }));
                    }
                  }}
                />
              </div>
            </div>

            {(!!formData.buymeacoffee || !!formData.kofi) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                    <Coffee className="h-4 w-4 mr-2 text-amber-500 fill-amber-500" />
                    Buy Me A Coffee Username
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-2 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md">
                      buymeacoffee.com/
                    </span>
                    <input
                      type="text"
                      name="buymeacoffee"
                      value={formData.buymeacoffee || ''}
                      onChange={handleChange}
                      placeholder="yourusername"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                    <Coffee className="h-4 w-4 mr-2 text-blue-500 fill-blue-500" />
                    Ko-fi Username
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-2 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md">
                      ko-fi.com/
                    </span>
                    <input
                      type="text"
                      name="kofi"
                      value={formData.kofi || ''}
                      onChange={handleChange}
                      placeholder="yourusername"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* Appearance Section */}
      <Card>
        <CardHeader
          className="pb-3 flex flex-row items-center justify-between space-y-0 cursor-pointer"
          onClick={() => toggleSection('appearance')}
        >
          <CardTitle className="text-xl flex items-center gap-2">
            <Palette className="h-5 w-5 text-blue-500" />
            Appearance & Options
          </CardTitle>
          {expandedSections.appearance ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </CardHeader>

        {expandedSections.appearance && (
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Layout Style
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex flex-col gap-2">
                  <Button
                    type="button"
                    variant={
                      formData.layoutStyle === 'standard'
                        ? 'default'
                        : 'outline'
                    }
                    className={`flex items-center justify-center gap-2 h-auto py-3 ${formData.layoutStyle === 'standard' ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    onClick={() =>
                      setFormData(prev => ({
                        ...prev,
                        layoutStyle: 'standard',
                      }))
                    }
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Standard</span>
                  </Button>
                  {formData.layoutStyle === 'standard' && (
                    <div className="text-xs text-gray-600 dark:text-gray-400 text-center">
                      Professional layout with clear sections
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    type="button"
                    variant={
                      formData.layoutStyle === 'compact' ? 'default' : 'outline'
                    }
                    className={`flex items-center justify-center gap-2 h-auto py-3 ${formData.layoutStyle === 'compact' ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    onClick={() =>
                      setFormData(prev => ({ ...prev, layoutStyle: 'compact' }))
                    }
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Compact</span>
                  </Button>
                  {formData.layoutStyle === 'compact' && (
                    <div className="text-xs text-gray-600 dark:text-gray-400 text-center">
                      Space-efficient layout for quick scanning
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    type="button"
                    variant={
                      formData.layoutStyle === 'creative'
                        ? 'default'
                        : 'outline'
                    }
                    className={`flex items-center justify-center gap-2 h-auto py-3 ${formData.layoutStyle === 'creative' ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    onClick={() =>
                      setFormData(prev => ({
                        ...prev,
                        layoutStyle: 'creative',
                      }))
                    }
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Creative</span>
                  </Button>
                  {formData.layoutStyle === 'creative' && (
                    <div className="text-xs text-gray-600 dark:text-gray-400 text-center">
                      Eye-catching design with animations & styling
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 mt-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
                <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Layout Preview:
                </h4>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {layoutPreviewExamples[formData.layoutStyle]}
                  </ReactMarkdown>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Banner Color
              </label>
              <input
                type="color"
                name="bannerColor"
                value={formData.bannerColor}
                onChange={handleChange}
                className="h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 cursor-pointer"
              />
              <div className="mt-2 grid grid-cols-6 gap-2">
                {[
                  '#0366d6',
                  '#2ea043',
                  '#f97316',
                  '#8b5cf6',
                  '#ec4899',
                  '#ef4444',
                ].map(color => (
                  <button
                    key={color}
                    onClick={() =>
                      setFormData(prev => ({ ...prev, bannerColor: color }))
                    }
                    className="w-full h-6 rounded-md border border-gray-300 dark:border-gray-600 cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${color}`}
                  ></button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Tooltip>
                <TooltipTrigger asChild>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Palette className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Dark Mode Theme
                    </span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Use dark theme for GitHub stats</p>
                </TooltipContent>
              </Tooltip>
              <Switch
                checked={formData.darkMode}
                onCheckedChange={checked =>
                  handleSwitchChange('darkMode', checked)
                }
              />
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ReadmeForm;

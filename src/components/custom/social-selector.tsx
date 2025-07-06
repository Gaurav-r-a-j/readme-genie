import { FormDataType } from '@/components/forms/readme-form';
import { Card, CardContent } from '@/components/ui/card';
import {
  BadgeCheck,
  BarChart3,
  Dribbble,
  Facebook,
  FileCode2,
  Flame,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from 'lucide-react';
import React from 'react';

interface SocialSelectorProps {
  socialData: FormDataType;
  updateSocial: (name: string, value: string) => void;
}

interface SocialOption {
  name: string;
  label: string;
  placeholder: string;
  icon: React.ReactNode;
}

const SocialSelector: React.FC<SocialSelectorProps> = ({
  socialData,
  updateSocial,
}) => {
  const socialOptions: SocialOption[] = [
    {
      name: 'github',
      label: 'GitHub',
      placeholder: 'username',
      icon: (
        <Github className="h-5 w-5 text-gray-800 dark:text-gray-200 fill-current" />
      ),
    },
    {
      name: 'twitter',
      label: 'Twitter',
      placeholder: 'username',
      icon: <Twitter className="h-5 w-5 text-[#1DA1F2] fill-[#1DA1F2]" />,
    },
    {
      name: 'linkedin',
      label: 'LinkedIn',
      placeholder: 'username',
      icon: <Linkedin className="h-5 w-5 text-[#0A66C2] fill-[#0A66C2]" />,
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'email@example.com',
      icon: (
        <Mail className="h-5 w-5 text-gray-800 dark:text-gray-200 fill-current" />
      ),
    },
    {
      name: 'instagram',
      label: 'Instagram',
      placeholder: 'username',
      icon: <Instagram className="h-5 w-5 text-[#E4405F] fill-[#E4405F]" />,
    },
    {
      name: 'facebook',
      label: 'Facebook',
      placeholder: 'username',
      icon: <Facebook className="h-5 w-5 text-[#1877F2] fill-[#1877F2]" />,
    },
    {
      name: 'codepen',
      label: 'CodePen',
      placeholder: 'username',
      icon: (
        <FileCode2 className="h-5 w-5 text-gray-800 dark:text-gray-200 fill-current" />
      ),
    },
    {
      name: 'dribbble',
      label: 'Dribbble',
      placeholder: 'username',
      icon: <Dribbble className="h-5 w-5 text-[#EA4C89] fill-[#EA4C89]" />,
    },
    {
      name: 'stackoverflow',
      label: 'Stack Overflow',
      placeholder: 'user ID',
      icon: <BarChart3 className="h-5 w-5 text-[#F48024] fill-[#F48024]" />,
    },
    {
      name: 'youtube',
      label: 'YouTube',
      placeholder: 'channel name',
      icon: <Youtube className="h-5 w-5 text-[#FF0000] fill-[#FF0000]" />,
    },
    {
      name: 'dev',
      label: 'Dev.to',
      placeholder: 'username',
      icon: (
        <BadgeCheck className="h-5 w-5 text-gray-800 dark:text-gray-200 fill-current" />
      ),
    },
    {
      name: 'medium',
      label: 'Medium',
      placeholder: 'username',
      icon: (
        <Flame className="h-5 w-5 text-gray-800 dark:text-gray-200 fill-current" />
      ),
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateSocial(name, value);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Add your social media profiles. Leave blank any you don&apos;t want to
        include.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socialOptions.map(option => (
          <div key={option.name} className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {option.icon}
            </div>
            <input
              type="text"
              name={option.name}
              value={
                ((socialData as Record<string, unknown>)[
                  option.name
                ] as string) || ''
              }
              onChange={handleChange}
              placeholder={option.placeholder}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-200 group-hover:border-blue-400 dark:group-hover:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-blue-500">{option.label}</span>
            </div>
          </div>
        ))}
      </div>

      <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
            <Heart className="h-5 w-5 fill-blue-400" />
            <h4 className="font-medium">Support Options</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Enable support buttons in the Add-ons section to add &quot;Buy Me a
            Coffee&quot; links to your profile.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialSelector;

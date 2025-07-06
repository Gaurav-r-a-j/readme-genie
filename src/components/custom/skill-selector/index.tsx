import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { categories, skillsData } from '@/constans/skills';
import { Search, X } from 'lucide-react';
import React, { useState } from 'react';

interface SkillSelectorProps {
  selectedSkills: string[];
  setSelectedSkills: (skills: string[]) => void;
}

const SkillSelector: React.FC<SkillSelectorProps> = ({
  selectedSkills,
  setSelectedSkills,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'category'>('category');

  const filteredSkills = skillsData.filter(skill => {
    const matchesSearch =
      searchTerm === '' ||
      skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === null || skill.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Group skills by category
  const skillsByCategory = categories.reduce(
    (acc, category) => {
      const matchingSkills =
        searchTerm === ''
          ? skillsData.filter(skill => skill.category === category)
          : skillsData.filter(
              skill =>
                skill.category === category &&
                skill.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

      if (matchingSkills.length > 0) {
        acc[category] = matchingSkills;
      }

      return acc;
    },
    {} as Record<string, typeof skillsData>
  );

  const toggleSkill = (skillName: string) => {
    if (selectedSkills.includes(skillName)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skillName));
    } else {
      setSelectedSkills([...selectedSkills, skillName]);
    }
  };

  const removeSkill = (skillName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedSkills(selectedSkills.filter(s => s !== skillName));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-2.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(null)}
              className="text-xs"
            >
              All
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="text-xs"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="text-xs"
            >
              Grid
            </Button>
            <Button
              variant={viewMode === 'category' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('category')}
              className="text-xs"
            >
              By Category
            </Button>
          </div>
        </div>
      </div>

      {selectedSkills.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Selected Skills ({selectedSkills.length}):
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map(skillName => {
              const skill = skillsData.find(s => s.name === skillName);
              return (
                <div
                  key={skillName}
                  className="group flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-xs font-medium text-blue-800 dark:text-blue-200"
                >
                  {skill && (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="h-4 w-4 object-contain"
                    />
                  )}
                  {skillName}
                  <button
                    onClick={e => removeSkill(skillName, e)}
                    className="ml-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          <TooltipProvider>
            {filteredSkills.map(skill => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <Card
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      selectedSkills.includes(skill.name)
                        ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/50 dark:ring-blue-400/50'
                        : 'hover:border-gray-400 dark:hover:border-gray-500'
                    }`}
                    onClick={() => toggleSkill(skill.name)}
                  >
                    <CardContent className="p-3 flex flex-col items-center justify-center gap-2">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="h-8 w-8 object-contain"
                      />
                      <span className="text-xs font-medium text-center">
                        {skill.name}
                      </span>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Click to{' '}
                    {selectedSkills.includes(skill.name) ? 'remove' : 'add'}{' '}
                    {skill.name}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                <TooltipProvider>
                  {skills.map(skill => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <Card
                          className={`cursor-pointer transition-all hover:scale-105 ${
                            selectedSkills.includes(skill.name)
                              ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/50 dark:ring-blue-400/50'
                              : 'hover:border-gray-400 dark:hover:border-gray-500'
                          }`}
                          onClick={() => toggleSkill(skill.name)}
                        >
                          <CardContent className="p-3 flex flex-row items-center gap-2">
                            <img
                              src={skill.image}
                              alt={skill.name}
                              className="h-6 w-6 object-contain"
                            />
                            <span className="text-xs font-medium">
                              {skill.name}
                            </span>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Click to{' '}
                          {selectedSkills.includes(skill.name)
                            ? 'remove'
                            : 'add'}{' '}
                          {skill.name}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillSelector;

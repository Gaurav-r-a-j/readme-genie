import { SectionWrapper } from '@/components/common/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Lightbulb, Sparkles } from 'lucide-react';
import React from 'react';

const InstructionsSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      text: 'Copy the generated markdown from the preview panel',
    },
    {
      number: 2,
      text: 'Create a repository named exactly like your GitHub username',
    },
    {
      number: 3,
      text: (
        <>
          Add a{' '}
          <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
            README.md
          </code>{' '}
          file to the repository root
        </>
      ),
    },
    {
      number: 4,
      text: 'Paste your markdown and commit the changes',
    },
  ];

  const proTips = [
    'Keep content fresh with regular updates',
    'Use high-quality project screenshots',
    'Include contact information',
    'Showcase your best work prominently',
  ];

  return (
    <SectionWrapper className="mt-12">
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 shadow-lg  overflow-hidden">
        <CardHeader className="bg-primary/10 border-b border-primary/20 px-8 py-6">
          <CardTitle className="text-3xl font-bold text-primary flex items-center justify-center md:justify-start">
            <Github className="h-7 w-7 mr-3" />
            How to Deploy Your README
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center md:text-left">
                Step-by-Step Guide
              </h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start p-5 bg-background border border-border hover:shadow-md transition-all duration-200 hover:border-primary/30"
                  >
                    <Badge
                      variant="secondary"
                      className="rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-5 mt-0.5 flex-shrink-0 bg-primary text-primary-foreground shadow-sm"
                    >
                      {step.number}
                    </Badge>
                    <div className="flex-1 pt-1">
                      <span className="text-foreground text-base leading-relaxed">
                        {step.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center md:text-left">
                Expert Advice
              </h3>
              <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-amber-200 dark:border-amber-800 shadow-md  flex-1">
                <CardHeader className="pb-4 bg-amber-50 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-800 px-6 py-5">
                  <CardTitle className="font-bold text-amber-800 dark:text-amber-300 flex items-center justify-center md:justify-start text-lg">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Pro Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="text-sm text-amber-700 dark:text-amber-200 space-y-4">
                    {proTips.map((tip, index) => (
                      <li
                        key={index}
                        className="flex items-start p-3 hover:bg-amber-100 dark:hover:bg-amber-900/50  transition-colors duration-200"
                      >
                        <Lightbulb className="h-4 w-4 mr-3 mt-0.5 text-amber-500 flex-shrink-0" />
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
};

export default InstructionsSection;

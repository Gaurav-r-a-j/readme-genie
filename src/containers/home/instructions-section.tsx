import { SectionWrapper } from '@/components/common/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Github, Lightbulb, Sparkles } from 'lucide-react';
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
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-primary/10 border-b border-primary/20">
          <CardTitle className="text-2xl font-bold text-primary flex items-center">
            <Github className="h-6 w-6 mr-3" />
            How to Deploy Your README
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
                  >
                    <Badge
                      variant="secondary"
                      className="rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0 bg-primary text-primary-foreground"
                    >
                      {step.number}
                    </Badge>
                    <span className="text-foreground text-lg">{step.text}</span>
                  </div>
                ))}
                <div className="flex items-start p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0 bg-green-100 text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-green-600 text-lg">
                    Your profile README is now live!
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-amber-200 dark:border-amber-800 shadow-md">
                <CardHeader className="pb-3 bg-amber-50 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-800">
                  <CardTitle className="font-bold text-amber-800 dark:text-amber-300 flex items-center text-lg">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Pro Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="text-sm text-amber-700 dark:text-amber-200 space-y-3">
                    {proTips.map((tip, index) => (
                      <li
                        key={index}
                        className="flex items-start p-2 hover:bg-amber-100 dark:hover:bg-amber-900/50 rounded transition-colors"
                      >
                        <Lightbulb className="h-4 w-4 mr-2 mt-1 text-amber-500 flex-shrink-0" />
                        <span>{tip}</span>
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

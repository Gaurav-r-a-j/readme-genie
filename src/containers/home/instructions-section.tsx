import { SectionWrapper } from '@/components/common/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Sparkles } from 'lucide-react';
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
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary flex items-center">
            <Github className="h-6 w-6 mr-3" />
            How to Deploy Your README
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ol className="space-y-4">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <Badge
                      variant="secondary"
                      className="rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0"
                    >
                      {step.number}
                    </Badge>
                    <span className="text-foreground">{step.text}</span>
                  </li>
                ))}
                <li className="flex items-start">
                  <Badge
                    variant="default"
                    className="rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0 bg-green-600 hover:bg-green-700"
                  >
                    ✓
                  </Badge>
                  <span className="font-semibold text-green-600">
                    Your profile README is now live!
                  </span>
                </li>
              </ol>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-amber-200 dark:border-amber-800">
                <CardHeader className="pb-3">
                  <CardTitle className="font-bold text-amber-800 dark:text-amber-300 flex items-center text-lg">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Pro Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-amber-700 dark:text-amber-200 space-y-2">
                    {proTips.map((tip, index) => (
                      <li key={index}>• {tip}</li>
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

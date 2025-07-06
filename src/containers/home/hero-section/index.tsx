import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  Code2,
  FileText,
  Github,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import React from 'react';

const HeroSection: React.FC = () => {
  const featureBadges = [
    {
      icon: <Code2 className="h-4 w-4" />,
      text: 'AI-Powered',
      variant: 'default' as const,
    },
    {
      icon: <Github className="h-4 w-4" />,
      text: 'GitHub Ready',
      variant: 'secondary' as const,
    },
    {
      icon: <Sparkles className="h-4 w-4" />,
      text: 'Professional',
      variant: 'outline' as const,
    },
    {
      icon: <Zap className="h-4 w-4" />,
      text: 'Instant',
      variant: 'destructive' as const,
    },
  ];

  const stats = [
    {
      icon: <Users className="h-5 w-5" />,
      value: '10K+',
      label: 'Developers',
    },
    {
      icon: <FileText className="h-5 w-5" />,
      value: '50K+',
      label: 'READMEs Created',
    },
    {
      icon: <Star className="h-5 w-5" />,
      value: '4.9',
      label: 'Rating',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-primary">README</span>
              <br />
              <span className="text-foreground">Genie</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Craft stunning GitHub profiles that tell your story. Generate
              professional, eye-catching README profiles in seconds with our
              AI-powered generator.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {featureBadges.map((badge, index) => (
              <Badge
                key={index}
                variant={badge.variant}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium"
              >
                {badge.icon}
                {badge.text}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8">
              <Sparkles className="mr-2 h-5 w-5" />
              Create Your README
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8">
              <Github className="mr-2 h-5 w-5" />
              View Examples
            </Button>
          </div>

          {/* Stats Section */}
          <div className="pt-12">
            <Separator className="mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-border/50 bg-card/50">
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-primary">
                      {stat.icon}
                      <span className="text-3xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
            <div className="w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

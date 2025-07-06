import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  Code2,
  FileText,
  Github,
  Rocket,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import React from 'react';

const HeroSection: React.FC = () => {
  const featureBadges = useMemo(
    () => [
      {
        icon: <Code2 className="h-3.5 w-3.5 mr-1.5" />,
        text: 'AI-Powered',
        variant: 'default' as const,
      },
      {
        icon: <Github className="h-3.5 w-3.5 mr-1.5" />,
        text: 'GitHub Ready',
        variant: 'secondary' as const,
      },
      {
        icon: <Sparkles className="h-3.5 w-3.5 mr-1.5" />,
        text: 'Professional',
        variant: 'outline' as const,
      },
      {
        icon: <Zap className="h-3.5 w-3.5 mr-1.5" />,
        text: 'Instant',
        variant: 'destructive' as const,
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      {
        icon: <Users className="h-4 w-4" />,
        value: '10K+',
        label: 'Developers',
      },
      {
        icon: <FileText className="h-4 w-4" />,
        value: '50K+',
        label: 'READMEs Created',
      },
      {
        icon: <Star className="h-4 w-4" />,
        value: '4.9',
        label: 'Rating',
      },
    ],
    []
  );

  return (
    <motion.section
      className="relative text-center py-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 opacity-50" />

      {/* Background decorative elements */}
      <motion.div
        className="absolute -top-20 left-1/2 transform -translate-x-1/2 pointer-events-none"
        variants={backgroundDecoVariants}
        initial="initial"
        animate={['animate', 'pulse']}
      >
        <Sparkles className="h-32 w-32 text-primary/20" />
      </motion.div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-10 left-1/6 pointer-events-none"
        variants={floatingIconVariants}
        initial="initial"
        animate={['animate', 'float']}
        style={{ animationDelay: '0s' }}
      >
        <Github className="h-16 w-16 text-primary/10" />
      </motion.div>

      <motion.div
        className="absolute top-20 right-1/6 pointer-events-none"
        variants={floatingIconVariants}
        initial="initial"
        animate={['animate', 'float']}
        style={{ animationDelay: '1s' }}
      >
        <Code2 className="h-12 w-12 text-secondary/10" />
      </motion.div>

      <motion.div
        className="absolute top-32 left-1/4 pointer-events-none"
        variants={floatingIconVariants}
        initial="initial"
        animate={['animate', 'float']}
        style={{ animationDelay: '2s' }}
      >
        <Rocket className="h-14 w-14 text-accent/10" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none"
          variants={titleVariants}
        >
          <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
            README
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Genie
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed font-medium"
          variants={subtitleVariants}
        >
          Craft stunning GitHub profiles that tell your story. Generate
          professional, eye-catching README profiles in seconds with our
          AI-powered generator.
        </motion.p>

        {/* Feature badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          variants={badgeContainerVariants}
        >
          {featureBadges.map((badge, index) => (
            <motion.div key={index} variants={badgeVariants} whileHover="hover">
              <Badge
                variant={badge.variant}
                className="inline-flex items-center px-4 py-2.5 text-sm font-semibold shadow-lg border-0 cursor-default"
              >
                {badge.icon}
                {badge.text}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={ctaVariants}
        >
          <motion.div whileHover="hover" whileTap="tap" variants={ctaVariants}>
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 border-0"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Create Your README
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div whileHover="hover" whileTap="tap" variants={ctaVariants}>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl border-2 hover:bg-accent/50"
            >
              <Github className="mr-2 h-5 w-5" />
              View Examples
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 sm:gap-12"
          variants={statsVariants}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                {stat.icon}
                <span className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </span>
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </motion.section>
  );
};
export default HeroSection;

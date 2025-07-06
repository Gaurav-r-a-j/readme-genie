import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  backgroundVariants,
  badgeVariants,
  buttonContainerVariants,
  buttonVariants,
  cardsContainerVariants,
  cardVariants,
  containerVariants,
  floatingElementVariants,
  headlineVariants,
  statItemVariants,
  statsContainerVariants,
  textContentVariants,
} from '@/variants/hero-animations';
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
import { motion } from 'motion/react';
import React from 'react';

const HeroSection: React.FC = () => {
  const features = [
    {
      icon: <Code2 className="h-5 w-5" />,
      title: 'AI-Powered',
      description: 'Smart content generation',
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'Instant Results',
      description: 'Generate in seconds',
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: 'GitHub Ready',
      description: 'Perfect formatting',
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Professional',
      description: 'Stand out from crowd',
    },
  ];

  const stats = [
    {
      icon: <Users className="h-5 w-5" />,
      value: '10K+',
      label: 'Active Users',
    },
    {
      icon: <FileText className="h-5 w-5" />,
      value: '50K+',
      label: 'READMEs Generated',
    },
    {
      icon: <Star className="h-5 w-5" />,
      value: '4.9',
      label: 'User Rating',
    },
  ];

  return (
    <motion.section
      className="relative h-screen max-h-max flex items-center justify-center py-16  "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-[1fr,1.1fr] gap-12 lg:gap-16 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          className="space-y-8 text-center lg:text-left order-2 lg:order-1"
          variants={textContentVariants}
        >
          {/* Badge */}
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={badgeVariants}
          >
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 px-4 py-1 text-xs font-medium rounded-full"
            >
              <Sparkles className="h-4 w-4" />
              New: Enhanced AI Generation
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.div className="space-y-4" variants={headlineVariants}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Craft Your Perfect
              <br />
              <span className="bg-gradient-to-r from-primary  to-white bg-clip-text text-transparent">
                GitHub Profile
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Transform your GitHub presence with stunning README profiles. Our
              AI-powered generator creates professional, personalized profiles
              that showcase your skills and projects beautifully.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center"
            variants={buttonContainerVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size="lg"
                className="text-base px-8 py-3 h-auto font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-3 h-auto font-semibold border-2 hover:bg-accent/10"
              >
                <Github className="mr-2 h-5 w-5" />
                View Examples
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4"
            variants={statsContainerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center lg:text-left group"
                variants={statItemVariants}
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <div className="p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {stat.icon}
                  </div>
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 order-1 lg:order-2"
          variants={cardsContainerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`${index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-6'}`}
            >
              <Card className="relative group border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {feature.icon}
                      </div>
                      <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Background Effects */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        variants={backgroundVariants}
      >
        <motion.div
          className="absolute top-1/4 left-0 -translate-x-1/3"
          variants={floatingElementVariants}
        >
          <div className="w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-0 translate-x-1/3"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </motion.div>
        <motion.div
          className="absolute top-3/4 left-1/4"
          variants={floatingElementVariants}
        >
          <div className="w-48 h-48 bg-accent/6 rounded-full blur-2xl" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
export default HeroSection;

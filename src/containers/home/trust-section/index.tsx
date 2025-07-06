import { Card, CardContent } from '@/components/ui/card';
import {
  containerVariants,
  statItemVariants,
  statsContainerVariants,
  trustBadgeVariants,
  trustIndicatorsVariants,
} from '@/variants/hero-animations';
import { Code2, Github, Shield, Sparkles, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <motion.section
      className="py-16 lg:py-24 bg-gradient-to-br from-background via-background/95 to-accent/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Social Proof Header */}
      <motion.div
        className="text-center space-y-4 mb-12 lg:mb-16"
        variants={trustIndicatorsVariants}
      >
        <motion.p
          className="text-sm font-medium text-muted-foreground/80 uppercase tracking-wider"
          variants={trustBadgeVariants}
        >
          Trusted by developers worldwide
        </motion.p>
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-foreground leading-tight"
          variants={trustBadgeVariants}
        >
          Why Developers <span className="text-primary">Love</span> README Genie
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          variants={trustBadgeVariants}
        >
          Join thousands of developers who have transformed their GitHub
          presence with our powerful tools
        </motion.p>
      </motion.div>

      {/* Feature Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        variants={statsContainerVariants}
      >
        {[
          {
            icon: <Github className="h-6 w-6" />,
            title: 'GitHub Compatible',
            description:
              "Perfect markdown formatting that works flawlessly with GitHub's rendering engine",
            highlight: 'Native Support',
          },
          {
            icon: <Sparkles className="h-6 w-6" />,
            title: 'AI Enhanced',
            description:
              'Smart content generation powered by advanced AI to create compelling profiles',
            highlight: 'Smart AI',
          },
          {
            icon: <Code2 className="h-6 w-6" />,
            title: 'Developer Friendly',
            description:
              "Clean, readable code structure that's easy to customize and maintain",
            highlight: 'Clean Code',
          },
          {
            icon: <Zap className="h-6 w-6" />,
            title: 'Lightning Fast',
            description:
              'Generate professional READMEs in under 2 minutes with our streamlined process',
            highlight: '< 2 min',
          },
          {
            icon: <Shield className="h-6 w-6" />,
            title: 'Always Free',
            description:
              'No hidden costs, no premium tiers. Full access to all features forever',
            highlight: '100% Free',
          },
          {
            icon: <Users className="h-6 w-6" />,
            title: 'Community Driven',
            description:
              'Built by developers, for developers. Constantly improved based on user feedback',
            highlight: '10K+ Users',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            variants={trustBadgeVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <Card className="group h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-border/80 transition-all duration-300">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <span className="px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
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

      {/* Quick Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-border/30"
        variants={statsContainerVariants}
      >
        {[
          { label: 'Free Forever', value: '100%', suffix: '' },
          { label: 'Setup Time', value: '2', suffix: 'min' },
          { label: 'Active Users', value: '10K', suffix: '+' },
          { label: 'Templates', value: '20', suffix: '+' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center group"
            variants={statItemVariants}
          >
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
              {stat.value}
              <span className="text-lg text-muted-foreground">
                {stat.suffix}
              </span>
            </div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TrustSection;

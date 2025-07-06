import ThemeToggle from '@/components/global/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Code, Github, GithubIcon, Share2, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
            <GithubIcon className="h-8 w-8 text-primary" />
            <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-amber-500" />
          </div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            ReadMe Genie
          </h1>
        </motion.div>

        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open('https://github.com/stars', '_blank')
                }
              >
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Star this project</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }}
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share ReadMe Genie</p>
            </TooltipContent>
          </Tooltip>

          <ThemeToggle />

          <Button
            variant="default"
            size="sm"
            className="hidden md:flex"
            onClick={() =>
              window.open('https://github.com/new?filename=README.md', '_blank')
            }
          >
            <Code className="mr-2 h-4 w-4" />
            Create README
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              window.open('https://github.com/new?filename=README.md', '_blank')
            }
          >
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

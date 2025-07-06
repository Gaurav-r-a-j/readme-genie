import { Separator } from '@/components/ui/separator';
import { Github, Heart, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8 mt-10 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                ReadMe Genie
              </span>
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              Your GitHub Profile Supercharger
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-4 mb-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm flex items-center">
              Made with{' '}
              <Heart className="h-4 w-4 text-red-500 mx-1 fill-red-500" /> for
              developers
            </p>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-center text-xs text-muted-foreground">
          <p>© {currentYear} ReadMe Genie. All rights reserved.</p>
          <p className="mt-1">
            Not affiliated with GitHub. Create your README.md and add it to a
            repository named the same as your GitHub username.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

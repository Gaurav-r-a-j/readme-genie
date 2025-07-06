import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import React from 'react';

interface AdaptiveWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AdaptiveWrapper: React.FC<AdaptiveWrapperProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'lg',
}) => {
  const isMobile = useIsMobile();

  const sheetSizeClasses = {
    sm: 'w-[400px] sm:max-w-sm',
    md: 'w-[500px] sm:max-w-md',
    lg: 'w-[600px] sm:max-w-lg',
    xl: 'w-[800px] sm:max-w-xl',
  };

  if (isMobile) {
    // Use Drawer for mobile devices
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="max-h-[96vh]">
          <DrawerHeader className="space-y-3 pb-6">
            <DrawerTitle className="text-lg font-semibold">{title}</DrawerTitle>
            {description && (
              <DrawerDescription className="text-sm text-muted-foreground">
                {description}
              </DrawerDescription>
            )}
          </DrawerHeader>
          <div className="overflow-y-auto max-h-[calc(96vh-120px)] px-4 pb-6">
            {children}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  // Use Sheet for desktop
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        className={`${sheetSizeClasses[size]} max-h-screen overflow-hidden`}
        side="right"
      >
        <SheetHeader className="space-y-3 pb-6">
          <SheetTitle className="text-lg font-semibold">{title}</SheetTitle>
          {description && (
            <SheetDescription className="text-sm text-muted-foreground">
              {description}
            </SheetDescription>
          )}
        </SheetHeader>
        <div className="overflow-y-auto max-h-[calc(100vh-120px)] pr-2">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
};

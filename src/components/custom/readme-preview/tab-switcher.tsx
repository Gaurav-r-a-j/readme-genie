import { Button } from '@/components/ui/button';
import { Eye, FileText } from 'lucide-react';
import React from 'react';

interface TabSwitcherProps {
  activeTab: 'preview' | 'code';
  onTabChange: (tab: 'preview' | 'code') => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={activeTab === 'preview' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onTabChange('preview')}
      >
        <Eye className="h-4 w-4 mr-2" />
        Preview
      </Button>
      <Button
        variant={activeTab === 'code' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onTabChange('code')}
      >
        <FileText className="h-4 w-4 mr-2" />
        Code
      </Button>
    </div>
  );
};

export default TabSwitcher;

import { Button } from '@/components/ui/button';
import { Copy, Download } from 'lucide-react';
import React from 'react';

interface PreviewActionsProps {
  markdown: string;
  copied: boolean;
  onCopy: () => void;
  onDownload: () => void;
}

const PreviewActions: React.FC<PreviewActionsProps> = ({
  markdown,
  copied,
  onCopy,
  onDownload,
}) => {
  if (!markdown) return null;

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={onCopy} disabled={copied}>
        <Copy className="h-4 w-4 mr-2" />
        {copied ? 'Copied!' : 'Copy'}
      </Button>
      <Button variant="outline" size="sm" onClick={onDownload}>
        <Download className="h-4 w-4 mr-2" />
        Download
      </Button>
    </div>
  );
};

export default PreviewActions;

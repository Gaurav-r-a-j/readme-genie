import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ReadmeFormData } from '@/types/readme-form';
import { generateMarkdown } from '@/utils/markdownGenerator';
import { Eye } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import CodeView from './code-view';
import MarkdownPreview from './markdown-preview';
import PreviewActions from './preview-actions';
import TabSwitcher from './tab-switcher';

type ReadmePreviewProps = {
  formData: ReadmeFormData;
};

const ReadmePreview: React.FC<ReadmePreviewProps> = ({ formData }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [markdown, setMarkdown] = useState('');

  // Generate markdown whenever formData changes
  useEffect(() => {
    setMarkdown(generateMarkdown(formData));
  }, [formData]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            README Preview
          </CardTitle>
          <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {activeTab === 'preview' ? (
          <MarkdownPreview markdown={markdown} />
        ) : (
          <CodeView markdown={markdown} />
        )}
      </CardContent>

      {markdown && (
        <>
          <Separator />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <Badge variant="secondary" className="text-xs">
                README.md
              </Badge>
              <PreviewActions
                markdown={markdown}
                copied={copied}
                onCopy={copyToClipboard}
                onDownload={downloadMarkdown}
              />
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default ReadmePreview;

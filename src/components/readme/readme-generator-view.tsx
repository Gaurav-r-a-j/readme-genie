import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormDataType } from '@/types/readme-form';
import { generateMarkdown } from '@/utils/markdownGenerator';
import { ArrowLeft, Check, Copy, Download } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import CodeView from '../custom/readme-preview/code-view';
import MarkdownPreview from '../custom/readme-preview/markdown-preview';
import TabSwitcher from '../custom/readme-preview/tab-switcher';

type ReadmeGeneratorViewProps = {
  formData: FormDataType;
  onBack: () => void;
};

const ReadmeGeneratorView: React.FC<ReadmeGeneratorViewProps> = ({
  formData,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [markdown, setMarkdown] = useState('');

  // Generate markdown when component mounts or formData changes
  useEffect(() => {
    setMarkdown(generateMarkdown(formData));
  }, [formData]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
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
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Form
        </Button>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={copyToClipboard}
            className="flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </Button>

          <Button
            onClick={downloadMarkdown}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      {/* Generated README */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Your Generated README</CardTitle>
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
      </Card>

      {/* Instructions */}
      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Next Steps</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              • Copy the generated markdown and paste it into your GitHub
              repository
            </li>
            <li>
              • Or download the README.md file and upload it to your repository
            </li>
            <li>
              • Make sure to create a new file named &quot;README.md&quot; in
              your repository root
            </li>
            <li>• The preview shows how it will look on GitHub</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadmeGeneratorView;

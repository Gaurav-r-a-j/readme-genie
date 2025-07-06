import { FormDataType } from '@/components/forms/readme-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { generateMarkdown } from '@/utils/markdownGenerator';
import { ArrowDown, Check, Code, Copy, Eye, ThumbsUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula, vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import rehypeRaw from 'rehype-raw';

type ReadmePreviewProps = {
  formData: FormDataType;
};

const ReadmePreview: React.FC<ReadmePreviewProps> = ({ formData }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [copySuccess, setShowCopySuccess] = useState(false);
  const [markdown, setMarkdown] = useState('');

  // Generate markdown whenever formData changes
  useEffect(() => {
    setMarkdown(generateMarkdown(formData));
  }, [formData]);

  // Detect if we're in dark mode for the syntax highlighter
  const isDarkMode = document.documentElement.classList.contains('dark');
  const syntaxTheme = isDarkMode ? dracula : vs;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // Show the copy success animation
    setShowCopySuccess(true);
    setTimeout(() => setShowCopySuccess(false), 2000);
  };

  // Custom component to handle image rendering properly
  const MarkdownComponents = {
    img: ({ node, ...props }: any) => (
      <img
        {...props}
        className="inline-block max-w-full"
        style={{
          maxHeight: props.height ? `${props.height}px` : 'auto',
          display: 'inline-block',
        }}
      />
    ),
  };

  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md">
      <CardHeader className="pb-3 border-b border-gray-100 dark:border-gray-700 flex flex-row items-center justify-between">
        <CardTitle className="text-xl text-gray-800 dark:text-white">
          Preview
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'preview' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('preview')}
            className={
              activeTab === 'preview' ? 'bg-blue-600 hover:bg-blue-700' : ''
            }
          >
            <Eye className="h-4 w-4 mr-1" />
            Preview
          </Button>
          <Button
            variant={activeTab === 'code' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('code')}
            className={
              activeTab === 'code' ? 'bg-blue-600 hover:bg-blue-700' : ''
            }
          >
            <Code className="h-4 w-4 mr-1" />
            Markdown
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {activeTab === 'preview' ? (
          <div className="prose prose-sm md:prose max-w-none dark:prose-invert p-6 border-0 rounded-b-lg bg-gray-50 dark:bg-gray-900 overflow-auto max-h-[600px]">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={MarkdownComponents}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="relative">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="sm"
                  className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <Copy className="h-4 w-4 mr-1" />
                  )}
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {copied
                    ? 'Copied to clipboard!'
                    : 'Copy markdown to clipboard'}
                </p>
              </TooltipContent>
            </Tooltip>

            {/* Copy success animation */}
            {copySuccess && (
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="bg-green-500/90 text-white px-4 py-2 rounded-full flex items-center gap-2 animate-fade-up">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Copied to clipboard!</span>
                </div>
              </div>
            )}

            <div className="overflow-auto max-h-[600px] rounded-b-lg">
              <SyntaxHighlighter
                language="markdown"
                style={syntaxTheme}
                customStyle={{
                  margin: 0,
                  padding: '24px',
                  borderRadius: '0 0 0.5rem 0.5rem',
                  fontSize: '0.875rem',
                  background: isDarkMode ? '#1f2937' : '#f9fafb',
                }}
                showLineNumbers={true}
              >
                {markdown}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </CardContent>

      {/* Download and usage hint */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Created with{' '}
          <a href="#" className="text-blue-500 hover:underline">
            ReadMe Genie
          </a>
        </p>
        <Button
          size="sm"
          variant="outline"
          className="flex items-center gap-1 text-blue-600 border-blue-200 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-900 dark:hover:bg-blue-900/30"
          onClick={() => {
            const blob = new Blob([markdown], { type: 'text/markdown' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'README.md';
            a.click();
            URL.revokeObjectURL(url);
          }}
        >
          <ArrowDown className="h-3.5 w-3.5" />
          Download README.md
        </Button>
      </div>
    </Card>
  );
};

export default ReadmePreview;

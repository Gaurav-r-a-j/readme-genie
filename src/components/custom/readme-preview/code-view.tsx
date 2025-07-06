import { FileText } from 'lucide-react';
import React from 'react';

interface CodeViewProps {
  markdown: string;
}

const CodeView: React.FC<CodeViewProps> = ({ markdown }) => {
  if (!markdown) {
    return (
      <div className="text-center py-12">
        <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-lg font-medium mb-2">No Code Available</h3>
        <p className="text-muted-foreground">
          Fill out the form to see the generated markdown
        </p>
      </div>
    );
  }

  // Calculate line numbers
  const lines = markdown.split('\n');

  return (
    <div className="relative">
      {/* Header with file info */}
      <div className="flex items-center gap-2 p-3 bg-muted/50 border-b rounded-t-md">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm text-muted-foreground font-mono">
          README.md
        </span>
      </div>

      {/* Code content with line numbers */}
      <div className="flex bg-muted rounded-b-md overflow-hidden">
        {/* Line numbers */}
        <div className="bg-muted/80 border-r border-border p-4 text-xs text-muted-foreground font-mono select-none">
          {lines.map((_, index) => (
            <div key={index + 1} className="leading-5">
              {index + 1}
            </div>
          ))}
        </div>

        {/* Code content */}
        <div className="flex-1 overflow-auto">
          <pre className="p-4 text-sm leading-5 font-mono whitespace-pre">
            <code>{markdown}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeView;

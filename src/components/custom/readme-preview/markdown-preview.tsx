import { Eye } from 'lucide-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
  if (!markdown) {
    return (
      <div className="text-center py-12">
        <Eye className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-lg font-medium mb-2">No Preview Available</h3>
        <p className="text-muted-foreground">
          Fill out the form to see your README preview
        </p>
      </div>
    );
  }

  return (
    <div
      className="markdown-preview"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
        fontSize: '16px',
        lineHeight: '1.5',
        wordWrap: 'break-word',
        color: 'var(--foreground)',
        background: 'var(--background)',
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children, ...props }) => (
            <h1
              {...props}
              style={{
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
                fontSize: '2em',
                borderBottom: '1px solid #d1d9e0',
                paddingBottom: '0.3em',
              }}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              {...props}
              style={{
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
                fontSize: '1.5em',
                borderBottom: '1px solid #d1d9e0',
                paddingBottom: '0.3em',
              }}
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3
              {...props}
              style={{
                marginTop: '24px',
                marginBottom: '16px',
                fontWeight: '600',
                fontSize: '1.25em',
              }}
            >
              {children}
            </h3>
          ),
          p: ({ children, ...props }) => (
            <p {...props} style={{ marginTop: 0, marginBottom: '16px' }}>
              {children}
            </p>
          ),
          a: ({ children, ...props }) => (
            <a
              {...props}
              style={{
                color: '#0969da',
                textDecoration: 'none',
              }}
              onMouseEnter={e =>
                ((e.target as HTMLElement).style.textDecoration = 'underline')
              }
              onMouseLeave={e =>
                ((e.target as HTMLElement).style.textDecoration = 'none')
              }
            >
              {children}
            </a>
          ),
          img: ({ ...props }) => (
            <img {...props} style={{ maxWidth: '100%', height: 'auto' }} />
          ),
          code: ({ children, ...props }) => (
            <code
              {...props}
              style={{
                padding: '0.2em 0.4em',
                margin: 0,
                fontSize: '85%',
                backgroundColor: 'rgba(175, 184, 193, 0.2)',
                borderRadius: '6px',
              }}
            >
              {children}
            </code>
          ),
          pre: ({ children, ...props }) => (
            <pre
              {...props}
              style={{
                padding: '16px',
                overflow: 'auto',
                fontSize: '85%',
                lineHeight: '1.45',
                backgroundColor: '#f6f8fa',
                borderRadius: '6px',
              }}
            >
              {children}
            </pre>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownPreview;

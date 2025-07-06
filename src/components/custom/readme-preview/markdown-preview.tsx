import { Eye } from 'lucide-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface MarkdownPreviewProps {
  markdown: string;
}

// Extended props interfaces to handle HTML attributes
interface ExtendedProps {
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
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
    <>
      {/* Custom CSS for GitHub-like styling */}
      <style>{`
        .markdown-preview {
          /* GitHub-like styling for profile images with float */
          overflow: hidden;
        }
        .markdown-preview img[align="right"] {
          float: right !important;
          margin-left: 16px !important;
          margin-bottom: 16px !important;
          clear: right;
        }
        .markdown-preview img[align="left"] {
          float: left !important;
          margin-right: 16px !important;
          margin-bottom: 16px !important;
          clear: left;
        }
        .markdown-preview img[align="center"] {
          display: block !important;
          margin: 0 auto !important;
          clear: both;
        }
        .markdown-preview p {
          line-height: 1.6 !important;
          margin: 0 0 16px 0 !important;
        }
        .markdown-preview h1[align="center"],
        .markdown-preview h2[align="center"],
        .markdown-preview h3[align="center"] {
          text-align: center !important;
        }
        .markdown-preview p[align="left"] {
          text-align: left !important;
        }
        .markdown-preview p[align="center"] {
          text-align: center !important;
        }
        .markdown-preview p[align="right"] {
          text-align: right !important;
        }
        /* Clear floats for better layout */
        .markdown-preview:after {
          content: "";
          display: table;
          clear: both;
        }
        /* Better social links layout */
        .markdown-preview p a img {
          margin-right: 8px !important;
          vertical-align: middle !important;
        }
      `}</style>

      <div
        className="markdown-preview w-full max-w-none"
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
            // Enhanced heading components with better styling
            h1: ({ children, ...props }) => {
              const extendedProps = props as ExtendedProps;
              return (
                <h1
                  {...props}
                  style={{
                    marginTop: '24px',
                    marginBottom: '16px',
                    fontWeight: '600',
                    fontSize: '2em',
                    borderBottom: '1px solid #d1d9e0',
                    paddingBottom: '0.3em',
                    textAlign: extendedProps.align || 'left',
                    fontFamily: extendedProps.style?.fontFamily || 'inherit',
                  }}
                >
                  {children}
                </h1>
              );
            },
            h2: ({ children, ...props }) => {
              const extendedProps = props as ExtendedProps;
              return (
                <h2
                  {...props}
                  style={{
                    marginTop: '24px',
                    marginBottom: '16px',
                    fontWeight: '600',
                    fontSize: '1.5em',
                    borderBottom: '1px solid #d1d9e0',
                    paddingBottom: '0.3em',
                    textAlign: extendedProps.align || 'left',
                  }}
                >
                  {children}
                </h2>
              );
            },
            h3: ({ children, ...props }) => {
              const extendedProps = props as ExtendedProps;
              return (
                <h3
                  {...props}
                  style={{
                    marginTop: '24px',
                    marginBottom: '16px',
                    fontWeight: '600',
                    fontSize: '1.25em',
                    textAlign: extendedProps.align || 'left',
                  }}
                >
                  {children}
                </h3>
              );
            },
            // Enhanced paragraph with alignment support
            p: ({ children, ...props }) => {
              const extendedProps = props as ExtendedProps;
              return (
                <p
                  {...props}
                  style={{
                    marginTop: 0,
                    marginBottom: '16px',
                    textAlign: extendedProps.align || 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    flexWrap: 'wrap',
                  }}
                >
                  {children}
                </p>
              );
            },
            // Enhanced links with hover effects
            a: ({ children, href, ...props }) => (
              <a
                {...props}
                href={href}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={
                  href?.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                style={{
                  color: '#0969da',
                  textDecoration: 'none',
                  display: 'inline-block',
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
            // Enhanced images with responsive design and alignment
            img: ({ src, alt, style, width, ...props }) => {
              const extendedProps = props as ExtendedProps;
              return (
                <img
                  {...props}
                  src={src}
                  alt={alt}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: style?.borderRadius || '0',
                    width: width || 'auto',
                    display:
                      extendedProps.align === 'center'
                        ? 'block'
                        : 'inline-block',
                    margin: extendedProps.align === 'center' ? '0 auto' : '0',
                    float:
                      extendedProps.align === 'left'
                        ? 'left'
                        : extendedProps.align === 'right'
                          ? 'right'
                          : 'none',
                    marginRight: extendedProps.align === 'left' ? '16px' : '0',
                    marginLeft: extendedProps.align === 'right' ? '16px' : '0',
                    marginBottom: '8px',
                    ...style,
                  }}
                  loading="lazy"
                />
              );
            },
            // Code styling
            code: ({ children, ...props }) => (
              <code
                {...props}
                style={{
                  padding: '0.2em 0.4em',
                  margin: 0,
                  fontSize: '85%',
                  backgroundColor: 'rgba(175, 184, 193, 0.2)',
                  borderRadius: '6px',
                  fontFamily:
                    'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
                }}
              >
                {children}
              </code>
            ),
            // Pre-formatted code blocks
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
                  marginBottom: '16px',
                  fontFamily:
                    'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
                }}
              >
                {children}
              </pre>
            ),
            // Lists with better spacing
            ul: ({ children, ...props }) => (
              <ul
                {...props}
                style={{
                  paddingLeft: '20px',
                  marginBottom: '16px',
                  listStyleType: 'disc',
                }}
              >
                {children}
              </ul>
            ),
            ol: ({ children, ...props }) => (
              <ol
                {...props}
                style={{
                  paddingLeft: '20px',
                  marginBottom: '16px',
                  listStyleType: 'decimal',
                }}
              >
                {children}
              </ol>
            ),
            li: ({ children, ...props }) => (
              <li
                {...props}
                style={{
                  marginBottom: '4px',
                }}
              >
                {children}
              </li>
            ),
            // Blockquotes
            blockquote: ({ children, ...props }) => (
              <blockquote
                {...props}
                style={{
                  margin: '0',
                  paddingLeft: '16px',
                  borderLeft: '4px solid #d1d9e0',
                  color: '#656d76',
                  marginBottom: '16px',
                }}
              >
                {children}
              </blockquote>
            ),
            // Tables
            table: ({ children, ...props }) => (
              <table
                {...props}
                style={{
                  borderCollapse: 'collapse',
                  width: '100%',
                  marginBottom: '16px',
                  border: '1px solid #d1d9e0',
                }}
              >
                {children}
              </table>
            ),
            th: ({ children, ...props }) => (
              <th
                {...props}
                style={{
                  padding: '8px 12px',
                  textAlign: 'left',
                  backgroundColor: '#f6f8fa',
                  border: '1px solid #d1d9e0',
                  fontWeight: '600',
                }}
              >
                {children}
              </th>
            ),
            td: ({ children, ...props }) => (
              <td
                {...props}
                style={{
                  padding: '8px 12px',
                  border: '1px solid #d1d9e0',
                }}
              >
                {children}
              </td>
            ),
            // Horizontal rule
            hr: ({ ...props }) => (
              <hr
                {...props}
                style={{
                  height: '1px',
                  border: 'none',
                  backgroundColor: '#d1d9e0',
                  margin: '24px 0',
                }}
              />
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default MarkdownPreview;

import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { wikiContent } from '../data/content';

const WikiPage: React.FC = () => {
  const params = useParams();
  const pageId = params['*'] || 'introducao';

  const markdownContent = useMemo(() => {
    if (!pageId) {
       return '# Página inválida';
    }
    
    const content = wikiContent[pageId];

    if (content) {
      return content;
    }

    return `# 404: Página não encontrada\n\nA página que você está procurando em \`/${pageId}\` não existe.`;
  }, [pageId]);

  const htmlContent = useMemo(() => {
    if (window.marked) {
      return window.marked.parse(markdownContent);
    }
    return `<p>Markdown parser not loaded.</p><pre><code>${markdownContent}</code></pre>`;
  }, [markdownContent]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 w-full max-w-4xl mx-auto min-h-[300px]">
       <article className="prose prose-indigo dark:prose-invert max-w-none 
          prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100
          prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
          prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 prose-pre:rounded-lg
          prose-table:border prose-th:bg-gray-50 dark:prose-th:bg-gray-700
        ">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </div>
  );
};

export default WikiPage;

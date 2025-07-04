import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

const WikiPage: React.FC = () => {
  const params = useParams();
  const pageId = params['*'] || 'introducao';

  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!pageId) return;

    const fetchContent = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/content/${pageId}.md`);
        if (!response.ok) {
          // If the page is not found, show a 404 message
          if (response.status === 404) {
             setMarkdownContent(`# 404: Página não encontrada\n\nA página que você está procurando em \`/${pageId}\` não existe ou o arquivo \`/content/${pageId}.md\` não foi encontrado no servidor.`);
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } else {
          const text = await response.text();
          setMarkdownContent(text);
        }
      } catch (e: any) {
        console.error("Failed to fetch page content:", e.message);
        setMarkdownContent(`# Erro ao carregar\n\nOcorreu um erro ao buscar o conteúdo da página: ${e.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [pageId]);

  const htmlContent = useMemo(() => {
    if (isLoading) {
      return '<div class="flex justify-center items-center"><p class="text-lg">Carregando...</p></div>';
    }
    if (window.marked) {
      return window.marked.parse(markdownContent);
    }
    return `<p>Markdown parser not loaded.</p><pre><code>${markdownContent}</code></pre>`;
  }, [markdownContent, isLoading]);

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

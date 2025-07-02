import React, { useMemo } from 'react';
import { ChatMessage } from '../types';

interface ChatMessageBubbleProps {
  message: ChatMessage;
}

const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({ message }) => {
  const htmlContent = useMemo(() => {
    if (window.marked) {
      return window.marked.parse(message.text);
    }
    // Fallback to prevent rendering raw HTML if markdown parser isn't available
    const escapedText = message.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `<p>${escapedText}</p>`
  }, [message.text]);

  return (
    <div className={`flex items-end gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs md:max-w-sm rounded-lg px-3 py-2 ${message.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}>
        <article className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
};

export default ChatMessageBubble;

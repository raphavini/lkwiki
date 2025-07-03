import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { ChatMessage } from '../types';
import { ChatBubbleIcon, SendIcon, SparklesIcon, XIcon } from './Icons';
import ChatMessageBubble from './ChatMessageBubble';
import { wikiContent } from '../data/content';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<Chat | null>(null);
  const [error, setError] = useState<string | null>(null);
  const wikiContentRef = useRef<string | null>(null);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const initializeChat = () => {
      setIsLoading(true);
      setError(null);
      try {
        if (!wikiContentRef.current) {
          // Join all markdown content from the imported object
          const allContent = Object.values(wikiContent).join('\n\n---\n\n');
          wikiContentRef.current = allContent;
        }

        if (!wikiContentRef.current) {
          throw new Error("Could not load wiki content.");
        }
        
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const systemInstruction = `You are a helpful and friendly AI assistant for the RadWiki. Your name is 'Rad Wiki Assistant'.
You must answer user questions based *only* on the provided context below, which contains all documentation from the wiki.
If the answer to a question cannot be found in the context, you must state that you do not have that information in the wiki. Do not make up answers.
When referencing content, you can suggest links to the pages, for example: "You can find more details in the [con_users](#/bigquery/consumo/con-users) page."
Keep your answers concise and easy to understand.

---CONTEXT---
${wikiContentRef.current}
---END CONTEXT---`;

        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash-preview-04-17',
          config: { systemInstruction },
        });

        setChat(newChat);
        setMessages([
          { role: 'model', text: 'Olá! Sou o assistente da Wiki. Como posso ajudar você a encontrar informações na documentação?' }
        ]);
      } catch (err: any) {
        console.error("Failed to initialize chat:", err);
        setError("Não foi possível iniciar o assistente de IA. Verifique a conexão ou a configuração da API.");
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen && !chat && !error) {
      initializeChat();
    }
  }, [isOpen, chat, error]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chat) return;

    const userMessage = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: userMessage.text });
      const modelMessage = { role: 'model' as const, text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (err: any) {
      console.error("Gemini API error:", err);
      const errorMessage = { role: 'model' as const, text: "Desculpe, ocorreu um erro ao tentar obter uma resposta. Tente novamente." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={`fixed bottom-24 right-4 sm:right-6 md:right-8 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="w-[calc(100vw-2rem)] sm:w-96 h-[60vh] max-h-[700px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700">
          <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
            <div className="flex items-center space-x-2">
              <SparklesIcon />
              <h2 className="font-semibold text-gray-800 dark:text-gray-200">Assistente da Wiki</h2>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700">
              <XIcon />
            </button>
          </header>

          <main className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <ChatMessageBubble key={index} message={msg} />
            ))}
             {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                    <div className="max-w-xs md:max-w-sm rounded-lg px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none">
                        <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                        </div>
                    </div>
                </div>
            )}
             {error && (
                <div className="flex items-end gap-2 justify-start">
                    <div className="max-w-xs md:max-w-sm rounded-lg px-3 py-2 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
                        <p>{error}</p>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </main>

          <footer className="p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pergunte algo..."
                disabled={isLoading || error !== null}
                className="flex-1 p-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button type="submit" disabled={isLoading || !input.trim() || error !== null} className="p-2 bg-indigo-600 text-white rounded-lg disabled:bg-indigo-400 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors">
                <SendIcon />
              </button>
            </form>
          </footer>
        </div>
      </div>
      
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:right-6 md:right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-110 duration-200 ease-in-out ${isOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
        aria-label="Open chat"
      >
        <ChatBubbleIcon />
      </button>
    </>
  );
};

export default ChatWidget;

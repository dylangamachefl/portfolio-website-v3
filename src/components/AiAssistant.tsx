
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { streamMessageToGemini, initializeChat } from '../services/geminiService';
import { ChatMessage } from '../types';
import { BentoCard } from './BentoCard';

export const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Dylan's AI assistant. Ask me anything about his projects, skills, or experience." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [retryStatus, setRetryStatus] = useState<string | null>(null);

  // Use a ref for the scrollable container
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initializeChat();
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      // Scroll the container specifically, avoiding global window scroll
      // We use a small timeout to ensure DOM update has processed if needed, though useEffect dep array usually handles it
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, 10);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    setRetryStatus(null);

    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      // Add a placeholder message for the model that we will update via stream
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      let fullResponse = "";
      const stream = streamMessageToGemini(userText);

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage.role === 'model') {
            lastMessage.text = fullResponse;
          }
          return newMessages;
        });
      }

    } catch (error) {
      console.error("Streaming error:", error);
      setMessages(prev => {
        const newMessages = [...prev];
        const lastMessage = newMessages[newMessages.length - 1];

        // If the last message is empty, replace it with error message
        if (lastMessage.role === 'model' && lastMessage.text === '') {
          lastMessage.text = "⚠️ **Connection Error**\n\nI couldn't connect to the AI service. Please try again.";
        } else if (lastMessage.role === 'model' && !lastMessage.text.includes('⚠️')) {
          // If there's partial content but no error indicator, append error
          newMessages.push({
            role: 'model',
            text: "⚠️ **Partial Response**\n\nThe connection was interrupted. Please try asking again."
          });
        }
        return newMessages;
      });
    } finally {
      setIsLoading(false);
      setRetryStatus(null);
    }
  };

  const handleRefreshChat = () => {
    setMessages([
      { role: 'model', text: "Hi! I'm Dylan's AI assistant. Ask me anything about his projects, skills, or experience." }
    ]);
    setInputValue('');
  };

  return (
    <BentoCard
      className="h-full relative overflow-hidden flex flex-col"
      title="AI Assistant"
      subtitle="Powered by Gemma 3 27B"
      headerAction={
        <button
          onClick={handleRefreshChat}
          className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-all group"
          aria-label="Refresh chat"
          title="Clear chat history"
        >
          <span className="material-icons-outlined text-lg text-text-light-secondary dark:text-text-dark-secondary group-hover:text-primary group-hover:rotate-180 transition-all duration-300">
            refresh
          </span>
        </button>
      }
    >
      <div className="flex flex-col h-full max-h-full justify-between">
        {/* Chat History - Flex Grow to fill space, min-h-0 is crucial for scroll inside flex */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 mb-4 min-h-0"
        >
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`w-fit max-w-[90%] rounded-lg p-3 text-sm ${msg.role === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-text-light-primary dark:text-text-dark-primary'
                  }`}
              >
                {msg.role === 'model' ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none 
                            prose-p:leading-relaxed 
                            prose-pre:bg-slate-800 prose-pre:text-slate-100 prose-pre:p-2 prose-pre:rounded-md
                            prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-slate-200 dark:prose-code:bg-slate-800 prose-code:px-1 prose-code:rounded
                            prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:underline
                            [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => <a target="_blank" rel="noopener noreferrer" {...props} />
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}

          {/* Thinking Indicator (only show if loading AND the last message is empty - i.e. waiting for first chunk) */}
          {isLoading && messages[messages.length - 1]?.text === '' && (
            <div className="flex justify-start">
              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
        </div>

        {/* Retry Status Indicator */}
        {retryStatus && (
          <div className="px-3 py-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-xs text-amber-800 dark:text-amber-200 flex items-center gap-2 mb-2">
            <span className="material-icons-outlined text-sm animate-spin">refresh</span>
            <span>{retryStatus}</span>
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSendMessage} className="relative mt-auto pt-2 shrink-0">
          <input
            className="w-full rounded-full border-border-light bg-background-light py-2 pl-4 pr-10 text-sm focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-slate-700 dark:text-text-dark-primary dark:placeholder-slate-400 focus:outline-none focus:ring-2"
            placeholder="Type a message..."
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="absolute right-1.5 top-3.5 p-1 text-primary hover:text-blue-600 dark:text-blue-400 disabled:opacity-50"
          >
            <span className="material-icons-outlined text-sm">send</span>
          </button>
        </form>
      </div>
    </BentoCard>
  );
};

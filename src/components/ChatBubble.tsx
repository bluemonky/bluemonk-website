'use client';

import { useEffect, useState } from 'react';

interface ChatBubbleProps {
  message: string;
  onClose: () => void;
}

export default function ChatBubble({ message, onClose }: ChatBubbleProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(message.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [message]);

  return (
    <div className="absolute right-0 top-1/4 transform translate-x-[60%] sm:translate-x-[80%] w-64 sm:w-80 animate-fadeIn">
      <div className="glass-card p-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Speech bubble pointer */}
        <div className="absolute left-0 top-1/3 transform -translate-x-2 w-4 h-4 rotate-45 bg-[rgba(10,30,60,0.8)] border-l border-b border-[rgba(0,212,255,0.2)]" />

        {/* Message content */}
        <div className="text-sm text-gray-200 leading-relaxed whitespace-pre-line pr-4">
          {displayedText}
          {!isComplete && <span className="inline-block w-2 h-4 bg-[#00d4ff] animate-pulse ml-1" />}
        </div>

        {/* Action link */}
        {isComplete && (
          <div className="mt-4 pt-3 border-t border-[rgba(0,212,255,0.2)]">
            <a
              href="/contact"
              className="text-[#00d4ff] text-sm hover:underline flex items-center gap-1"
            >
              詳しく相談する
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

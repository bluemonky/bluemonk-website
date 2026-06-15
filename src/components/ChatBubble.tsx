'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';

interface ChatBubbleProps {
  message: string;
  onClose: () => void;
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(onChange: () => void) {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {};
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

/** prefers-reduced-motion: reduce を購読する軽量フック（SSR セーフ・外部ストア購読）。 */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false, // SSR: アニメ前提（クライアントで確定）
  );
}

export default function ChatBubble({ message, onClose }: ChatBubbleProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // reduced-motion: タイプライター演出は行わず即時に全文表示。
    if (prefersReducedMotion) {
      setDisplayedText(message);
      setIsComplete(true);
      return;
    }

    setDisplayedText('');
    setIsComplete(false);

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
  }, [message, prefersReducedMotion]);

  return (
    <div
      className="
        relative mt-5 w-full max-w-sm mx-auto
        sm:absolute sm:right-0 sm:top-1/4 sm:mt-0 sm:mx-0
        sm:translate-x-[80%] sm:w-80
        animate-fadeIn
      "
    >
      <div className="glass-card p-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
          aria-label="回答を閉じる"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Speech bubble pointer: 狭幅では上向き（マスコット下に配置）、sm 以上は左向き */}
        <div className="absolute left-1/2 -top-2 -translate-x-1/2 sm:left-0 sm:top-1/3 sm:translate-x-[-0.5rem] sm:translate-y-0 w-4 h-4 rotate-45 bg-[rgba(10,30,60,0.8)] border-l border-t sm:border-t-0 sm:border-b border-[rgba(0,212,255,0.2)]" />

        {/* Message content（スクリーンリーダーへ完成文を読み上げ） */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="text-sm text-gray-200 leading-relaxed whitespace-pre-line pr-4"
        >
          {/* 視覚: タイプライター途中経過 / 支援技術: 全文を一度だけ読み上げ（重複読み上げ回避） */}
          <span aria-hidden={!isComplete}>{displayedText}</span>
          {!isComplete && (
            <>
              <span className="sr-only">{message}</span>
              <span className="inline-block w-2 h-4 bg-[#00d4ff] animate-pulse ml-1" aria-hidden="true" />
            </>
          )}
        </div>

        {/* Action link */}
        {isComplete && (
          <div className="mt-4 pt-3 border-t border-[rgba(0,212,255,0.2)]">
            <a
              href="/contact"
              className="text-[#00d4ff] text-sm hover:underline flex items-center gap-1"
            >
              詳しく相談する
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

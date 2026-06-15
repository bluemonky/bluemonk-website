'use client';

import { useState } from 'react';
import ChatBubble from './ChatBubble';
import BlueMonkey, { MonkeyPose } from './BlueMonkey';
import { hero } from '@/data/home';

export default function HeroSection() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [monkeyPose, setMonkeyPose] = useState<MonkeyPose>('meditate');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);
    setMonkeyPose('waiting');

    // Phase 1: ダミー応答（後で Qwen3 / API 連携に置き換え）
    setTimeout(() => {
      setMonkeyPose('think');
    }, 500);

    setTimeout(() => {
      setMonkeyPose('explain');
      setResponse(`アオキの視点でお答えします。

その課題の本質は技術ではなく、経営判断の遅れにあります。

具体的な解決プロセスとして、まずは現状の業務フローを可視化し、ボトルネックを特定することから始めましょう。

詳しくはお問い合わせください。`);
      setIsLoading(false);
    }, 1500);
  };

  const handleClose = () => {
    setResponse(null);
    setQuery('');
    setMonkeyPose('meditate');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20"
    >
      {/* 背景: 光は「一点」。マスコット背後にだけ単点グローを置く（全面発光させない）。 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="glow-spot left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[clamp(280px,40vw,560px)] h-[clamp(280px,40vw,560px)]" />
      </div>

      {/* 主見出し（特大・明朝・白抜き） */}
      <h1 className="relative text-center mb-3 sm:mb-4 tracking-tight">
        <span className="serif-display block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.25]">
          {hero.headline}
        </span>
      </h1>

      {/* サブ（細字 + シアンの極薄アクセント） */}
      <p className="relative font-serif text-sm sm:text-base md:text-lg font-normal tracking-[0.25em] text-[#7fdfff]/80 text-center mb-12 sm:mb-16">
        {hero.subhead}
      </p>

      {/* BLUE MONK 対話UI（マスコット） */}
      <div className="relative mb-10 flex items-center justify-center">
        <BlueMonkey pose={monkeyPose} size={260} className="sm:scale-100 scale-90" />

        {/* 応答があるときだけチャットバブルを表示 */}
        {response && <ChatBubble message={response} onClose={handleClose} />}
      </div>

      {/* 入力バー（マスコットと一体の対話UI） */}
      <form onSubmit={handleSubmit} className="relative w-full max-w-2xl px-4">
        <div className="relative glow-border rounded-full bg-[#0a1e3c]/70 backdrop-blur-sm">
          <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#00d4ff] mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <label htmlFor="bluemonk-chat" className="sr-only">
              BLUE MONK への質問
            </label>
            <input
              id="bluemonk-chat"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={hero.chatPlaceholder}
              className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm sm:text-base outline-none"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="ml-2 p-2 text-[#00d4ff] hover:text-white transition-colors disabled:opacity-50"
              aria-label="質問を送信"
            >
              {isLoading ? (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* スクロール誘導（控えめ） */}
        <p className="mt-10 text-center text-xs tracking-[0.3em] text-gray-500 uppercase">
          Scroll
        </p>
      </form>
    </section>
  );
}

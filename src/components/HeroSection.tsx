'use client';

import { useState } from 'react';
import ChatBubble from './ChatBubble';
import BlueMonkey, { MonkeyPose } from './BlueMonkey';

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

    // Phase 1: ダミー応答（後でAPI連携に置き換え）
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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circuit lines - left */}
        <svg className="absolute left-0 top-1/4 w-1/3 h-1/2 opacity-30" viewBox="0 0 400 600">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,100 L100,100 L100,200 L200,200 L200,300 L150,300" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,250 L80,250 L80,350 L180,350" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,400 L120,400 L120,500 L200,500" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="3" fill="#00d4ff" />
          <circle cx="200" cy="200" r="3" fill="#00d4ff" />
          <circle cx="150" cy="300" r="3" fill="#00d4ff" />
          <circle cx="80" cy="350" r="3" fill="#00d4ff" />
          <circle cx="120" cy="500" r="3" fill="#00d4ff" />
        </svg>

        {/* Circuit lines - right */}
        <svg className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-30 transform scale-x-[-1]" viewBox="0 0 400 600">
          <path d="M0,150 L100,150 L100,250 L200,250 L200,350 L150,350" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,300 L80,300 L80,400 L180,400" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M0,450 L120,450 L120,550 L200,550" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <circle cx="100" cy="150" r="3" fill="#00d4ff" />
          <circle cx="200" cy="250" r="3" fill="#00d4ff" />
          <circle cx="150" cy="350" r="3" fill="#00d4ff" />
          <circle cx="80" cy="400" r="3" fill="#00d4ff" />
          <circle cx="120" cy="550" r="3" fill="#00d4ff" />
        </svg>

        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse opacity-50" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#00ffcc] rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-pulse opacity-40" />
      </div>

      {/* Main heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 sm:mb-8 tracking-tight">
        <span className="gradient-text glow-text">BREAK THROUGH</span>
        <br />
        <span className="gradient-text glow-text">UNCERTAINTY WITH LOGIC.</span>
      </h1>

      {/* Blue Monkey Character */}
      <div className="relative mb-8 flex items-center justify-center">
        {/* Meditation platform glow */}
        <div className="absolute bottom-0 w-48 sm:w-64 md:w-80 h-4 bg-[#00d4ff]/20 blur-xl rounded-full" />

        {/* Blue Monkey */}
        <BlueMonkey
          pose={monkeyPose}
          size={280}
          className="sm:scale-100 scale-75"
        />

        {/* Chat bubble when response exists */}
        {response && (
          <ChatBubble message={response} onClose={handleClose} />
        )}
      </div>

      {/* Search bar */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl px-4 mb-6">
        <div className="relative glow-border rounded-full bg-[#0a1e3c]/80 backdrop-blur-sm">
          <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00d4ff] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask Blue Monkey anything..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm sm:text-base outline-none"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="ml-2 p-2 text-[#00d4ff] hover:text-white transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Tagline */}
      <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center max-w-xl px-4">
        人とAIと共に進化する企業へ
      </p>
    </section>
  );
}

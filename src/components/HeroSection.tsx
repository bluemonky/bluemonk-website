'use client';

import { useState } from 'react';
import Image from 'next/image';
import ChatBubble from './ChatBubble';
import BlueMonkey, { MonkeyPose } from './BlueMonkey';
import { hero } from '@/data/home';

/**
 * 対話UIの状態。Phase2 で API 連携に差し替える際、この型を軸に
 * loading / error / complete を扱えるよう状態スロットを分離している。
 *  - idle:    未送信
 *  - loading: 応答待ち
 *  - error:   取得失敗（再試行可能）
 *  - complete: 応答取得済み
 */
type ChatStatus = 'idle' | 'loading' | 'error' | 'complete';

// Phase 1: ダミー応答（Phase2 で Qwen3 / API 連携に置き換え）。
const DUMMY_RESPONSE = `アオキの視点でお答えします。

その課題の本質は技術ではなく、経営判断の遅れにあります。

具体的な解決プロセスとして、まずは現状の業務フローを可視化し、ボトルネックを特定することから始めましょう。

詳しくはお問い合わせください。`;

export default function HeroSection() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<ChatStatus>('idle');
  const [response, setResponse] = useState<string | null>(null);
  const [monkeyPose, setMonkeyPose] = useState<MonkeyPose>('meditate');

  const isLoading = status === 'loading';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    setStatus('loading');
    setResponse(null);
    setMonkeyPose('waiting');

    // Phase 1: ダミー応答（後で Qwen3 / API 連携に置き換え）。
    // Phase2 では try/catch で fetch を行い、失敗時に setStatus('error') へ。
    setTimeout(() => {
      setMonkeyPose('think');
    }, 500);

    setTimeout(() => {
      setMonkeyPose('explain');
      setResponse(DUMMY_RESPONSE);
      setStatus('complete');
    }, 1500);
  };

  const handleClose = () => {
    setResponse(null);
    setQuery('');
    setStatus('idle');
    setMonkeyPose('meditate');
  };

  const handleRetry = () => {
    setStatus('idle');
    setMonkeyPose('meditate');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20"
    >
      {/* 背景: 最適化済み背景画像（下部グロー＋側面回路を内包）。glow-spot は二重発光回避のため廃止。 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* CSS 下地: 画像ロード前/失敗時もダークブルーのトーンを維持する暗色グラデーション */}
        <div className="absolute inset-0 bg-[#030b1a] bg-gradient-to-b from-[#04122b] via-[#030b1a] to-[#02080f]" />
        <Image
          src="/images/hero/site-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* 可読性確保: 中央（見出し帯）をやや濃く、明部でもテキストコントラストを担保する暗色オーバーレイ。 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030b1a]/55 via-[#030b1a]/35 to-[#030b1a]/60" />
      </div>

      {/* 主見出し（特大・明朝・白抜き）。明部でのコントラスト確保に暗色影を重ねる。 */}
      <h1 className="relative text-center mb-3 sm:mb-4 tracking-tight">
        <span
          className="serif-display block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.25]"
          style={{ textShadow: '0 2px 24px rgba(3,11,26,0.8), 0 0 30px rgba(0,212,255,0.25)' }}
        >
          {hero.headline}
        </span>
      </h1>

      {/* サブ（細字 + シアンの極薄アクセント。明部でも読めるよう影を付与） */}
      <p
        className="relative font-serif text-sm sm:text-base md:text-lg font-normal tracking-[0.25em] text-[#aee9ff] text-center mb-12 sm:mb-16"
        style={{ textShadow: '0 1px 12px rgba(3,11,26,0.85)' }}
      >
        {hero.subhead}
      </p>

      {/* BLUE MONK 対話UI（マスコット）。狭幅では応答を縦にスタック。 */}
      <div className="relative mb-10 flex flex-col sm:flex-row items-center justify-center">
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
              Bluemonky への質問
            </label>
            <input
              id="bluemonk-chat"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={hero.chatPlaceholder}
              className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm sm:text-base outline-none"
              disabled={isLoading}
              aria-busy={isLoading}
              aria-describedby="bluemonk-chat-status"
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

        {/*
          対話UIの状態スロット（loading / error / complete）。
          Phase2 の API 差し替え時もこの領域に状態を出し分ける構造を維持する。
          スクリーンリーダーへは aria-live で状態遷移を通知（完成応答の本文は ChatBubble 側で読み上げ）。
        */}
        <div
          id="bluemonk-chat-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="mt-3 min-h-[1.5rem] text-center text-sm"
        >
          {status === 'loading' && (
            <span className="text-[#7fdfff]">Bluemonky が考えています…</span>
          )}
          {status === 'error' && (
            <span className="inline-flex items-center gap-2 text-red-300">
              応答を取得できませんでした。
              <button
                type="button"
                onClick={handleRetry}
                className="underline underline-offset-2 text-[#7fdfff] hover:text-white transition-colors"
              >
                もう一度試す
              </button>
            </span>
          )}
        </div>

        {/* スクロール誘導（控えめ・明部でも読めるよう影を付与） */}
        <p
          className="mt-6 text-center text-xs tracking-[0.3em] text-gray-300 uppercase"
          style={{ textShadow: '0 1px 8px rgba(3,11,26,0.85)' }}
        >
          Scroll
        </p>
      </form>
    </section>
  );
}

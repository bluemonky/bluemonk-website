'use client';

import { useEffect, useRef, useState } from 'react';
import ChatBubble from '../ChatBubble';
import BlueMonkey, { MonkeyPose } from '../BlueMonkey';
import { hero } from '@/data/home';

/**
 * 対話UIのサジェスト（質問例）。クリックで入力欄に挿入するだけのダミー導線。
 * バックエンドは変えず Phase1 のダミー応答を維持する（送信は利用者操作に委ねる）。
 * 本コンポーネントは 'use client' だが、初回レンダリングは SSR されるため
 * チップ群は初期 HTML に含まれる。
 */
const SUGGESTIONS = [
  '研修とコンサルの違いは？',
  'ChatGPT研修の進め方は？',
  '何から始めればいい？',
] as const;

/**
 * 対話UIの状態。Phase2 で API 連携に差し替える際、この型を軸に
 * loading / error / complete を扱えるよう状態スロットを分離している。
 *  - idle:    未送信
 *  - loading: 応答待ち
 *  - error:   取得失敗（再試行可能）
 *  - complete: 応答取得済み
 */
type ChatStatus = 'idle' | 'loading' | 'error' | 'complete';

/**
 * Phase 1: ダミー応答（Phase2 で Qwen3 / API 連携に置き換え）。
 *
 * 重要（P0）: 入力内容にかかわらず同じ「断定経営診断」を返す挙動は撤去した。
 * 確定情報のみに基づき、入力に軽く触れて研修 / コンサル / 開発 / 相談へ
 * 中立に誘導する応答例を返す（一人称「アオキ」断定はしない・Bluemonky 名義の落ち着いたトーン）。
 * 事実の捏造はせず、具体的な経営判断・診断は行わない。
 */
function buildDummyResponse(rawQuery: string): string {
  const q = rawQuery.trim();
  // 入力の要点を安全に引用（長すぎる場合は省略）。診断・断定はしない。
  const quoted = q.length > 40 ? `${q.slice(0, 40)}…` : q;

  return `※これは応答例です（現在はデモ表示）。

「${quoted}」について、ありがとうございます。

Blue Monk Consulting では、目的やお困りごとに合わせて次のかたちでお手伝いしています。
・研修（特に ChatGPT 活用）— 助成金の活用が可能な場合があります
・コンサルティング — 経営の視点で論点を整理
・開発支援 — 実装まで伴走

まずは初回相談（無料）で、状況を一緒に整理するところから始められます。`;
}

export default function ChatConsole() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<ChatStatus>('idle');
  const [response, setResponse] = useState<string | null>(null);
  const [monkeyPose, setMonkeyPose] = useState<MonkeyPose>('meditate');
  const inputRef = useRef<HTMLInputElement>(null);
  // setTimeout のハンドルを保持し、アンマウント時/再送時に clearTimeout する。
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const isLoading = status === 'loading';

  const clearTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  // アンマウント時に保留中のタイマーを必ず解除（リーク/状態更新の取りこぼし防止）。
  useEffect(() => clearTimers, []);

  // サジェストチップ: 質問例を入力欄に挿入してフォーカスを戻す（送信は利用者に委ねる）。
  const handleSuggestion = (text: string) => {
    if (isLoading) return;
    setQuery(text);
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    // 進行中の演出タイマーが残っていれば解除してから開始。
    clearTimers();

    const current = query;
    setStatus('loading');
    setResponse(null);
    setMonkeyPose('waiting');

    // Phase 1: ダミー応答（後で Qwen3 / API 連携に置き換え）。
    // Phase2 では try/catch で fetch を行い、失敗時に setStatus('error') へ。
    timersRef.current.push(
      setTimeout(() => {
        setMonkeyPose('think');
      }, 500),
    );

    timersRef.current.push(
      setTimeout(() => {
        setMonkeyPose('explain');
        setResponse(buildDummyResponse(current));
        setStatus('complete');
      }, 1500),
    );
  };

  const handleClose = () => {
    clearTimers();
    setResponse(null);
    setQuery('');
    setStatus('idle');
    setMonkeyPose('meditate');
  };

  const handleRetry = () => {
    clearTimers();
    setStatus('idle');
    setMonkeyPose('meditate');
  };

  return (
    <>
      {/* BLUE MONK 対話UI（マスコット）。狭幅では応答を縦にスタック。
          マスコットのサイズ・配置は変更しない。入場演出（hero-in）は従来どおり。 */}
      <div
        className="hero-in relative mb-10 flex flex-col sm:flex-row items-center justify-center"
        style={{ ['--hero-delay' as string]: '520ms' }}
      >
        <BlueMonkey pose={monkeyPose} size={260} className="sm:scale-100 scale-90" />

        {/* 応答があるときだけチャットバブルを表示 */}
        {response && <ChatBubble message={response} onClose={handleClose} />}
      </div>

      {/* 入力バー（マスコットと一体の対話UI） */}
      <form
        onSubmit={handleSubmit}
        className="hero-in relative w-full max-w-2xl px-4"
        style={{ ['--hero-delay' as string]: '720ms' }}
      >
        <div className="chat-shell relative rounded-full bg-[#0a1e3c]/70 backdrop-blur-sm">
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
              ref={inputRef}
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

        {/* サジェストチップ（質問例）— クリックで入力欄に挿入するダミー導線。
            初回レンダリング（idle）は SSR されるため、チップ群は初期 HTML に含まれる。
            応答が出ている間／読み込み中は隠して、対話の邪魔をしない。 */}
        {status === 'idle' && !response && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => handleSuggestion(s)}
                className="chat-chip rounded-full px-3.5 py-1.5 text-xs sm:text-[13px]"
              >
                {s}
              </button>
            ))}
          </div>
        )}

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
            <span className="inline-flex items-center gap-2 text-[#7fdfff]">
              Bluemonky が考えています
              {/* 上質な「考え中」のドット（reduced-motion 時は globals の上書きで静止） */}
              <span className="inline-flex gap-1" aria-hidden="true">
                <span className="h-1 w-1 rounded-full bg-[#7fdfff] animate-pulse [animation-delay:0ms]" />
                <span className="h-1 w-1 rounded-full bg-[#7fdfff] animate-pulse [animation-delay:200ms]" />
                <span className="h-1 w-1 rounded-full bg-[#7fdfff] animate-pulse [animation-delay:400ms]" />
              </span>
            </span>
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

        {/* スクロール誘導（控えめ・明部でも読めるよう影を付与）。
            一筋の光が静かに降りるキューを添える（reduced-motion 時は静止）。 */}
        <div className="mt-8 flex flex-col items-center gap-2" aria-hidden="true">
          <span
            className="text-xs tracking-[0.3em] text-gray-300 uppercase"
            style={{ textShadow: '0 1px 8px rgba(3,11,26,0.85)' }}
          >
            Scroll
          </span>
          <span className="scroll-cue-line" />
        </div>
      </form>
    </>
  );
}

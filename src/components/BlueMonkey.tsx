'use client';

import { useSyncExternalStore } from 'react';
import Image from 'next/image';

// Blue Monk マスコット。
// 以前はスプライトシート(12ポーズ)を background-position で切り替えていたが、
// 新しい一枚絵（回路法衣で瞑想する青い修行僧・透過WebP）に差し替え（静止表示）。
// pose は後方互換のため受け取るが表示には影響しない（チャット状態管理は呼び出し側に残置）。
// 常駐感を出すため、prefers-reduced-motion を尊重したごく微細な浮遊／明滅アニメを付与。

export type MonkeyPose =
  | 'welcome'
  | 'meditate'
  | 'explain'
  | 'agree'
  | 'think'
  | 'idea'
  | 'disagree'
  | 'confused'
  | 'waiting'
  | 'error'
  | 'success'
  | 'farewell';

interface BlueMonkeyProps {
  pose?: MonkeyPose;
  size?: number;
  className?: string;
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

export default function BlueMonkey({ size = 200, className = '' }: BlueMonkeyProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animate = !prefersReducedMotion;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* 常駐アニメ用キーフレーム（名前空間化して衝突回避）。reduced-motion 時は class を付けないため無効。 */}
      <style>{`
        @keyframes bm-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* 足元の接地表現（静止・宙吊り解消）。差し色は足元に持ち込まず寒色のみ。
          (a) 接地影: 直下に潰した暗藍の楕円＝「床に座っている」一次手がかり。
          (b) ペデスタル光: 影の上に薄い寒色の台座光（温度差・明滅させない＝焦点を奪わない）。 */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          bottom: '4%',
          width: '52%',
          height: '7%',
          background:
            'radial-gradient(closest-side, rgba(2,8,15,0.5) 0%, rgba(2,8,15,0.28) 48%, transparent 78%)',
          filter: 'blur(7px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          bottom: '3%',
          width: '58%',
          height: '10%',
          background:
            'radial-gradient(closest-side, rgba(0,212,255,0.14) 0%, rgba(0,212,255,0.05) 46%, transparent 76%)',
          filter: 'blur(13px)',
        }}
        aria-hidden="true"
      />
      <Image
        src="/images/bluemonkey/blue-monk-zen.webp"
        alt="瞑想する Bluemonky — BLUE MONK CONSULTING のマスコット"
        width={size}
        height={size}
        // 表示は固定 px。レンダリング幅をブラウザに明示し最適な候補を選ばせる軽微最適化（配置・サイズは不変）。
        sizes={`${size}px`}
        priority
        draggable={false}
        className="relative object-contain select-none"
        style={animate ? { animation: 'bm-float 6s ease-in-out infinite' } : undefined}
      />
    </div>
  );
}

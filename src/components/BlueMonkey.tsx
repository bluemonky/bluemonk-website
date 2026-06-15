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
        @keyframes bm-glow {
          0%, 100% { opacity: 0.25; transform: translateX(-50%) scaleX(1); }
          50% { opacity: 0.4; transform: translateX(-50%) scaleX(1.15); }
        }
      `}</style>

      {/* 足元の単点グロー（発光する禅のアクセント）— ごく微細に明滅 */}
      <div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-3 bg-[#00d4ff]/30 blur-xl rounded-full"
        style={animate ? { animation: 'bm-glow 5.5s ease-in-out infinite' } : undefined}
        aria-hidden="true"
      />
      <Image
        src="/images/bluemonkey/blue-monk-zen.webp"
        alt="瞑想する Bluemonky — BLUE MONK CONSULTING のマスコット"
        width={size}
        height={size}
        priority
        draggable={false}
        className="relative object-contain select-none"
        style={animate ? { animation: 'bm-float 6s ease-in-out infinite' } : undefined}
      />
    </div>
  );
}

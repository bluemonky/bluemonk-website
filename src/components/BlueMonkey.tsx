import Image from 'next/image';

// Blue Monk マスコット。
// 以前はスプライトシート(12ポーズ)を background-position で切り替えていたが、
// 新しい一枚絵（回路法衣で瞑想する青い修行僧・透過WebP）に差し替え（静止表示）。
// pose は後方互換のため受け取るが表示には影響しない（チャット状態管理は呼び出し側に残置）。

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

export default function BlueMonkey({ size = 200, className = '' }: BlueMonkeyProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* 足元の単点グロー（発光する禅のアクセント） */}
      <div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-3 bg-[#00d4ff]/30 blur-xl rounded-full"
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
      />
    </div>
  );
}

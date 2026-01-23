'use client';

import { useEffect, useState } from 'react';

// スプライトシートの配置（4列 x 3行）
// Row 1: WELCOME, MEDITATE, EXPLAIN, AGREE
// Row 2: THINK, IDEA, DISAGREE, CONFUSED
// Row 3: WAITING, ERROR, SUCCESS, FAREWELL

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

const posePositions: Record<MonkeyPose, { col: number; row: number }> = {
  welcome: { col: 0, row: 0 },
  meditate: { col: 1, row: 0 },
  explain: { col: 2, row: 0 },
  agree: { col: 3, row: 0 },
  think: { col: 0, row: 1 },
  idea: { col: 1, row: 1 },
  disagree: { col: 2, row: 1 },
  confused: { col: 3, row: 1 },
  waiting: { col: 0, row: 2 },
  error: { col: 1, row: 2 },
  success: { col: 2, row: 2 },
  farewell: { col: 3, row: 2 },
};

interface BlueMonkeyProps {
  pose: MonkeyPose;
  size?: number;
  className?: string;
}

export default function BlueMonkey({ pose, size = 200, className = '' }: BlueMonkeyProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const position = posePositions[pose];

  // スプライトシートは4列x3行
  // 各セルのサイズを計算（元画像のアスペクト比に基づく）
  const cols = 4;
  const rows = 3;

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = '/images/bluemonkey/bluemonkey-sprites.jpg';
  }, []);

  return (
    <div
      className={`relative overflow-hidden transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className="absolute transition-transform duration-300 ease-out"
        style={{
          width: size * cols,
          height: size * rows,
          backgroundImage: `url('/images/bluemonkey/bluemonkey-sprites.jpg')`,
          backgroundSize: '100% 100%',
          transform: `translate(${-position.col * size}px, ${-position.row * size}px)`,
        }}
      />

      {/* Glow effect under the character */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-[#00d4ff]/30 blur-xl rounded-full"
      />
    </div>
  );
}

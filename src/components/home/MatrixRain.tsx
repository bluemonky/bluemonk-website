'use client';

import { useEffect, useRef } from 'react';

/**
 * マトリックス風のデジタルレイン（緑の文字が降る）。HERO 背景の装飾。
 * - canvas に半透明の暗色を毎フレーム重ねて「尾を引く」フェードを作る古典的実装。
 * - 性能配慮: 時間ステップで ~18fps に間引き、タブ非表示中は停止、DPR は最大2。
 * - prefers-reduced-motion: アニメせず静止フレームを1枚だけ描く。
 * - aria-hidden / pointer-events-none（純粋な装飾）。
 */
export default function MatrixRain({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789'.split(
        '',
      );
    const fontSize = 15;
    let cols = 0;
    let drops: number[] = [];

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textBaseline = 'top';
      cols = Math.ceil(w / fontSize);
      drops = Array.from({ length: cols }, () =>
        Math.floor((Math.random() * h) / fontSize),
      );
      // 初期は暗色で塗りつぶし（背景画像を隠して「マトリックスの背景」に）。
      ctx.fillStyle = '#030b1a';
      ctx.fillRect(0, 0, w, h);
    };

    const drawFrame = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      // 尾を引くフェード（少し青みのある暗色＝ブランドの闇に馴染ませる）。
      ctx.fillStyle = 'rgba(3, 11, 26, 0.09)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize}px "Courier New", monospace`;
      for (let i = 0; i < cols; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const ch = chars[(Math.random() * chars.length) | 0];
        // たまに先頭を明るく光らせ、基本は緑。
        ctx.fillStyle =
          Math.random() > 0.94 ? 'rgba(200, 255, 215, 0.95)' : 'rgba(0, 225, 110, 0.78)';
        ctx.fillText(ch, x, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };

    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    sizeCanvas();

    // reduced-motion: 静止した1枚だけ（アニメしない）。
    if (prefersReduced) {
      for (let i = 0; i < 24; i++) drawFrame();
      return;
    }

    let raf = 0;
    let last = 0;
    const STEP = 55; // ~18fps（マトリックスらしい間）
    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (t - last < STEP) return;
      last = t;
      drawFrame();
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => sizeCanvas();
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (raf === 0) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}

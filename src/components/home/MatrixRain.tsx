'use client';

import { useEffect, useRef } from 'react';

/**
 * デジタルレイン（HERO 背景の装飾）。クラシックな緑のマトリックスではなく、
 * 「発光する禅」に馴染む“静かなデータの流れ”として現代的にカスタム:
 *  - 色はミュートした寒色シアン（緑のキツさを排除）。稀に ember の差し色グリント。
 *  - 被写界深度: 列ごとに明度・速度・字の濃さを変え、前後の層を作る（奥行き）。
 *  - 密度を抑え（一部の列は休ませる）、軌跡を長く滑らかに（落ち着いた流れ）。
 * 性能配慮: 時間ステップで間引き、タブ非表示中は停止、DPR 最大2。
 * prefers-reduced-motion: アニメせず静止フレームを数枚だけ描く。aria-hidden / pointer-none。
 */
export default function MatrixRain({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロabcdef0123456789{}<>/=+'.split(
        '',
      );
    const fontSize = 16;
    let cols = 0;
    // 列ごとの状態（被写界深度・速度・位置・休止）。
    let ys: number[] = [];
    let depth: number[] = [];
    let speed: number[] = [];
    let active: boolean[] = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const initColumns = (h: number) => {
      ys = new Array(cols);
      depth = new Array(cols);
      speed = new Array(cols);
      active = new Array(cols);
      for (let i = 0; i < cols; i++) {
        const d = rand(0.35, 1); // 0.35=奥(暗・遅) … 1=手前(明・速)
        depth[i] = d;
        ys[i] = rand(-h, h);
        speed[i] = (0.45 + d * 0.85) * fontSize; // 手前ほど速い
        active[i] = Math.random() < 0.66; // 一部の列は休ませて密度を抑える
      }
    };

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
      initColumns(h);
      ctx.fillStyle = '#030b1a';
      ctx.fillRect(0, 0, w, h);
    };

    const drawFrame = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      // 軌跡を長く（フェードを浅く）して滑らかな流れに。
      ctx.fillStyle = 'rgba(3, 11, 26, 0.055)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize}px "Courier New", monospace`;
      for (let i = 0; i < cols; i++) {
        if (!active[i]) continue;
        const x = i * fontSize;
        const y = ys[i];
        const d = depth[i];
        const ch = chars[(Math.random() * chars.length) | 0];
        if (Math.random() < 0.01) {
          // 稀に ember の差し色グリント（焦点の一点）。
          ctx.fillStyle = `rgba(255, 150, 90, ${0.45 * d})`;
        } else {
          // ミュートした寒色シアン。手前(d=1)ほど明るく、奥は沈める。
          ctx.fillStyle = `rgba(150, 205, 235, ${0.16 + 0.4 * d})`;
        }
        ctx.fillText(ch, x, y);
        ys[i] += speed[i];
        if (y > h + fontSize && Math.random() > 0.94) {
          // 列を上に戻し、深度を振り直して層を入れ替える。
          ys[i] = rand(-fontSize * 12, -fontSize);
          const nd = rand(0.35, 1);
          depth[i] = nd;
          speed[i] = (0.45 + nd * 0.85) * fontSize;
          active[i] = Math.random() < 0.85;
        }
      }
    };

    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    sizeCanvas();

    if (prefersReduced) {
      for (let i = 0; i < 28; i++) drawFrame();
      return;
    }

    let raf = 0;
    let last = 0;
    const STEP = 60; // ~16fps（落ち着いた流れ）
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

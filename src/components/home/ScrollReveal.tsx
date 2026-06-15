'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  /** リビールの遅延（ms）。複数要素を少しずらして出すときに使用。 */
  delay?: number;
  className?: string;
  /** 任意のラップ要素。デフォルトは div。 */
  as?: 'div' | 'section' | 'li' | 'article';
};

/**
 * スクロールでゆっくりフェードインさせる軽量ラッパー。
 * - 親（各セクション）は Server Component のまま、この境界だけ Client。
 * - prefers-reduced-motion は globals.css 側で `.reveal` を無効化するため、
 *   ここでは何もしなくても自動で「即表示」になる。
 * - IntersectionObserver 非対応・JS無効時は初期から表示（フォールバック）。
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  // SSR とクライアント初期描画を一致させるため、初期値は常に false（hydration 不整合回避）。
  // IntersectionObserver 非対応や JS 無効時のフォールバックは下記 effect / noscript 側で担保。
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // IntersectionObserver 非対応環境では即時表示（state ではなく DOM へ直接付与し
    // effect 内の同期 setState を避ける。発生はごく稀＝旧ブラウザのみ）。
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const refCallback = (node: HTMLElement | null) => {
    ref.current = node;
  };

  return (
    <Tag
      ref={refCallback as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

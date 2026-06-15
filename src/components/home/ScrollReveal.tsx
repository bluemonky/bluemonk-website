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
  // IntersectionObserver 非対応の環境では初期から表示（フォールバック）。
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

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

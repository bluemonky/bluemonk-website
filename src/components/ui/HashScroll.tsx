'use client';

import { useEffect } from 'react';

/**
 * ハッシュ（#3cx 等）への確実な着地。
 *
 * 背景: globals.css の `html { scroll-behavior: smooth }` のため、Next.js App Router の
 *   ハッシュ遷移は smooth スクロールになるが、遠距離（数千〜1万px）への smooth は
 *   ブラウザ側で取りこぼされ、ページ先頭に留まることがある（実測で確認）。
 * 対応: マウント時とハッシュ変更時に、対象要素へ `behavior:'instant'` でスクロール。
 *   `scroll-margin-top`（scroll-mt-*）は scrollIntoView が尊重するため固定ヘッダーに隠れない。
 *   明朝 Web フォント等の遅延読込で上方の高さが変わり位置がずれるため、フォント確定後に再着地。
 *
 * ハッシュが無いページでは何もしない（通常表示に影響なし）。アンカーを持つページにのみ設置する。
 */
export default function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    };

    // 初回はレイアウト確定直後（double rAF）に着地。先頭表示のチラつきを最小化。
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(scrollToHash);
    });

    // 明朝フォント読込で高さが変わるため、確定後にもう一度合わせる。
    if (document.fonts?.ready) {
      document.fonts.ready.then(scrollToHash);
    }

    window.addEventListener('hashchange', scrollToHash);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return null;
}

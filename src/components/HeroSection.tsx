import Image from 'next/image';
import ChatConsole from './home/ChatConsole';
import MatrixRain from './home/MatrixRain';
import { hero } from '@/data/home';

/**
 * HERO セクション（Server Component）。
 *
 * 見出し・サブ・背景画像・マスコット周辺の静的レイアウトは SSR で出力する。
 * 入力フォーム / 送信 / 状態（loading / error / complete）/ ChatBubble /
 * サジェストチップのクリック挿入といった対話の振る舞いは、'use client' な
 * <ChatConsole/> に切り出して配置している（マスコットとチップも ChatConsole の
 * 初回レンダリングで SSR されるため、初期 HTML に含まれる）。
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20"
    >
      {/* 背景: 最適化済み背景画像（下部グロー＋側面回路を内包）。glow-spot は二重発光回避のため廃止。 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* CSS 下地: 画像ロード前/失敗時もダークブルーのトーンを維持する暗色グラデーション */}
        <div className="absolute inset-0 bg-[#030b1a] bg-gradient-to-b from-[#04122b] via-[#030b1a] to-[#02080f]" />
        <Image
          src="/images/hero/site-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* マトリックスのデジタルレイン（緑の文字が降る背景）。モンキーの背後に流す装飾。 */}
        <div className="absolute inset-0">
          <MatrixRain />
        </div>
        {/* 可読性確保: 中央（見出し帯）をやや濃く、明部でもテキストコントラストを担保する暗色オーバーレイ。 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030b1a]/55 via-[#030b1a]/35 to-[#030b1a]/60" />
        {/* 差し色（暖色＝灯火）: 下部中央から立ちのぼる暖色のアンビエント。寒色基調に温度差を与え、
            マスコットを背景から持ち上げて奥行きを出す（控えめ＝発光する禅の節度）。 */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%]"
          style={{
            background:
              'radial-gradient(58% 62% at 50% 102%, rgba(255,122,40,0.16) 0%, rgba(255,122,40,0.05) 42%, transparent 72%)',
          }}
        />
      </div>

      {/* 主見出し（特大・明朝・白抜き）。明部でのコントラスト確保に暗色影を重ねる。
          LCP 対象のテキスト見出し。入場は opacity/transform のみで内容描画を妨げない。 */}
      <h1 className="relative text-center mb-3 sm:mb-4 tracking-tight">
        <span
          className="serif-display hero-in block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.28] tracking-[0.01em]"
          style={{
            // 近・中・遠の3層影で「紙の厚み」を出す（グロー総量は増やさない）。
            // (1)近接ドロップ=明部でも可読 / (2)中距離の沈み=厚みの主役(控えめ) / (3)遠いシアンのにじみ(既存以下)
            textShadow:
              '0 2px 10px rgba(3,11,26,0.85), 0 5px 18px rgba(3,11,26,0.48), 0 0 30px rgba(0,212,255,0.24)',
            ['--hero-delay' as string]: '80ms',
          }}
        >
          {hero.headline}
        </span>
      </h1>

      {/* サブ（細字 + シアンの極薄アクセント。明部でも読めるよう影を付与） */}
      <p
        className="hero-in relative font-serif text-sm sm:text-base md:text-lg font-normal tracking-[0.28em] text-[#aee9ff] text-center mb-12 sm:mb-16"
        style={{
          textShadow: '0 1px 12px rgba(3,11,26,0.85)',
          ['--hero-delay' as string]: '320ms',
        }}
      >
        {hero.subhead}
      </p>

      {/* 対話UI（マスコット・入力・チップ・状態）。'use client' に切り出し。 */}
      <ChatConsole />
    </section>
  );
}

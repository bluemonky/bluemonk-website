import { voice } from '@/data/home';
import BlueMonkey from '@/components/BlueMonkey';
import ScrollReveal from './ScrollReveal';

/**
 * 5. VOICE OF BLUE MONK — マスコットからのメッセージ。
 * HERO 以外でマスコットを再登場させ「常駐」感を保つ。
 * BlueMonkey はクライアント実装だが、ここでは静的に1ポーズ表示するだけ。
 * Server Component（内部の BlueMonkey/ScrollReveal が Client 境界）。
 */
export default function VoiceSection() {
  return (
    <section
      id="voice"
      className="relative px-4 sm:px-6 lg:px-8 py-28 sm:py-36 border-t border-[rgba(0,212,255,0.08)] overflow-hidden"
    >
      {/* 単点グロー（マスコット背後の一点だけ光らせる） */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="glow-spot left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(260px,32vw,420px)] h-[clamp(260px,32vw,420px)]" />
      </div>

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-8">
            {voice.eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <BlueMonkey pose="welcome" size={180} className="mx-auto mb-10" />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {/* DRAFT: 要確認 — マスコットのメッセージ */}
          <blockquote className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            「{voice.message}」
          </blockquote>
          <p className="mt-6 text-sm sm:text-base text-gray-400 leading-relaxed">
            {voice.caption}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

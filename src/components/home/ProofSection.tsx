import { proof } from '@/data/home';
import SectionHeading from './SectionHeading';
import SectionCta from './SectionCta';
import ScrollReveal from './ScrollReveal';

/**
 * 3. PROOF — 信頼の根拠。
 * 実績数字はすべて未確定（src/data/home.ts の proof.stats に DRAFT として集約）。
 * 確定値が入るまでプレースホルダ表示。Server Component。
 */
export default function ProofSection() {
  return (
    <section
      id="proof"
      className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32 border-t border-[rgba(0,212,255,0.08)]"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow={proof.eyebrow} title={proof.title} />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          {proof.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 120} className="text-center">
              {/* DRAFT: 要確認 — 実績数字（確定値に差し替え） */}
              <p className="flex items-baseline justify-center gap-1">
                <span className="serif-display text-5xl sm:text-6xl font-semibold tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xl sm:text-2xl text-[#00d4ff] font-medium">
                  {stat.unit}
                </span>
              </p>
              <p className="mt-4 text-sm sm:text-base text-gray-300">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 text-center" delay={120}>
          {/* DRAFT: 要確認 — 数字が未確定である旨の注記（確定後にこの行ごと削除） */}
          <p className="text-xs text-gray-500">※ 数値は確定後に差し替え予定（DRAFT）</p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 text-center" delay={120}>
          <SectionCta href={proof.cta.href} label={proof.cta.label} />
        </ScrollReveal>
      </div>
    </section>
  );
}

import { philosophy } from '@/data/home';
import SectionHeading from './SectionHeading';
import SectionCta from './SectionCta';
import ScrollReveal from './ScrollReveal';

/**
 * 2. PHILOSOPHY 抜粋 — 思想の核を3キーワードで提示。
 * キーワードと本文は実情報未確定（src/data/home.ts に DRAFT として集約）。
 * Server Component。
 */
export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow={philosophy.eyebrow} title={philosophy.lead} />

        <ScrollReveal className="mt-10 max-w-2xl mx-auto text-center" delay={120}>
          <p className="text-base sm:text-lg text-gray-300 leading-loose">
            {philosophy.body}
          </p>
        </ScrollReveal>

        {/* 3キーワード（論理 / 内省 / 共進化） */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {philosophy.keywords.map((kw, i) => (
            <ScrollReveal
              key={kw.reading}
              as="article"
              delay={i * 120}
              className="text-center"
            >
              <p className="text-[11px] tracking-[0.3em] text-[#00d4ff]/70 uppercase mb-3">
                {kw.reading}
              </p>
              <p className="serif-display text-3xl sm:text-4xl font-semibold mb-3">
                {kw.term}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">{kw.note}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16 text-center" delay={120}>
          <SectionCta href={philosophy.cta.href} label={philosophy.cta.label} />
        </ScrollReveal>
      </div>
    </section>
  );
}

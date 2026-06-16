import Link from 'next/link';
import { proof } from '@/data/home';
import SectionHeading from './SectionHeading';
import SectionCta from './SectionCta';
import ScrollReveal from './ScrollReveal';

/**
 * 3. PROOF — 信頼の根拠。
 * ダミー数字（00社/000名/00年）は出さない方針。
 * 「実在事例カード（2件）＋ 確定ファクトのバッジ」で信頼を示す。
 * - 事例は src/data/home.ts proof.cases（training-chatgpt.ts caseStudies の抜粋）。
 * - ファクトは proof.facts（助成金活用可 / 初回相談無料 / 経営者×ITエンジニア×MBA）。
 * Server Component。
 */
export default function ProofSection() {
  return (
    <section
      id="proof"
      className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-[rgba(0,212,255,0.08)]"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow={proof.eyebrow} title={proof.title} subtitle={proof.lead} />

        {/* 実在事例カード（2件） */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {proof.cases.map((c, i) => (
            <ScrollReveal key={c.client} as="article" delay={i * 120} className="flex">
              <Link
                href={c.href}
                className="group card-interactive glass-card w-full p-6 sm:p-8 flex flex-col"
              >
                <div className="relative z-10 flex flex-1 flex-col">
                  <p className="text-xs font-medium tracking-[0.2em] text-[#00d4ff] uppercase mb-3">
                    CASE {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="serif-display text-xl sm:text-2xl font-semibold text-white mb-2">
                    {c.client}
                  </h3>
                  <p className="text-xs text-gray-400 mb-4">
                    {c.location}・{c.industry}
                  </p>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed flex-1">
                    {c.summary}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-[#00d4ff]">
                    <span>研修の詳細を見る</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* 確定ファクトのバッジ（数値ではなく確定している提供条件・差別化） */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {proof.facts.map((fact, i) => (
            <ScrollReveal key={fact.label} delay={i * 120} className="flex">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,212,255,0.25)] bg-[rgba(0,212,255,0.04)] px-4 py-2 text-sm text-gray-200"
                title={fact.note}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#ff8a3c] shadow-[0_0_8px_rgba(255,138,60,0.7)]"
                  aria-hidden="true"
                />
                {fact.label}
              </span>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center" delay={120}>
          <SectionCta href={proof.cta.href} label={proof.cta.label} />
        </ScrollReveal>
      </div>
    </section>
  );
}

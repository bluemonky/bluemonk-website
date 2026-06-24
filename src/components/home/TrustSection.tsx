import Link from 'next/link';
import { trustSection } from '@/data/home';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

/**
 * TRUST — なぜBMCなら任せられるか（差別化）。
 * ICPの核「丸投げ不安／技術の妥当性を判断できない」に正面から答える中核セクション。
 * ここを home の主役カード（.card-interactive.glass-card）にスコープ。
 */
export default function TrustSection() {
  return (
    <section id="trust" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow={trustSection.eyebrow}
          title={trustSection.title}
          subtitle={trustSection.lead}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {trustSection.points.map((p, i) => (
            <ScrollReveal
              key={i}
              as="article"
              delay={i * 100}
              className="card-interactive glass-card p-6 sm:p-7"
            >
              <div className="relative z-10">
                <h3 className="serif-display text-lg sm:text-xl font-semibold text-white mb-3 leading-snug">
                  {p.term}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">{p.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 text-center" delay={120}>
          <Link
            href={trustSection.cta.href}
            className="btn-ember inline-flex items-center justify-center gap-2 font-semibold px-7 py-3 rounded-full"
          >
            {trustSection.cta.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

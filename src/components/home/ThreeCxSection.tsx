import Link from 'next/link';
import { threeCxHome } from '@/data/home';
import { threeCx } from '@/data/services/consulting';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

/**
 * TOP の 3CX セクション（DX推進のドクトリン＝サイトの背骨）。
 *
 * - 情報順序: 思想 → 【3CX】 → 実績 → 提供物（PhilosophySection と ProofSection の間）。
 * - 直後の ProofSection が section-plane を持つため、ここは section-rule のみ
 *   （明→暗→明の段差リズムを壊さない）。
 * - 3項目本体の正は consulting.ts の threeCx.items を import 再利用。TOP は密度を抑え、
 *   threeCxHome.shorts（短縮一文）で見せる。フル本文は /3cx と consulting に。
 * - 差し色 ember は Competitor 行（data-feature）の起点ノード一点のみ＝「光は一点」。
 */
export default function ThreeCxSection() {
  return (
    <section
      id="3cx"
      className="relative scroll-mt-24 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow={threeCxHome.eyebrow}
          title={threeCxHome.title}
          subtitle={threeCxHome.lead}
        />

        {/* 上り階段の含意を一言（並列3項目ではないことを明示） */}
        <ScrollReveal className="mt-5 text-center" delay={80}>
          <p className="label-fine">{threeCxHome.stair}</p>
        </ScrollReveal>

        <ScrollReveal className="mt-10" delay={120}>
          <div className="compare-table">
            {threeCx.items.map((it, i) => (
              <div
                key={it.en}
                className="compare-row"
                data-feature={it.feature ? 'true' : undefined}
              >
                <div className="compare-row__name">
                  <span className="section-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="block mt-2">
                    {it.jaLabel}
                    <small>{it.en}</small>
                  </span>
                </div>
                <div className="compare-row__body">
                  <span className="block text-[0.7rem] tracking-[0.14em] text-[#7cc8e6] mb-2">
                    {it.dxType} ・ {it.axis}
                  </span>
                  {threeCxHome.shorts[i]}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12 text-center" delay={120}>
          <Link
            href={threeCxHome.cta.href}
            className="group inline-flex items-center gap-2 text-sm sm:text-base text-[#00d4ff] hover:text-white transition-colors"
          >
            <span className="border-b border-[#00d4ff]/40 group-hover:border-white pb-0.5 transition-colors">
              {threeCxHome.cta.label}
            </span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

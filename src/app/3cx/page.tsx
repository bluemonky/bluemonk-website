import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import { threeCx } from '@/data/services/consulting';
import {
  pageHero,
  redefinition,
  redefinitionBody,
  ladder,
  cooperation,
  cooperationBody,
  cooperationLinks,
  mapping,
  closing,
} from '@/data/three-cx';

export const metadata: Metadata = {
  title: '3CX — DXを定義し直す | BLUE MONK CONSULTING',
  description:
    '守りで止まるDXを、攻めへ、そして関係へ。企業・市場・業界の三層を内→外→横断で捉え直す Blue Monk Consulting の DX ドクトリン、3CX。',
  alternates: { canonical: '/3cx' },
};

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

/**
 * /3cx — 3CX ドクトリンの専用ページ（サイトの背骨）。
 *
 * 3CX は Blue Monk Consulting の "DXとは何か" を定義し直す中核ドクトリン。
 * HERO → 01 DXの再定義 → 02 守攻関の上り階段 → 03 関係＝共創（山場）→
 * 04 サービスへの写像 → CLOSING。consulting ページの設計言語・余白に揃える。
 *
 * - 3項目本体は src/data/services/consulting.ts の threeCx.items を import 再利用（SSOT）。
 * - 固有の論考コピーは src/data/three-cx.ts（すべて DRAFT）。
 * - 差し色 ember は compare-table の Competitor 行（data-feature）一点のみ＝「光は一点」。
 */
export default function ThreeCxPage() {
  return (
    <PageLayout>
      {/* 単点グロー（HERO 背後に一点だけ） */}
      <div
        className="absolute inset-x-0 top-0 h-[520px] overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="glow-spot left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 w-[clamp(280px,42vw,560px)] h-[clamp(280px,42vw,560px)]" />
      </div>

      <div className="relative">
        <PageHero
          eyebrow={pageHero.eyebrow}
          title={pageHero.title}
          subtitle={pageHero.subtitle}
          eyebrowLarge
        />

        {/* ============================================================== */}
        {/* 01 DXの再定義（守りだけのDXは出発点）                            */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3 text-center">
              {redefinition.eyebrow}
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl font-semibold text-center mb-8 leading-snug">
              {redefinition.title}
            </h2>
            <div className="glass-card p-7 sm:p-9">
              {redefinitionBody.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg text-gray-300 leading-loose mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 02 守攻関の上り階段（compare-table・フル本文）                   */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3 text-center">
              {ladder.eyebrow}
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-3 leading-snug">
              {ladder.title}
            </h2>
            <p className="text-center text-[0.72rem] tracking-[0.18em] text-[#7cc8e6] mb-10">
              {ladder.stair}
            </p>

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
                    {it.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 03 関係＝共創（ページの山場）                                    */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3 text-center">
              {cooperation.eyebrow}
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 leading-snug">
              {cooperation.title}
            </h2>

            <div className="border-l border-[#00d4ff]/20 pl-5 sm:pl-7 space-y-5">
              {cooperationBody.split('\n\n').map((para, i) => (
                <p key={i} className="text-base sm:text-lg text-gray-300 leading-loose">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-4 sm:gap-8">
              {cooperationLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group inline-flex items-center gap-2 text-sm sm:text-base text-[#00d4ff] hover:text-white transition-colors"
                >
                  <span className="border-b border-[#00d4ff]/40 group-hover:border-white pb-0.5 transition-colors">
                    {l.label}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    <ArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 04 サービスへの写像（思想で終わらず提供物へ）                    */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3 text-center">
              {mapping.eyebrow}
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 leading-snug">
              {mapping.title}
            </h2>

            <ul className="hairline-list">
              {mapping.rows.map((r) => (
                <li key={r.href} className="hairline-row">
                  <Link
                    href={r.href}
                    className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="text-base sm:text-lg text-white font-medium">
                        {r.transform}
                      </span>
                      <span className="text-xs text-[#7cc8e6]/80">{r.dxType}</span>
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm text-[#00d4ff] group-hover:text-white transition-colors">
                      {r.service}
                      <span className="group-hover:translate-x-1 transition-transform">
                        <ArrowRight />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============================================================== */}
        {/* CLOSING（控えめCTA・問い合わせ最優先にしない）                   */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pb-28">
          <div className="max-w-3xl mx-auto text-center glass-card p-9 sm:p-12">
            <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-4">
              {closing.eyebrow}
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl font-semibold mb-4 leading-snug">
              {closing.title}
            </h2>
            <p className="text-base text-gray-300 mb-9 leading-relaxed max-w-xl mx-auto">
              {closing.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={closing.primary.href}
                className="btn-ember inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-full"
              >
                {closing.primary.label}
                <ArrowRight />
              </Link>
              <Link
                href={closing.secondary.href}
                className="inline-flex items-center gap-2 text-gray-200 font-semibold px-8 py-3.5 rounded-full border border-white/20 transition-all hover:border-[#00d4ff] hover:text-[#00d4ff]"
              >
                {closing.secondary.label}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

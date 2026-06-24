import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ScrollReveal from '@/components/home/ScrollReveal';
import HashScroll from '@/components/ui/HashScroll';
import {
  pageHero,
  lead,
  narrative,
  keywords,
  threeCxSummary,
  nameOrigin,
  missionVision,
  closing,
} from '@/data/philosophy';

export const metadata: Metadata = {
  title: 'PHILOSOPHY | BLUE MONK CONSULTING',
  description:
    'BLUE MONK CONSULTING の思想。経営者×ITエンジニア×MBAの視点で、論理・内省・共進化を軸に、人とAIが共に進化する世界を描きます。',
  alternates: { canonical: '/philosophy' },
};

/**
 * /philosophy — 思想ページ（ブランディングの中核 / TOP「思想を読む」の着地点）。
 *
 * - PageLayout + PageHero（統一済みの明朝白抜きトーン）を利用。
 * - ダーク「発光する禅」基調。余白広め・静かなトーンで読ませる。
 * - ScrollReveal でゆっくりフェードイン（prefers-reduced-motion は globals.css 側で無効化）。
 * - コンテンツは src/data/philosophy.ts に分離（多くは DRAFT / 由来は要確認プレースホルダ）。
 */
export default function PhilosophyPage() {
  return (
    <PageLayout>
      <HashScroll />
      <PageHero
        eyebrow={pageHero.eyebrow}
        title={pageHero.title}
        subtitle={pageHero.subtitle}
      />

      {/* ================================================================== */}
      {/* LEAD — 思想の入口。中央上に単点グローを一つだけ置く                  */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="glow-spot left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[clamp(280px,40vw,520px)] h-[clamp(280px,40vw,520px)]" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              {lead.headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal className="mt-8 space-y-6" delay={120}>
            {lead.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base sm:text-lg text-gray-300 leading-loose"
              >
                {p}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================== */}
      {/* NARRATIVE — 思想本文（数セクションの読み物。左寄せ・余白広め）        */}
      {/* ================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
        <div className="max-w-3xl mx-auto space-y-16 sm:space-y-24">
          {narrative.map((block) => (
            <ScrollReveal key={block.eyebrow} as="article">
              <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-4">
                {block.eyebrow}
              </p>
              <h2 className="serif-display text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-7">
                {block.title}
              </h2>
              <div className="space-y-6">
                {block.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base sm:text-lg text-gray-300 leading-loose"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================================================================== */}
      {/* KEYWORDS — 思想を象徴する3キーワード（論理 / 内省 / 共進化）詳細      */}
      {/* ================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center">
            <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3">
              KEYWORDS
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              私たちが、大切にする3つのこと。
            </h2>
          </ScrollReveal>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
            {keywords.map((kw, i) => (
              <ScrollReveal
                key={kw.reading}
                as="article"
                delay={i * 120}
                className="text-center"
              >
                <p className="text-xs tracking-[0.3em] text-[#00d4ff] uppercase mb-4">
                  {kw.reading}
                </p>
                <p className="serif-display text-3xl sm:text-4xl font-semibold mb-4">
                  {kw.term}
                </p>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-3">
                  {kw.lead}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">{kw.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3CX — DX実践の指針サマリー（世界観 → 実践の橋渡し。カード化しない）  */}
      {/* ================================================================== */}
      <section
        id="3cx"
        className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule"
      >
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3">
              {threeCxSummary.eyebrow}
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              {threeCxSummary.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal className="mt-8" delay={120}>
            <p className="text-base sm:text-lg text-gray-300 leading-loose max-w-2xl mx-auto">
              {threeCxSummary.body}
            </p>
            <p className="mt-7 text-sm text-gray-400 tracking-wide">
              {threeCxSummary.triad}
            </p>
            <Link
              href={threeCxSummary.cta.href}
              className="mt-9 inline-flex items-center gap-2 text-sm sm:text-base text-gray-200 font-medium px-6 py-3 rounded-full border border-[#00d4ff]/20 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all"
            >
              {threeCxSummary.cta.label}
              <svg
                className="w-4 h-4"
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
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MISSION / VISION（たたき台）                                        */}
      {/* ================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {missionVision.map((mv, i) => (
            <ScrollReveal
              key={mv.label}
              as="article"
              delay={i * 120}
              className="card-interactive glass-card p-7 sm:p-9"
            >
              <div className="relative z-10">
                <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-5">
                  {mv.label}
                </p>
                <p className="serif-display text-lg sm:text-xl md:text-2xl font-semibold leading-snug mb-5">
                  {mv.statement}
                </p>
                <p className="text-sm sm:text-base text-gray-400 leading-loose">
                  {mv.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================================================================== */}
      {/* THE NAME — BLUE MONK（青い修行僧）の由来。本人確定まで控えめに伏せる  */}
      {/* ================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3">
              {nameOrigin.eyebrow}
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              {nameOrigin.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal className="mt-8" delay={120}>
            <p className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-400 border border-[#00d4ff]/20 rounded-full px-5 py-2.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]/40"
                aria-hidden="true"
              />
              {nameOrigin.placeholder}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CLOSING — 思想 → 提供物 / 対話への静かな導線（問い合わせ最優先にしない）*/}
      {/* ================================================================== */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24 section-rule">
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="glow-spot left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(280px,36vw,480px)] h-[clamp(280px,36vw,480px)]" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-4">
              {closing.eyebrow}
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-6">
              {closing.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
              {closing.description}
            </p>
          </ScrollReveal>

          <ScrollReveal
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            delay={120}
          >
            <Link
              href={closing.primary.href}
              className="btn-ember inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full"
            >
              {closing.primary.label}
              <svg
                className="w-5 h-5"
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
            </Link>
            <Link
              href={closing.secondary.href}
              className="inline-flex items-center gap-2 text-gray-200 font-semibold px-8 py-4 rounded-full border border-white/20 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all"
            >
              {closing.secondary.label}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}

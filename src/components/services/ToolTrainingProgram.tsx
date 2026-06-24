import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import TrainingToolSwitch from './TrainingToolSwitch';
import type { ToolTraining } from '@/data/services/training-tools';

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

/**
 * ツール別 生成AI活用研修（Claude / Gemini）の共有ページ。
 *
 * - フラッグシップは ChatGPT 研修。本ページは「そのツールの強み」＋「同等カリキュラム」
 *   ＋CTA に絞った軽量版（カリキュラム詳細はフラッグシップへ集約）。
 * - consulting / 3cx と同じ設計言語（PageHero・glass-card・quiet-card・section-rule・
 *   btn-ember・単点グロー）に揃える。差し色 ember は使い過ぎない。
 */
export default function ToolTrainingProgram({ tool }: { tool: ToolTraining }) {
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
        <PageHero eyebrow={tool.eyebrow} title={tool.hero.title} subtitle={tool.hero.subtitle} />

        {/* ============================================================== */}
        {/* WHY（ツールの強み）                                             */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-3 leading-snug">
              {tool.whyTitle}
            </h2>
            <div className="w-10 h-px bg-gradient-to-r from-[#ff8a3c] to-transparent mx-auto mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {tool.strengths.map((s, i) => (
                <div key={i} className="quiet-card p-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] font-black text-sm mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* CURRICULUM（同等カリキュラム → フラッグシップへ集約）            */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3">
              Curriculum
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl font-semibold mb-7 leading-snug">
              {tool.curriculum.title}
            </h2>
            <div className="glass-card p-7 sm:p-9 text-left">
              <p className="text-base sm:text-lg text-gray-300 leading-loose mb-6">
                {tool.curriculum.body}
              </p>
              <Link
                href="/services/training/chatgpt"
                className="group inline-flex items-center gap-2 text-sm sm:text-base text-[#00d4ff] hover:text-white transition-colors"
              >
                <span className="border-b border-[#00d4ff]/40 group-hover:border-white pb-0.5 transition-colors">
                  {tool.curriculum.flagshipLabel}
                </span>
                <span className="group-hover:translate-x-1 transition-transform">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ツール切替（他ツールの研修への相互導線） */}
        <TrainingToolSwitch current={tool.slug} />

        {/* ============================================================== */}
        {/* CTA（控えめ・相談主導線＋研修一覧）                              */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pb-28">
          <div className="max-w-3xl mx-auto text-center glass-card p-9 sm:p-12">
            <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-4">
              Contact
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl font-semibold mb-4 leading-snug">
              {tool.cta.title}
            </h2>
            <p className="text-base text-gray-300 mb-9 leading-relaxed max-w-xl mx-auto">
              {tool.cta.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="btn-ember inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-full"
              >
                相談する
                <ArrowRight />
              </Link>
              <Link
                href="/services/training"
                className="inline-flex items-center gap-2 text-gray-200 font-semibold px-8 py-3.5 rounded-full border border-white/20 transition-all hover:border-[#00d4ff] hover:text-[#00d4ff]"
              >
                研修一覧に戻る
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

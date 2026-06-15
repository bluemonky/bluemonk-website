import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import {
  hero,
  intro,
  challengesTitle,
  challengesTagline,
  challenges,
  valuePropsTitle,
  valueProps,
  capabilitiesTitle,
  capabilitiesLead,
  capabilities,
  processTitle,
  processLead,
  processSteps,
  outputsTitle,
  outputsLead,
  outputs,
  targetTitle,
  targets,
  closingCta,
} from '@/data/services/development';

export const metadata: Metadata = {
  title: '開発支援 | BLUE MONK CONSULTING',
  description:
    'MCP・RAG・生成AIアプリケーションの実装支援。現場の課題に合わせた独自のAIソリューションを、アーキテクチャ設計から運用まで一気通貫で提供します。',
  alternates: { canonical: '/services/development' },
};

export default function DevelopmentPage() {
  return (
    <PageLayout>
      {/* 単点グロー（全面発光させない。HERO 背後に一点だけ） */}
      <div
        className="absolute inset-x-0 top-0 h-[520px] overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="glow-spot left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 w-[clamp(280px,42vw,560px)] h-[clamp(280px,42vw,560px)]" />
      </div>

      <div className="relative">
        <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

        {/* ============================================================== */}
        {/* OVERVIEW                                                        */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3 text-center">
              {intro.eyebrow}
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl font-semibold text-center mb-8 leading-snug">
              {intro.title}
            </h2>
            <div className="glass-card p-7 sm:p-9">
              {intro.body.split('\n\n').map((para, i) => (
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
        {/* CHALLENGES                                                      */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-[rgba(0,212,255,0.08)]">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3 text-center">
              Challenges
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-3 leading-snug">
              {challengesTitle}
            </h2>
            <div className="w-12 h-1 bg-[#00d4ff] mx-auto mb-10 rounded-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
              {challenges.map((c, i) => (
                <div
                  key={i}
                  className="glass-card p-5 sm:p-6 flex items-start gap-4 transition-all duration-300 hover:border-[#00d4ff]/55 hover:shadow-[0_10px_30px_-18px_rgba(0,212,255,0.5)]"
                >
                  <span
                    className="shrink-0 w-8 h-8 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center text-sm font-bold border border-[#00d4ff]/30"
                    aria-hidden="true"
                  >
                    ?
                  </span>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="inline-flex items-center gap-3 glass-card px-6 sm:px-8 py-4 text-base sm:text-lg text-gray-100 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc]" aria-hidden="true" />
                {challengesTagline}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* VALUE PROPOSITIONS                                              */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-[rgba(0,212,255,0.08)]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3 text-center">
              Value
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-3 leading-snug">
              {valuePropsTitle}
            </h2>
            <div className="w-12 h-1 bg-[#00d4ff] mx-auto mb-10 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {valueProps.map((v, i) => (
                <div key={i} className="card-interactive glass-card p-6 sm:p-7">
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] font-black text-base mb-5">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                      {v.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* CAPABILITIES（対応領域）                                         */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-[rgba(0,212,255,0.08)]">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3 text-center">
              Capabilities
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-3 leading-snug">
              {capabilitiesTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto mb-10">
              {capabilitiesLead}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="card-interactive glass-card p-6">
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 leading-snug">
                      <span className="text-[#00d4ff] font-mono text-sm mr-2">{String(i + 1).padStart(2, '0')}</span>
                      {cap.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PROCESS                                                         */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-[rgba(0,212,255,0.08)]">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3 text-center">
              Process
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-3 leading-snug">
              {processTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto mb-10">
              {processLead}
            </p>

            <ol className="space-y-4 sm:space-y-5">
              {processSteps.map((step) => (
                <li key={step.number} className="glass-card p-6 sm:p-7 flex gap-5 sm:gap-6">
                  <div className="shrink-0 flex flex-col items-center">
                    <span className="text-[0.65rem] font-bold tracking-widest text-[#00d4ff]/70 uppercase mb-1">
                      Step
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-[#00d4ff] leading-none">
                      {String(step.number).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="border-l border-white/10 pl-5 sm:pl-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============================================================== */}
        {/* OUTPUTS                                                         */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-[rgba(0,212,255,0.08)]">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3 text-center">
              Output
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-3 leading-snug">
              {outputsTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto mb-10">
              {outputsLead}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {outputs.map((o, i) => (
                <div key={i} className="glass-card p-6 flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-[#00ffcc] shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                      {o.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{o.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* TARGET                                                          */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-[rgba(0,212,255,0.08)]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3 text-center">
              Target
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-3 leading-snug">
              {targetTitle}
            </h2>
            <div className="w-12 h-1 bg-[#00d4ff] mx-auto mb-10 rounded-full" />

            <ul className="space-y-3">
              {targets.map((t, i) => (
                <li key={i} className="glass-card px-5 sm:px-6 py-4 flex items-start gap-3">
                  <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#00d4ff]" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{t.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============================================================== */}
        {/* CLOSING CTA（控えめ）                                            */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pb-28">
          <div className="max-w-3xl mx-auto text-center glass-card p-9 sm:p-12">
            <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-4">
              {closingCta.eyebrow}
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl font-semibold mb-4 leading-snug">
              {closingCta.title}
            </h2>
            <p className="text-base text-gray-300 mb-9 leading-relaxed max-w-xl mx-auto">
              {closingCta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={closingCta.primary.href}
                className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#030b1a] font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-white hover:shadow-lg hover:shadow-[#00d4ff]/40 hover:-translate-y-0.5"
              >
                {closingCta.primary.label}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href={closingCta.secondary.href}
                className="inline-flex items-center gap-2 text-gray-200 font-semibold px-8 py-3.5 rounded-full border border-white/20 transition-all hover:border-[#00d4ff] hover:text-[#00d4ff]"
              >
                {closingCta.secondary.label}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

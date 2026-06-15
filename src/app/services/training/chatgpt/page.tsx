import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import SchedulePatterns from '@/components/services/chatgpt/SchedulePatterns';
import {
  hero,
  challenges,
  challengesTagline,
  about,
  target,
  lectures,
  schedulePatterns,
  features,
  caseStudies,
  flowSteps,
  instructor,
} from '@/data/services/training-chatgpt';

export const metadata: Metadata = {
  title: 'ChatGPT活用研修 | BLUE MONK CONSULTING',
  description:
    '中小企業向け ビジネスリーダーのためのChatGPT活用セミナー。注目の生成系AI ChatGPTの研修を助成金を活用して実施します。経営者×ITエンジニア×MBAの講師が指導する実践的カリキュラム。',
};

export default function ChatGPTTrainingPage() {
  return (
    <PageLayout>
      {/* Light theme wrapper - extends edge-to-edge behind fixed header */}
      <div className="bg-white text-slate-900 -mt-16 sm:-mt-20 pt-16 sm:pt-20">
        {/* ================================================================== */}
        {/* HERO                                                                */}
        {/* ================================================================== */}
        <section className="relative overflow-hidden">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50" />
          {/* Decorative grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          {/* Decorative blur blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />

          <div className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
            <div className="max-w-5xl mx-auto text-center">
              <p className="inline-block text-xs sm:text-sm font-bold tracking-[0.3em] text-[#0099cc] mb-6 uppercase border border-[#00d4ff]/40 rounded-full px-4 py-1.5 bg-white/60 backdrop-blur-sm">
                {hero.eyebrow}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight whitespace-pre-line">
                {hero.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                {hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#00d4ff] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#00b8e6] hover:shadow-lg hover:shadow-[#00d4ff]/40 hover:-translate-y-0.5 transition-all"
                >
                  {hero.cta}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* CHALLENGES                                                          */}
        {/* ================================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              こんな困りごと・課題はありませんか?
            </h2>
            <div className="w-16 h-1 bg-[#00d4ff] mx-auto mb-12 rounded-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
              {challenges.map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex items-start gap-4 hover:border-[#00d4ff]/60 hover:shadow-md transition-all"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center text-sm font-bold">
                    ?
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-gradient-to-r from-cyan-50 to-sky-50 border border-[#00d4ff]/30 rounded-2xl px-8 py-6">
                <svg
                  className="w-8 h-8 text-[#00d4ff] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg font-semibold text-slate-800">{challengesTagline}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* ABOUT                                                               */}
        {/* ================================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-[0.3em] text-[#00d4ff] uppercase mb-4 text-center">
              About
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              {about.title}
            </h2>
            <div className="w-16 h-1 bg-[#00d4ff] mx-auto mb-12 rounded-full" />

            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
              <div className="prose prose-slate max-w-none">
                {about.body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base sm:text-lg text-slate-700 leading-loose mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* TARGET                                                              */}
        {/* ================================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-[0.3em] text-[#00d4ff] uppercase mb-4 text-center">
              Target
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              {target.title}
            </h2>
            <div className="w-16 h-1 bg-[#00d4ff] mx-auto mb-12 rounded-full" />

            <div className="bg-gradient-to-br from-white to-cyan-50/50 border border-[#00d4ff]/30 rounded-2xl p-8 sm:p-12 text-center">
              <p className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-snug">
                {target.audience}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {target.description}
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* CURRICULUM                                                          */}
        {/* ================================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-[0.3em] text-[#00d4ff] uppercase mb-4 text-center">
              Curriculum
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              9講義のカリキュラム
            </h2>
            <div className="w-16 h-1 bg-[#00d4ff] mx-auto mb-12 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {lectures.map((l) => (
                <div
                  key={l.number}
                  className="group relative bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex items-start gap-4 hover:border-[#00d4ff]/60 hover:shadow-md transition-all"
                >
                  <div className="shrink-0 flex flex-col items-center">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      Lec
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-[#00d4ff] leading-none">
                      {String(l.number).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                      {l.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* SCHEDULE PATTERNS                                                   */}
        {/* ================================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-[0.3em] text-[#00d4ff] uppercase mb-4 text-center">
              Schedule
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              選べる4つの時間割パターン
            </h2>
            <p className="text-sm sm:text-base text-slate-600 text-center max-w-2xl mx-auto mb-4">
              貴社のスケジュールに合わせて、4つの時間割パターンから選択いただけます。
            </p>
            <div className="w-16 h-1 bg-[#00d4ff] mx-auto mb-12 rounded-full" />

            <SchedulePatterns patterns={schedulePatterns} lectures={lectures} />
          </div>
        </section>

        {/* ================================================================== */}
        {/* FEATURES                                                            */}
        {/* ================================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-bold tracking-[0.3em] text-[#00d4ff] uppercase mb-4 text-center">
              Features
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              BLUE MONK の研修の特徴
            </h2>
            <div className="w-16 h-1 bg-[#00d4ff] mx-auto mb-12 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-[#00d4ff]/60 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-white font-black text-lg mb-6 shadow-md shadow-cyan-200">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* CASE STUDIES                                                        */}
        {/* ================================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-[0.3em] text-[#00d4ff] uppercase mb-4 text-center">
              Case Study
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              研修実績
            </h2>
            <div className="w-16 h-1 bg-[#00d4ff] mx-auto mb-12 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((cs, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-[#00d4ff]/60 hover:shadow-md transition-all"
                >
                  <div className="flex items-baseline justify-between mb-5 pb-4 border-b border-slate-200">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{cs.client}</h3>
                    <span className="text-xs font-medium text-[#00d4ff] tracking-wider uppercase">
                      Case {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <dl className="grid grid-cols-3 gap-3 mb-5 text-sm">
                    <div>
                      <dt className="text-xs text-slate-500 mb-1">所在地</dt>
                      <dd className="font-semibold text-slate-900">{cs.location}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-500 mb-1">業種</dt>
                      <dd className="font-semibold text-slate-900">{cs.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-500 mb-1">社員数</dt>
                      <dd className="font-semibold text-slate-900">{cs.size}</dd>
                    </div>
                  </dl>
                  <p className="text-sm text-slate-700 leading-relaxed">{cs.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* FLOW                                                                */}
        {/* ================================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-[0.3em] text-[#00d4ff] uppercase mb-4 text-center">
              Flow
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              サービス導入の流れ
            </h2>
            <div className="w-16 h-1 bg-[#00d4ff] mx-auto mb-12 rounded-full" />

            <div className="relative">
              {/* Vertical connector line */}
              <div
                className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#00d4ff]/20 via-[#00d4ff]/40 to-[#00d4ff]/20"
                aria-hidden="true"
              />

              <div className="space-y-6 md:space-y-10">
                {flowSteps.map((step, i) => (
                  <div
                    key={step.number}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 items-start ${
                      i % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Step number badge */}
                    <div className="relative md:w-1/2 flex md:justify-center">
                      <div className="flex items-center gap-4 bg-white border-2 border-[#00d4ff] rounded-2xl px-6 py-4 shadow-md">
                        <span className="text-xs font-bold tracking-widest text-[#00d4ff] uppercase">
                          Step
                        </span>
                        <span className="text-4xl sm:text-5xl font-black text-[#00d4ff] leading-none">
                          {String(step.number).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="md:w-1/2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* INSTRUCTOR                                                          */}
        {/* ================================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-[0.3em] text-[#00d4ff] uppercase mb-4 text-center">
              Instructor
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
              講師紹介
            </h2>
            <div className="w-16 h-1 bg-[#00d4ff] mx-auto mb-12 rounded-full" />

            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
              {/* Name block */}
              <div className="text-center mb-10 pb-10 border-b border-slate-200">
                <p className="text-sm text-slate-500 mb-3 leading-relaxed">{instructor.title}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {instructor.name}
                </h3>
                <p className="text-sm tracking-[0.2em] text-[#00d4ff]">{instructor.nameEn}</p>
              </div>

              {/* Career */}
              <div className="mb-10">
                <h4 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-5">
                  Career
                </h4>
                <ul className="space-y-4">
                  {instructor.career.map((c, i) => (
                    <li key={i} className="flex gap-4 sm:gap-6">
                      <span className="shrink-0 w-20 sm:w-24 text-sm font-bold text-[#00d4ff]">
                        {c.year}
                      </span>
                      <span className="text-sm text-slate-700 leading-relaxed flex-1">
                        {c.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weapon */}
              <div className="bg-gradient-to-br from-cyan-50 to-sky-50 border border-[#00d4ff]/30 rounded-2xl p-6 sm:p-8 text-center">
                <p className="text-xs font-bold tracking-[0.3em] text-[#00d4ff] uppercase mb-3">
                  {instructor.weapon.label}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {instructor.weapon.headline}
                </p>
                <p className="text-sm text-slate-600">{instructor.weapon.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* CTA                                                                 */}
        {/* ================================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 bg-gradient-to-br from-cyan-50 via-white to-sky-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              まずはお気軽にご相談ください
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed">
              研修の詳細・助成金の活用方法・カリキュラムのカスタマイズなど、<br className="hidden sm:inline" />
              貴社の状況に合わせてご提案します。初回相談は無料です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#00d4ff] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#00b8e6] hover:shadow-lg hover:shadow-[#00d4ff]/40 hover:-translate-y-0.5 transition-all"
              >
                無料相談はこちら
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/services/training"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold px-8 py-4 rounded-full border border-slate-300 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all"
              >
                他の研修プログラムを見る
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

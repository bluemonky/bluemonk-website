import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import CurriculumByLevel from '@/components/services/chatgpt/CurriculumByLevel';
import {
  hero,
  challenges,
  challengesTagline,
  about,
  target,
  beginnerLectures,
  intermediateLectures,
  beginnerSchedulePatterns,
  intermediateSchedulePatterns,
  features,
  caseStudies,
  flowSteps,
  instructor,
  closingCta,
} from '@/data/services/training-chatgpt';

export const metadata: Metadata = {
  title: 'ChatGPT活用研修 | BLUE MONK CONSULTING',
  description:
    '中小企業向け ビジネスリーダーのためのChatGPT活用セミナー。注目の生成系AI ChatGPTの研修を助成金を活用して実施します。経営者×ITエンジニア×MBAの講師が指導する実践的カリキュラム。',
  alternates: { canonical: '/services/training/chatgpt' },
};

/**
 * ChatGPT活用研修の Course JSON-LD。確定情報のみ（捏造なし）:
 *   研修名・提供元(会社)・言語・確定済みの概要文。
 * 料金・受講者数・日数などの数値や未確定事実は出さない（offers/hasCourseInstance は付けない）。
 */
const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'ChatGPT活用研修',
  description:
    '中小企業のビジネスリーダー向けのChatGPT活用セミナー。生成AIの基礎から業務活用・チームマネジメントまでを実践的に学ぶ研修プログラム。',
  inLanguage: 'ja',
  url: 'https://www.bluemonk.co.jp/services/training/chatgpt',
  provider: {
    '@type': 'Organization',
    name: 'BLUE MONK CONSULTING',
    legalName: '株式会社ブルーモンクコンサルティング',
    url: 'https://www.bluemonk.co.jp/',
  },
};

export default function ChatGPTTrainingPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      {/* ================================================================== */}
      {/* HERO — ダーク「発光する禅」（TOPトーン: #030b1a / 明朝白抜き / 単点グロー）*/}
      {/* edge-to-edge で固定ヘッダー背後まで伸ばす                            */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden bg-[#030b1a] text-[#e0e7f1] -mt-16 sm:-mt-20 pt-16 sm:pt-20">
        {/* 単点グロー（全面発光させない。中央上に一点だけ） */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="glow-spot left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[clamp(280px,42vw,560px)] h-[clamp(280px,42vw,560px)]" />
        </div>
        {/* 控えめな回路パターン（うっすら） */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,212,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.6) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(circle at 50% 40%, #000 0%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 40%, #000 0%, transparent 75%)',
          }}
        />

        <div className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="hero-in inline-block text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-6"
              style={{ '--hero-delay': '60ms' } as React.CSSProperties}
            >
              {hero.eyebrow}
            </p>
            <h1
              className="hero-in serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-[1.3] whitespace-pre-line"
              style={{ '--hero-delay': '160ms' } as React.CSSProperties}
            >
              {hero.title}
            </h1>
            <p
              className="hero-in text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed"
              style={{ '--hero-delay': '300ms' } as React.CSSProperties}
            >
              {hero.subtitle}
            </p>
            {/* 助成金訴求（控えめなシアンの一点） */}
            <p
              className="hero-in inline-flex items-center gap-2 text-sm text-[#7fdfff]/90 border border-[#00d4ff]/30 rounded-full px-4 py-1.5 mb-10 bg-[#00d4ff]/[0.06]"
              style={{ '--hero-delay': '420ms' } as React.CSSProperties}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc]" aria-hidden="true" />
              {hero.subsidy}
            </p>
            <div
              className="hero-in flex flex-col sm:flex-row gap-4 justify-center items-center"
              style={{ '--hero-delay': '520ms' } as React.CSSProperties}
            >
              <Link
                href="/contact"
                className="btn-ember inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full"
              >
                {hero.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ダーク → ライト(slate-50)への境界をなめらかに（最初の本文セクションの地色に着地） */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none" aria-hidden="true" />
      </section>

      {/* ================================================================== */}
      {/* 本文 — 可読性最優先のライト基調（見出しは明朝+シアンeyebrowで格上げ）  */}
      {/* ================================================================== */}
      <div className="bg-white text-slate-900">
        {/* ================================================================ */}
        {/* CHALLENGES                                                        */}
        {/* ================================================================ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#007399] uppercase mb-3 text-center">
              Challenges
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-slate-900 mb-3 leading-snug">
              こんな困りごと・課題はありませんか?
            </h2>
            <div className="w-12 h-1 bg-[#00d4ff] mx-auto mb-9 rounded-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
              {challenges.map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex items-start gap-4 hover:border-[#00d4ff]/60 hover:shadow-[0_8px_24px_-14px_rgba(0,212,255,0.45)] transition-all"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#00d4ff]/10 text-[#007399] flex items-center justify-center text-sm font-bold">
                    ?
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-gradient-to-r from-cyan-50 to-sky-50 border border-[#00d4ff]/30 rounded-2xl px-6 sm:px-8 py-5">
                <svg
                  className="w-7 h-7 text-[#00d4ff] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg font-semibold text-slate-800">{challengesTagline}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* ABOUT                                                             */}
        {/* ================================================================ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#007399] uppercase mb-3 text-center">
              About
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-slate-900 mb-3 leading-snug">
              {about.title}
            </h2>
            <div className="w-12 h-1 bg-[#00d4ff] mx-auto mb-9 rounded-full" />

            <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-10 shadow-sm">
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

        {/* ================================================================ */}
        {/* TARGET                                                            */}
        {/* ================================================================ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#007399] uppercase mb-3 text-center">
              Target
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-slate-900 mb-3 leading-snug">
              {target.title}
            </h2>
            <div className="w-12 h-1 bg-[#00d4ff] mx-auto mb-9 rounded-full" />

            <div className="bg-gradient-to-br from-white to-cyan-50/50 border border-[#00d4ff]/30 rounded-2xl p-7 sm:p-10 text-center">
              <p className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                {target.audience}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {target.description}
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* CURRICULUM & SCHEDULE (初級編 / 中級編 切り替え)                   */}
        {/* ================================================================ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#007399] uppercase mb-3 text-center">
              Curriculum
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-slate-900 mb-3 leading-snug">
              カリキュラムと時間割
            </h2>
            <p className="text-sm sm:text-base text-slate-600 text-center max-w-2xl mx-auto mb-9">
              レベルを選んで、講義内容と時間割パターンをご確認いただけます。
            </p>

            <CurriculumByLevel
              levels={[
                {
                  level: 'beginner',
                  label: '初級編',
                  lectures: beginnerLectures,
                  schedulePatterns: beginnerSchedulePatterns,
                  patternCount: beginnerSchedulePatterns.length,
                },
                {
                  level: 'intermediate',
                  label: '中級編',
                  lectures: intermediateLectures,
                  schedulePatterns: intermediateSchedulePatterns,
                  patternCount: intermediateSchedulePatterns.length,
                },
              ]}
            />
          </div>
        </section>

        {/* ================================================================ */}
        {/* FEATURES                                                          */}
        {/* ================================================================ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#007399] uppercase mb-3 text-center">
              Features
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-slate-900 mb-3 leading-snug">
              Blue Monk Consulting の研修の特徴
            </h2>
            <div className="w-12 h-1 bg-[#00d4ff] mx-auto mb-9 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 hover:border-[#00d4ff]/60 hover:shadow-[0_12px_32px_-16px_rgba(0,212,255,0.5)] hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-white font-black text-lg mb-5 shadow-md shadow-cyan-200">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* CASE STUDIES                                                      */}
        {/* ================================================================ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#007399] uppercase mb-3 text-center">
              Case Study
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-slate-900 mb-3 leading-snug">
              研修実績
            </h2>
            <div className="w-12 h-1 bg-[#00d4ff] mx-auto mb-9 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {caseStudies.map((cs, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 hover:border-[#00d4ff]/60 hover:shadow-[0_8px_24px_-14px_rgba(0,212,255,0.45)] transition-all"
                >
                  <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-slate-200">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{cs.client}</h3>
                    <span className="text-xs font-medium text-[#007399] tracking-wider uppercase">
                      Case {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <dl className="grid grid-cols-3 gap-3 mb-4 text-sm">
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

        {/* ================================================================ */}
        {/* FLOW                                                              */}
        {/* ================================================================ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#007399] uppercase mb-3 text-center">
              Flow
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-slate-900 mb-3 leading-snug">
              サービス導入の流れ
            </h2>
            <div className="w-12 h-1 bg-[#00d4ff] mx-auto mb-9 rounded-full" />

            <div className="relative">
              {/* Vertical connector line */}
              <div
                className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#00d4ff]/20 via-[#00d4ff]/40 to-[#00d4ff]/20"
                aria-hidden="true"
              />

              <div className="space-y-5 md:space-y-8">
                {flowSteps.map((step, i) => (
                  <div
                    key={step.number}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 items-start ${
                      i % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Step number badge */}
                    <div className="relative md:w-1/2 flex md:justify-center">
                      <div className="flex items-center gap-4 bg-white border-2 border-[#00d4ff] rounded-2xl px-6 py-3.5 shadow-md">
                        <span className="text-xs font-bold tracking-widest text-[#007399] uppercase">
                          Step
                        </span>
                        <span className="text-4xl sm:text-5xl font-black text-[#00d4ff] leading-none">
                          {String(step.number).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="md:w-1/2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
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

        {/* ================================================================ */}
        {/* INSTRUCTOR                                                        */}
        {/* ================================================================ */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] text-[#007399] uppercase mb-3 text-center">
              Instructor
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-slate-900 mb-3 leading-snug">
              講師紹介
            </h2>
            <div className="w-12 h-1 bg-[#00d4ff] mx-auto mb-9 rounded-full" />

            <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-10 shadow-sm">
              {/* Name block */}
              <div className="text-center mb-8 pb-8 border-b border-slate-200">
                <p className="text-sm text-slate-500 mb-3 leading-relaxed">{instructor.title}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {instructor.name}
                </h3>
                <p className="text-sm tracking-[0.2em] text-[#007399]">{instructor.nameEn}</p>
              </div>

              {/* Career */}
              <div className="mb-8">
                <h4 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-5">
                  Career
                </h4>
                <ul className="space-y-4">
                  {instructor.career.map((c, i) => (
                    <li key={i} className="flex gap-4 sm:gap-6">
                      <span className="shrink-0 w-20 sm:w-24 text-sm font-bold text-[#007399]">
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
              <div className="bg-gradient-to-br from-cyan-50 to-sky-50 border border-[#00d4ff]/30 rounded-2xl p-6 sm:p-7 text-center">
                <p className="text-xs font-bold tracking-[0.3em] text-[#007399] uppercase mb-3">
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
      </div>

      {/* ================================================================== */}
      {/* CTA — ダーク「発光する禅」（HEROと対のブックエンド）                  */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden bg-[#030b1a] text-[#e0e7f1]">
        {/* 上端に一筋のシアンのヘアライン（ライト本文 → ダーク CTA の品位ある境界） */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent pointer-events-none" aria-hidden="true" />
        {/* 単点グロー */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="glow-spot left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(280px,38vw,520px)] h-[clamp(280px,38vw,520px)]" />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-4">
              {closingCta.eyebrow}
            </p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 leading-[1.3] whitespace-pre-line">
              {closingCta.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              {closingCta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={closingCta.primary.href}
                className="btn-ember inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full"
              >
                {closingCta.primary.label}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href={closingCta.secondary.href}
                className="inline-flex items-center gap-2 text-gray-200 font-semibold px-8 py-4 rounded-full border border-white/20 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all"
              >
                {closingCta.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

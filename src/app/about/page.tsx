import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ScrollReveal from '@/components/home/ScrollReveal';
import {
  companyIntro,
  companyInfo,
  profile,
  philosophyLink,
} from '@/data/about';
import { aboutPage } from '@/data/pages';

export const metadata: Metadata = {
  title: 'ABOUT | BLUE MONK CONSULTING',
  description:
    '株式会社ブルーモンクコンサルティングと代表者プロフィール。経営者×エンジニア×MBA の視点で、企業のAI活用を支えます。',
  alternates: { canonical: '/about' },
};

/**
 * 代表者の Person JSON-LD。確定事実のみ（捏造なし）:
 *   氏名・役職(CEO/CTO)・所属会社・URL・専門領域。
 * 設立年や所在地など未確定の事実は出さない（about.ts の `// 要確認` 参照）。
 */
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '青木 紘史',
  alternateName: 'Hirofumi AOKI',
  jobTitle: ['CEO', 'CTO'],
  email: 'aoki@bluemonk.co.jp',
  worksFor: {
    '@type': 'Organization',
    name: 'BLUE MONK CONSULTING',
    legalName: '株式会社ブルーモンクコンサルティング',
    url: 'https://www.bluemonk.co.jp/',
  },
  knowsAbout: ['AI活用', 'DX', '生成AI', 'コンサルティング'],
};

export default function AboutPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* 単点グロー（全面発光させない。HERO 背後に一点だけ） */}
      <div
        className="absolute inset-x-0 top-0 h-[520px] overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="glow-spot left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 w-[clamp(280px,42vw,560px)] h-[clamp(280px,42vw,560px)]" />
      </div>

      <div className="relative">
        <PageHero
          eyebrow="ABOUT"
          title={aboutPage.heroTitle}
          subtitle={aboutPage.heroSubtitle}
        />

        {/* ========================================================== */}
        {/* 会社概要 */}
        {/* ========================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <ScrollReveal className="max-w-3xl mx-auto" as="div">
          <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3">
            {companyIntro.eyebrow}
          </p>
          <h2 className="serif-display text-2xl sm:text-3xl font-semibold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#00d4ff]" aria-hidden="true" />
            {companyIntro.heading}
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-10">
            {companyIntro.lead}
          </p>

          <dl className="glass-card divide-y divide-white/10">
            {companyInfo.map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 sm:px-7 py-4"
              >
                <dt className="sm:w-40 sm:flex-shrink-0 text-sm font-medium text-[#00d4ff] tracking-wide">
                  {item.label}
                </dt>
                <dd className="flex-1 text-sm sm:text-base text-gray-200 leading-relaxed break-words">
                  {item.value ?? (
                    <span className="text-gray-400 italic">準備中</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
        </section>

        {/* ========================================================== */}
        {/* 代表プロフィール */}
        {/* ========================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 section-rule pt-16 lg:pt-24">
        <ScrollReveal className="max-w-4xl mx-auto" as="div">
          <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3">
            {profile.eyebrow}
          </p>
          <h2 className="serif-display text-2xl sm:text-3xl font-semibold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-[#00d4ff]" aria-hidden="true" />
            {profile.heading}
          </h2>

          <div className="glass-card p-6 sm:p-8 lg:p-10">
            {/* 名前 + 写真 */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              {/* 顔写真プレースホルダ枠（未配置） */}
              <div
                className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 flex items-center justify-center"
                aria-label="代表写真（準備中）"
              >
                {profile.photo.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.photo.src}
                    alt={profile.photo.alt}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-[0.65rem] tracking-widest text-gray-400 uppercase text-center px-2">
                    Photo
                    <br />
                    準備中
                  </span>
                )}
              </div>

              <div>
                <h3 className="serif-display text-2xl sm:text-3xl font-semibold text-white">
                  {profile.name}
                </h3>
                <p className="text-sm tracking-[0.2em] text-gray-400 uppercase mt-1">
                  {profile.nameEn}
                </p>
                <p className="text-sm text-[#00d4ff] mt-3 leading-relaxed">
                  {profile.title}
                </p>
              </div>
            </div>

            <p className="text-base text-gray-300 leading-relaxed mb-10">
              {profile.lead}
            </p>

            {/* 武器: 経営者 × ITエンジニア × MBA */}
            <div className="mb-10">
              <p className="text-xs font-medium tracking-[0.2em] text-[#00d4ff] uppercase mb-3">
                {profile.weapon.label}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {profile.weapon.headline}
              </p>
              <p className="text-sm text-gray-400 mt-1 mb-6">
                {profile.weapon.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {profile.weapon.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-lg border border-white/10 bg-white/[0.02] p-4"
                  >
                    <p className="text-sm font-semibold text-[#00d4ff] mb-2">
                      {pillar.title}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 経歴年表 */}
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-[#00d4ff] uppercase mb-5">
                Career
              </p>
              <ol className="relative border-l border-white/10 ml-2" aria-label="代表者の経歴">
                {profile.career.map((item) => (
                  <li key={item.year} className="relative pl-6 pb-6 last:pb-0">
                    <span
                      className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#00d4ff]"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold text-white">{item.year}</p>
                    <p className="text-sm text-gray-400 leading-relaxed mt-0.5">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </ScrollReveal>
        </section>

        {/* ========================================================== */}
        {/* 思想への導線 */}
        {/* ========================================================== */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28 section-rule pt-16 lg:pt-24">
        <ScrollReveal className="max-w-3xl mx-auto" as="div">
          <Link
            href={philosophyLink.cta.href}
            className="group card-interactive glass-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 w-full">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {philosophyLink.heading}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {philosophyLink.description}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#00d4ff] group-hover:gap-3 transition-all sm:flex-shrink-0">
                <span>{philosophyLink.cta.label}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        </ScrollReveal>
        </section>
      </div>
    </PageLayout>
  );
}

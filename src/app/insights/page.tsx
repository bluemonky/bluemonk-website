import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import { insightsComingSoon } from '@/data/legal';

export const metadata: Metadata = {
  title: 'INSIGHTS | BLUE MONK CONSULTING',
  description:
    'BLUE MONK CONSULTING の思想発信。AI活用・DX・経営に関する記事や動画をお届けします。',
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="INSIGHTS"
        title="AI時代の経営を、言葉で。"
        subtitle="Blue Monk Consulting が発信する AI活用・DX・経営の視点。"
      />

      <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto">
          {/* 趣旨 + Coming Soon バッジ */}
          <div className="text-center mb-12">
            <span className="inline-block mb-6 text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase border border-[#00d4ff]/50 rounded-full px-4 py-1.5">
              Coming Soon
            </span>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {insightsComingSoon.lead}
            </p>
          </div>

          {/* 発信予定テーマの例（叩き台プレースホルダ） */}
          <div className="mb-12">
            <h2 className="text-xs font-medium tracking-[0.25em] text-gray-400 uppercase text-center mb-6">
              発信予定のテーマ（例）
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {insightsComingSoon.plannedTopics.map((topic) => (
                <div
                  key={topic.title}
                  className="glass-card p-6 flex flex-col h-full opacity-90"
                >
                  <span className="text-[10px] font-medium tracking-[0.2em] text-[#00d4ff] uppercase mb-3">
                    {topic.tag}
                  </span>
                  <h3 className="text-base font-semibold text-white leading-snug mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{topic.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 時期感 + 媒体 */}
          <div className="glass-card p-6 sm:p-8 text-center mb-10">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
              {insightsComingSoon.schedule}
            </p>
            <ul className="flex flex-wrap justify-center gap-2">
              {insightsComingSoon.channels.map((channel) => (
                <li
                  key={channel}
                  className="text-xs text-gray-400 border border-[#00d4ff]/30 rounded-full px-3 py-1"
                >
                  {channel}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#00d4ff] hover:gap-3 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>トップに戻る</span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

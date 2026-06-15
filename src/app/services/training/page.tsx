import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: '研修 | BLUE MONK CONSULTING',
  description:
    'ビジネスリーダーのためのAI活用研修。ChatGPTを中心に、経営判断とチームマネジメントに使える実践的なカリキュラムを提供します。',
  alternates: { canonical: '/services/training' },
};

const programs = [
  {
    slug: 'chatgpt',
    status: 'available' as const,
    eyebrow: 'FLAGSHIP PROGRAM',
    title: 'ChatGPT活用研修',
    description:
      '中小企業のビジネスリーダー向け。生成AIの基礎から業務活用・チームマネジメントまで、9講義で実践的に学ぶフラッグシッププログラム。助成金活用可。',
    href: '/services/training/chatgpt',
  },
];

export default function TrainingPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="TRAINING"
        title="現場で使えるAIスキルを、体系的に。"
        subtitle="研修は Blue Monk Consulting の主力サービス。経営判断から現場オペレーションまで、AIを使いこなす組織を育てます。"
      />

      <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="serif-display text-xl sm:text-2xl font-semibold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-[#00d4ff]" aria-hidden="true" />
            研修プログラム一覧
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {programs.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                className="group card-interactive glass-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6"
              >
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6 w-full">
                  <div className="flex-1">
                    <p className="text-xs font-medium tracking-[0.2em] text-[#00d4ff] uppercase mb-2">
                      {p.eyebrow}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#00d4ff] group-hover:gap-3 transition-all sm:flex-shrink-0">
                    <span>詳細を見る</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* Future programs placeholder */}
            <div className="glass-card p-6 sm:p-8 border-dashed opacity-60">
              <p className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase mb-2">
                More Programs Coming
              </p>
              <p className="text-sm text-gray-400">
                今後、Claude活用研修・Copilot活用研修・生成AIリテラシー研修などを順次追加予定です。
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

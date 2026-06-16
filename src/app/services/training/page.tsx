import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import { trainingPage } from '@/data/pages';

export const metadata: Metadata = {
  title: '研修 | BLUE MONK CONSULTING',
  description:
    'ビジネスリーダーのためのAI活用研修。ChatGPTを中心に、経営判断とチームマネジメントに使える実践的なカリキュラムを提供します。',
  alternates: { canonical: '/services/training' },
};

export default function TrainingPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="TRAINING"
        title={trainingPage.heroTitle}
        subtitle={trainingPage.heroSubtitle}
      />

      <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="serif-display text-xl sm:text-2xl font-semibold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-[#00d4ff]" aria-hidden="true" />
            {trainingPage.programsTitle}
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {trainingPage.programs.map((p) => (
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
                    <span>{trainingPage.detailLabel}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* Future programs placeholder */}
            <div className="glass-card p-6 sm:p-8 border-dashed">
              <p className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase mb-2">
                {trainingPage.placeholder.eyebrow}
              </p>
              <p className="text-sm text-gray-300">
                {trainingPage.placeholder.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 次の一歩（行き止まり回避・静かなゴースト導線） */}
      <section className="section-rule px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
            {trainingPage.closingLead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={trainingPage.closingPrimary.href}
              className="btn-ember inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-3.5"
            >
              {trainingPage.closingPrimary.label}
            </Link>
            <Link
              href={trainingPage.closingSecondary.href}
              className="btn-ember inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-3.5"
            >
              {trainingPage.closingSecondary.label}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

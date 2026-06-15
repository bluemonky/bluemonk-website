import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import { privacy, draftNotice, revisedAt } from '@/data/legal';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | BLUE MONK CONSULTING',
  description: 'BLUE MONK CONSULTING のプライバシーポリシー。',
};

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={privacy.eyebrow} title={privacy.title} />

      <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-3xl mx-auto">
          {/* 整備中の注記（軽め） */}
          <p className="mb-8 text-xs text-gray-400 leading-relaxed border-l-2 border-[#00d4ff]/40 pl-3">
            {draftNotice}
          </p>

          <div className="glass-card p-6 sm:p-10">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-10">
              {privacy.intro}
            </p>

            <div className="space-y-10">
              {privacy.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.items && (
                    <ul className="mt-3 space-y-2">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm sm:text-base text-gray-300 leading-relaxed"
                        >
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00d4ff]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-12 text-xs text-gray-500">最終改定日：{revisedAt}</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

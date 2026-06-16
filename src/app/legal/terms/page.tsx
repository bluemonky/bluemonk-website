import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import { terms, draftNotice, revisedAt } from '@/data/legal';

export const metadata: Metadata = {
  title: '利用規約 | BLUE MONK CONSULTING',
  description: 'BLUE MONK CONSULTING の利用規約。',
};

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero eyebrow={terms.eyebrow} title={terms.title} />

      <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-3xl mx-auto">
          {/* 整備中の注記（軽め） */}
          <p className="mb-8 text-xs text-gray-400 leading-relaxed border-l-2 border-[#ff8a3c]/55 pl-3">
            {draftNotice}
          </p>

          <div className="glass-card p-6 sm:p-10">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-10">
              {terms.intro}
            </p>

            <div className="space-y-10">
              {terms.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph, i) => {
                    const mail = paragraph.match(/^メール：(.+)$/);
                    return (
                      <p
                        key={i}
                        className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 last:mb-0"
                      >
                        {mail ? (
                          <>
                            メール：
                            <a
                              href={`mailto:${mail[1]}`}
                              className="text-[#00d4ff] underline underline-offset-4 decoration-[#00d4ff]/40 hover:decoration-[#00d4ff] transition-colors"
                            >
                              {mail[1]}
                            </a>
                          </>
                        ) : (
                          paragraph
                        )}
                      </p>
                    );
                  })}
                  {section.items && (
                    <ul role="list" className="mt-3 space-y-2">
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

            <p className="mt-12 text-xs text-gray-400">最終改定日：{revisedAt}</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

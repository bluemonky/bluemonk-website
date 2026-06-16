import { insights } from '@/data/home';
import SectionHeading from './SectionHeading';
import SectionCta from './SectionCta';
import ScrollReveal from './ScrollReveal';

/**
 * 6. INSIGHTS — Coming Soon 枠（プレースホルダ）。
 * 将来は Note / 動画の最新3件を表示。今は枠と Coming Soon ラベルのみ。
 * Server Component。
 */
export default function InsightsSection() {
  return (
    <section
      id="insights"
      className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow={insights.eyebrow}
          title={insights.title}
          subtitle={insights.description}
        />

        {/* Coming Soon プレースホルダ枠（将来は記事カード3件に差し替え） */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <ScrollReveal key={i} delay={i * 120} className="flex">
              <div className="glass-card w-full p-8 flex flex-col items-center justify-center text-center min-h-[180px] border-dashed border-[#00d4ff]/20">
                <span className="text-xs tracking-[0.3em] text-[#00d4ff]/70 uppercase">
                  Coming Soon
                </span>
                {/* DRAFT: 要確認 — 記事タイトル等は公開時に差し替え */}
                <span className="mt-3 text-sm text-gray-500">準備中</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center" delay={120}>
          <SectionCta href={insights.cta.href} label={insights.cta.label} />
        </ScrollReveal>
      </div>
    </section>
  );
}

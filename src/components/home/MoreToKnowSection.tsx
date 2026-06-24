import Link from 'next/link';
import { moreToKnow } from '@/data/home';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

/**
 * もっと知りたい人へ（裏付け層への入口）。
 * 思想・3CX・会社/代表 は一次ナビから外した代わりに、ここから静かに深掘りできる。
 * "独白"を退避先で生かす。
 */
export default function MoreToKnowSection() {
  return (
    <section id="more" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          eyebrow={moreToKnow.eyebrow}
          title={moreToKnow.title}
          subtitle={moreToKnow.lead}
        />

        <ScrollReveal className="mt-8 flex flex-wrap justify-center gap-3" delay={120}>
          {moreToKnow.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-200 px-5 py-2.5 rounded-full border border-[#00d4ff]/20 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all"
            >
              {l.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

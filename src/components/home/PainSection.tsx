import { painSection } from '@/data/home';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

/**
 * PAIN — あなたの状況（自分ごと化）。
 * ICP（非IT系・中堅・経営者）の悩みを煽らず肯定列挙し「これは自分の話だ」を作る。
 */
export default function PainSection() {
  return (
    <section id="pain" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow={painSection.eyebrow}
          title={painSection.title}
          subtitle={painSection.lead}
        />

        <ScrollReveal
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          delay={120}
        >
          {painSection.items.map((text, i) => (
            <div key={i} className="quiet-card p-5 sm:p-6 flex items-start gap-3">
              <span
                className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#00d4ff]"
                aria-hidden="true"
              />
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{text}</p>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal className="mt-8 text-center" delay={120}>
          <a
            href="/contact"
            className="text-sm sm:text-base text-[#00d4ff] hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            {painSection.ctaNote}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

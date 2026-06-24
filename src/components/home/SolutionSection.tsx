import { solutionSection } from '@/data/home';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

/**
 * SOLUTION — それ、こう解決できる（得られる結果＋進め方）。
 * 抽象論でなく「動くものが残る」結果で答える。直後の ServicesSection が "3つの入口"。
 * 重いカードは TRUST に温存するため、ここは quiet-card（軽い面）。
 */
export default function SolutionSection() {
  return (
    <section id="solution" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow={solutionSection.eyebrow}
          title={solutionSection.title}
          subtitle={solutionSection.lead}
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {solutionSection.results.map((r, i) => (
            <ScrollReveal key={i} as="article" delay={i * 80} className="quiet-card p-6">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] font-black text-base mb-5">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                {r.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {r.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 text-center" delay={120}>
          <p className="text-sm sm:text-base text-gray-400">{solutionSection.servicesLeadIn}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

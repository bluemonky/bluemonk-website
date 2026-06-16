import { services } from '@/data/services';
import { servicesSection } from '@/data/home';
import ServiceCard from '@/components/services/ServiceCard';
import SectionHeading from './SectionHeading';
import SectionCta from './SectionCta';
import ScrollReveal from './ScrollReveal';

/**
 * 4. SERVICES — 提供物を 5:3:2 のウェイトで提示。
 * カードの中身は src/data/services/index.ts を単一の正として使用。
 * 研修(primary) は ServiceCard 側で 2 カラム幅になり大きく見える。
 * Server Component。
 */
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 section-rule"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow={servicesSection.eyebrow}
          title={servicesSection.title}
          subtitle={servicesSection.subtitle}
        />

        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ScrollReveal
              key={service.slug}
              delay={i * 120}
              className={`flex ${
                // 研修(主役)は上段フル幅の大タイル、コンサル/開発は下段で等幅2枚。
                // 空白の穴をなくし、サイズ差を保ったまま均整の取れた構成にする。
                service.weight === 'primary' ? 'md:col-span-2' : ''
              }`}
            >
              <ServiceCard
                href={service.href}
                eyebrow={service.eyebrow}
                title={service.title}
                description={service.description}
                weight={service.weight}
                // 研修カードのみ、ハブを経由せず1クリックでフラッグシップ研修へ直行する補助CTA。
                secondaryCta={
                  service.slug === 'training' ? servicesSection.trainingCta : undefined
                }
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center" delay={120}>
          <SectionCta href={servicesSection.cta.href} label={servicesSection.cta.label} />
        </ScrollReveal>
      </div>
    </section>
  );
}

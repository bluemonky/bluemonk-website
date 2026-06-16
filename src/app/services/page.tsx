import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';
import ServiceCard from '@/components/services/ServiceCard';
import ScrollReveal from '@/components/home/ScrollReveal';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'SERVICES | BLUE MONK CONSULTING',
  description:
    'BLUE MONK CONSULTING が提供する3つのサービス - 研修・AI活用DXコンサルティング・開発支援。経営者×エンジニア×MBAの視点で、AIと共に進化する企業をサポートします。',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="SERVICES"
        title="3つのサービスで、AIと共に進化する"
        subtitle="研修・コンサルティング・開発支援。経営判断から実装まで、Blue Monk Consulting は企業のAI活用を一気通貫で支えます。"
      />

      <section className="px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
        {/* ハブ一覧は3枚を等幅に揃える（中身が少なくフル幅だと横長で空くため）。
            研修の主役性は「MAIN SERVICE」ラベルで示す。 */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 120} className="flex">
              <ServiceCard
                href={service.href}
                eyebrow={service.eyebrow}
                title={service.title}
                description={service.description}
                weight={service.weight}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="max-w-3xl mx-auto text-center mt-12 sm:mt-16" delay={120}>
          <p className="text-sm sm:text-base text-gray-400 mb-3">
            各サービスの実績・導入事例は、それぞれの詳細ページの中でご紹介しています。
          </p>
          <p className="text-sm sm:text-base text-gray-400 mb-4">
            どのサービスが合うか迷ったら
          </p>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            まずは <span className="text-[#00d4ff]">Bluemonky</span> に聞いてください。
          </p>
          <Link
            href="/"
            className="btn-ember inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold rounded-full px-6 py-2.5"
          >
            Bluemonky に聞いてみる
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}

import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'CONTACT | BLUE MONK CONSULTING',
  description:
    'BLUE MONK CONSULTING へのお問い合わせ。研修・コンサルティング・開発支援に関するご相談はこちらから。',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="CONTACT"
        title="お問い合わせ"
        subtitle="研修・コンサルティング・開発支援に関するご相談はこちらから。"
      />
      <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-2xl mx-auto glass-card p-8 sm:p-12 text-center">
          <p className="text-sm text-gray-400 mb-3 tracking-wider uppercase">Email</p>
          <a
            href="mailto:aoki@bluemonk.co.jp"
            className="text-xl sm:text-2xl text-[#00d4ff] hover:text-white transition-colors break-all"
          >
            aoki@bluemonk.co.jp
          </a>
          <p className="text-sm text-gray-400 mt-8 leading-relaxed">
            お問い合わせフォームは現在準備中です。<br />
            当面は上記メールアドレスに直接ご連絡ください。
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

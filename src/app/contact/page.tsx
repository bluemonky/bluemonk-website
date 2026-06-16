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
        <div className="max-w-2xl mx-auto card-interactive glass-card p-8 sm:p-12 text-center">
          <div className="relative z-10">
            <p className="text-sm text-gray-400 mb-3 tracking-wider uppercase">Email</p>
            <p className="text-xl sm:text-2xl text-[#00d4ff] mb-8 break-all">
              aoki@bluemonk.co.jp
            </p>
            <a
              href="mailto:aoki@bluemonk.co.jp"
              aria-label="メールで相談する（aoki@bluemonk.co.jp）"
              className="btn-ember inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold rounded-full px-8 py-3.5"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              メールで相談する
            </a>
            <p className="text-sm text-gray-400 mt-8 leading-relaxed">
              お問い合わせフォームは現在準備中です。<br />
              当面は上記メールアドレスに直接ご連絡ください。
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

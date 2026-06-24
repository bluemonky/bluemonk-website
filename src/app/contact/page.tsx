import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import { contactPage } from '@/data/pages';

export const metadata: Metadata = {
  title: '無料相談 | BLUE MONK CONSULTING',
  description:
    'まずは無料で話しましょう。「何から手をつけるべきか」の段階でも構いません。AI活用・DXのご相談を、経営と技術の両面からお受けします。初回相談は無料です。',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  // 件名・本文をプリフィルし、書き出しの負荷を下げる。
  const mailtoHref = `mailto:aoki@bluemonk.co.jp?subject=${encodeURIComponent(
    'AI活用の無料相談（お問い合わせ）',
  )}&body=${encodeURIComponent(
    '▼ご記入のヒント（空欄でも構いません）\n・業種 / 売上規模：\n・いまの困りごと：\n・相談したいこと：\n\n',
  )}`;

  return (
    <PageLayout>
      <PageHero
        eyebrow="CONTACT"
        title={contactPage.heroTitle}
        subtitle={contactPage.heroSubtitle}
      />
      <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-2xl mx-auto card-interactive glass-card p-8 sm:p-12 text-center">
          <div className="relative z-10">
            {/* 相談トピック例（心理ハードルを下げる） */}
            <p className="text-xs font-medium tracking-[0.2em] text-[#00d4ff] uppercase mb-4">
              {contactPage.topicsHeading}
            </p>
            <ul className="inline-flex flex-col gap-2.5 text-left mb-9">
              {contactPage.topics.map((t, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-200">
                  <svg
                    className="w-5 h-5 text-[#00ffcc] shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-400 mb-2 tracking-wider uppercase">
              {contactPage.emailLabel}
            </p>
            <p className="text-xl sm:text-2xl text-[#00d4ff] mb-8 break-all">
              aoki@bluemonk.co.jp
            </p>
            <a
              href={mailtoHref}
              aria-label={`${contactPage.mailtoLabel}（aoki@bluemonk.co.jp）`}
              className="btn-ember inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold rounded-full px-8 py-3.5"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {contactPage.mailtoLabel}
            </a>
            <p className="text-sm text-gray-400 mt-8 leading-relaxed whitespace-pre-line">
              {contactPage.note}
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

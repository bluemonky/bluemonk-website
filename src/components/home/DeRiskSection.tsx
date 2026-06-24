import Link from 'next/link';
import { deriskSection } from '@/data/home';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

/**
 * DE-RISK — 始めやすさ・低リスク（無料相談へ最大化）。
 * 旧 ContactSection の役割を引き継ぐ単一到達点。"話すだけ"の心理ハードルを最小化し、
 * mailto は件名/本文をプリフィルして書き出し負荷を下げる。id=contact を維持。
 */
export default function DeRiskSection() {
  const mailtoHref = `mailto:${deriskSection.email}?subject=${encodeURIComponent(
    'AI活用の無料相談（お問い合わせ）',
  )}&body=${encodeURIComponent(
    '▼ご記入のヒント（空欄でも構いません）\n・業種 / 売上規模：\n・いまの困りごと：\n・相談したいこと：\n\n',
  )}`;

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 section-rule"
    >
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading eyebrow={deriskSection.eyebrow} title={deriskSection.title} />

        <ScrollReveal className="mt-8" delay={120}>
          <ul className="inline-flex flex-col gap-2.5 text-left mb-7">
            {deriskSection.points.map((pt, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm sm:text-base text-gray-200"
              >
                <svg
                  className="w-5 h-5 text-[#00ffcc] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {pt}
              </li>
            ))}
          </ul>

          <p className="text-sm sm:text-base text-gray-400 mb-9 max-w-xl mx-auto leading-relaxed">
            {deriskSection.reassurance}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={mailtoHref}
              className="btn-ember inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full"
            >
              {deriskSection.primaryLabel}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <Link
              href={deriskSection.secondary.href}
              className="text-sm text-gray-500 hover:text-[#00d4ff] transition-colors underline-offset-4 hover:underline"
            >
              {deriskSection.secondary.label}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

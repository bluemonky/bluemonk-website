import { contact } from '@/data/home';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

/**
 * 7. CONTACT（控えめ）— 会社情報サマリー + 小さな相談導線。
 * ブランディング最優先のため最後に・静かに配置。mailto を主導線にする。
 * Server Component。
 */
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-[rgba(0,212,255,0.08)]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          subtitle={contact.description}
        />

        <ScrollReveal className="mt-8 flex flex-col items-center gap-4" delay={120}>
          {/* 主導線: mailto（控えめなアウトラインボタン）。
              メールアドレス全文は出さず「メールで相談する」ラベルにし、モバイルでの折返し崩れを防ぐ。 */}
          <a
            href={`mailto:${contact.email}`}
            aria-label={`メールで相談する（${contact.email}）`}
            className="inline-flex items-center justify-center gap-2 text-sm sm:text-base text-[#00d4ff] border border-[#00d4ff]/40 rounded-full px-6 py-2.5 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] transition-all"
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            メールで相談する
          </a>

          {/* 副導線: 問い合わせページへの静かなリンク */}
          <a
            href={contact.cta.href}
            className="text-xs sm:text-sm text-gray-500 hover:text-[#00d4ff] transition-colors underline-offset-4 hover:underline"
          >
            {contact.cta.label}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

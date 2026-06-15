import ScrollReveal from './ScrollReveal';

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

/**
 * トップ各セクション共通の見出し。
 * - eyebrow: シアンの細字ラベル
 * - title: 明朝・白抜きの大見出し
 * Server Component（内部の ScrollReveal だけが Client 境界）。
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: Props) {
  const isCenter = align === 'center';

  return (
    <ScrollReveal className={isCenter ? 'text-center' : 'text-left'}>
      <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-sm sm:text-base text-gray-300 leading-relaxed ${
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}

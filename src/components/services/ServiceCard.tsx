import Link from 'next/link';

type Props = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  weight: 'primary' | 'secondary';
  /**
   * 任意の補助CTA。primary カードでハブを経由せず直リンクさせたいときに使う
   * （例: 研修 → フラッグシップ研修へ1クリック）。
   * カード全体が Link のため、入れ子の <a> は不可。span + onClick 相当を避け、
   * カードの href と分けるために独立した Link を絶対配置で重ねる。
   */
  secondaryCta?: { label: string; href: string };
};

export default function ServiceCard({
  href,
  eyebrow,
  title,
  description,
  weight,
  secondaryCta,
}: Props) {
  const isPrimary = weight === 'primary';

  return (
    // 入れ子リンク回避のため、外枠は div。主リンクはカード全面を覆う絶対配置の Link。
    <div
      className={`group card-interactive glass-card relative w-full p-6 sm:p-8 flex flex-col ${
        isPrimary ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {/* カード全面を覆う主リンク（補助CTA より背面） */}
      <Link href={href} className="absolute inset-0 z-10" aria-label={`${title}の詳細を見る`} />

      {/* sweep(::after) より前面に内容を置く（テキストの可読性を担保） */}
      <div className="relative z-10 flex flex-1 flex-col pointer-events-none">
        <p className="text-xs font-medium tracking-[0.2em] text-[#00d4ff] uppercase mb-3">
          {eyebrow}
        </p>
        <h3
          className={`serif-display font-semibold text-white mb-4 ${
            isPrimary ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          }`}
        >
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed flex-1">{description}</p>
        <div className="mt-6 flex items-center gap-2 text-sm text-[#00d4ff]">
          <span>詳細を見る</span>
          <svg
            className="w-4 h-4 transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-[#ff8a3c]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

      {/* 補助CTA: 主リンクより前面（z-20）でハブを経由せず直リンク */}
      {secondaryCta && (
        <Link
          href={secondaryCta.href}
          className="relative z-20 mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(0,255,204,0.35)] bg-[rgba(0,255,204,0.06)] px-4 py-2 text-sm text-[#00ffcc] transition-colors hover:bg-[rgba(0,255,204,0.12)] hover:text-white"
        >
          <span>{secondaryCta.label}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      )}
    </div>
  );
}

import Link from 'next/link';

type Props = {
  href: string;
  label: string;
};

/**
 * セクション末尾の控えめなテキストCTA。
 * ブランディング最優先のため、塗りボタンではなく下線+矢印の静かな導線にする。
 */
export default function SectionCta({ href, label }: Props) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm sm:text-base text-[#00d4ff] hover:text-white transition-colors"
    >
      <span className="border-b border-[#00d4ff]/40 group-hover:border-white pb-0.5 transition-colors">
        {label}
      </span>
      <svg
        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </Link>
  );
}

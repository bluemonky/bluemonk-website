import Link from 'next/link';

type Props = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  weight: 'primary' | 'secondary';
};

export default function ServiceCard({ href, eyebrow, title, description, weight }: Props) {
  const isPrimary = weight === 'primary';

  return (
    <Link
      href={href}
      className={`group glass-card p-6 sm:p-8 flex flex-col transition-all hover:border-[#00d4ff]/60 hover:-translate-y-1 ${
        isPrimary ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      <p className="text-xs font-medium tracking-[0.2em] text-[#00d4ff] uppercase mb-3">
        {eyebrow}
      </p>
      <h3
        className={`font-bold text-white mb-4 ${
          isPrimary ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
        }`}
      >
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed flex-1">{description}</p>
      <div className="mt-6 flex items-center gap-2 text-sm text-[#00d4ff] group-hover:gap-3 transition-all">
        <span>詳細を見る</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </Link>
  );
}

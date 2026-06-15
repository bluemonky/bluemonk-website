import Link from 'next/link';

type Props = {
  message?: string;
};

export default function ComingSoon({ message }: Props) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
      <div className="max-w-3xl mx-auto text-center">
        <div className="glass-card p-8 sm:p-12">
          <div className="inline-block mb-6">
            <span className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase border border-[#00d4ff]/50 rounded-full px-4 py-1.5">
              Coming Soon
            </span>
          </div>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
            {message ?? 'このページは現在準備中です。近日公開予定。'}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#00d4ff] hover:gap-3 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>トップに戻る</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

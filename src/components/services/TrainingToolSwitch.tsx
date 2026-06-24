import Link from 'next/link';
import { trainingTools } from '@/data/services/training-tools';
import ToolMark from './ToolMark';

/**
 * 研修ツール切替バンド（ChatGPT / Claude / Gemini の相互導線）。
 *
 * - 各研修ページの下部に置き、「他のツールの研修」へ自然に遷移できるようにする。
 * - current で表示中のプログラムを示す（リンクにせず「表示中」表記）。
 * - 既存の軽量語彙（quiet-card / section-rule / serif-display）で統一。
 */
export default function TrainingToolSwitch({
  current,
}: {
  current?: 'chatgpt' | 'claude' | 'gemini';
}) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 section-rule">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3 text-center">
          Training Programs
        </p>
        <h2 className="serif-display text-2xl sm:text-3xl font-semibold text-center mb-3 leading-snug">
          ツールに合わせて、選べます。
        </h2>
        <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto mb-10">
          ChatGPT を中心に、Claude・Gemini にも同等の実践カリキュラムで対応します。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {trainingTools.map((t) => {
            const isCurrent = t.slug === current;
            const body = (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <ToolMark slug={t.slug} />
                  <span className="text-lg sm:text-xl font-bold text-white">{t.name}</span>
                  {t.flagship && (
                    <span className="text-[0.6rem] tracking-[0.15em] text-[#00d4ff] border border-[#00d4ff]/30 rounded-full px-2 py-0.5">
                      FLAGSHIP
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-4 min-h-[2.5rem]">
                  {t.tagline}
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 text-sm ${
                    isCurrent ? 'text-gray-500' : 'text-[#00d4ff]'
                  }`}
                >
                  {isCurrent ? '表示中のプログラム' : '研修を見る'}
                  {!isCurrent && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  )}
                </span>
              </>
            );

            return isCurrent ? (
              <div
                key={t.slug}
                className="quiet-card p-5 sm:p-6 ring-1 ring-[#00d4ff]/25"
                style={{ borderTopColor: t.accent, borderTopWidth: '2px' }}
                aria-current="page"
              >
                {body}
              </div>
            ) : (
              <Link
                key={t.slug}
                href={t.href}
                className="quiet-card block p-5 sm:p-6"
                style={{ borderTopColor: t.accent, borderTopWidth: '2px' }}
              >
                {body}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

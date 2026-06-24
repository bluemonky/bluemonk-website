import { trainingTools } from '@/data/services/training-tools';

type Slug = 'chatgpt' | 'claude' | 'gemini';

/**
 * ツール識別マーク。
 *
 * 注: 公式ロゴ（ChatGPT / Claude / Gemini）は商標物のため再現しない。各ツールの「機能」を
 * 表すオリジナルのアウトラインアイコン＋ブランドアクセント色で、スペルが似ていても一目で
 * 見分けられるよう強く差別化する:
 *   ChatGPT = 対話の吹き出し ／ Claude = 長文ドキュメント ／ Gemini = スパークル。
 * 公式ロゴ画像を用意したら、本コンポーネントを next/image 版に差し替えれば全箇所へ反映される。
 */
function iconPath(slug: Slug): string {
  switch (slug) {
    case 'chatgpt':
      // 対話の吹き出し（message-circle）
      return 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z';
    case 'claude':
      // 長文ドキュメント（file-text）
      return 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8';
    case 'gemini':
      // スパークル（4点星）
      return 'M12 3 13.6 8.4 19 10 13.6 11.6 12 17 10.4 11.6 5 10 10.4 8.4 Z';
  }
}

type Props = {
  slug: Slug;
  /** バッジのサイズ（Tailwind の w-/h-）。 */
  className?: string;
};

export default function ToolMark({ slug, className = 'w-11 h-11' }: Props) {
  const accent = trainingTools.find((t) => t.slug === slug)?.accent ?? '#00d4ff';
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-xl border ${className}`}
      style={{ backgroundColor: `${accent}26`, borderColor: `${accent}80` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-3/5 h-3/5"
        fill="none"
        stroke={accent}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={iconPath(slug)} />
      </svg>
    </span>
  );
}

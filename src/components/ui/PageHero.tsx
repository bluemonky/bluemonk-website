type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

/**
 * 下層ページ共通の HERO。TOP の「発光する禅」と同質の入場を与える。
 * - LCP はテキスト見出し（画像なし）。入場は CSS のみ（`hero-in` + `--hero-delay`）。
 * - eyebrow → 見出し → サブの順に静かに立ち上がる（短時間・上品なイージング）。
 * - prefers-reduced-motion は globals.css 側で `hero-in` を即時表示に上書き。
 */
export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <div className="max-w-5xl mx-auto text-center">
        {eyebrow && (
          <p
            className="hero-in flex items-center justify-center gap-3 text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] mb-5 uppercase"
            style={{ '--hero-delay': '60ms' } as React.CSSProperties}
          >
            <span className="w-6 h-px bg-[#00d4ff]/50" aria-hidden="true" />
            {eyebrow}
            <span className="w-6 h-px bg-[#00d4ff]/50" aria-hidden="true" />
          </p>
        )}
        <h1
          className="hero-in serif-display page-hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.25] mb-6"
          style={{ '--hero-delay': '160ms' } as React.CSSProperties}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="hero-in text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            style={{ '--hero-delay': '300ms' } as React.CSSProperties}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

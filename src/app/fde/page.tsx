import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ScrollReveal from '@/components/home/ScrollReveal';
import { fde } from '@/data/fde';

export const metadata: Metadata = {
  title: 'FDE（Forward Deployed Engineer）| BLUE MONK CONSULTING',
  description:
    'コンサルで終わらせない。動くまで、つくる。FDE（Forward Deployed Engineer）＝現場に入り込み、実装して動くまで伴走するAIエンジニア。AX/DXコンサルと開発・実装を一体で、課題の発見から運用・内製化まで責任を持って伴走します。',
  alternates: { canonical: '/fde' },
};

type Bullet = { title: string; desc: string };
type CompareRow = { name: string; label?: string; body: string; feature?: boolean };

/** 左寄せの編集的な見出し（章番号 01– ＋ 細ラベル ＋ 明朝タイトル）。 */
function BlockHeader({ num, eyebrow, title }: { num: string; eyebrow: string; title: string }) {
  return (
    <ScrollReveal>
      <div className="flex items-center gap-3 mb-4">
        <span className="section-index">{num}</span>
        <span className="label-fine">{eyebrow}</span>
      </div>
      <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
        {title}
      </h2>
    </ScrollReveal>
  );
}

function Paragraphs({ items, className = '' }: { items: readonly string[]; className?: string }) {
  if (!items.length) return null;
  return (
    <ScrollReveal className={`mt-8 space-y-5 ${className}`} delay={120}>
      {items.map((p, i) =>
        p.startsWith('※') ? (
          <p key={i} className="text-sm text-gray-400 leading-relaxed">
            {p}
          </p>
        ) : (
          <p key={i} className="text-base sm:text-lg text-gray-300 leading-loose">
            {p}
          </p>
        ),
      )}
    </ScrollReveal>
  );
}

export default function FdePage() {
  return (
    <PageLayout>
      {/* HERO 背後の単点グロー */}
      <div
        className="absolute inset-x-0 top-0 h-[520px] overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="glow-spot left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 w-[clamp(280px,42vw,560px)] h-[clamp(280px,42vw,560px)]" />
      </div>

      <div className="relative">
        <PageHero
          eyebrowLarge
          eyebrow={fde.hero.eyebrow}
          title={fde.hero.headline}
          subtitle={
            <>
              <span className="whitespace-pre-line">{fde.hero.subPre}</span>
              <span className="block my-3 text-lg sm:text-xl font-medium text-[#cfeeff] tracking-wide">
                {/* 各要素は語の途中で折らず、必要なら「 × 」の位置でのみ改行する。 */}
                {fde.hero.subEmphasis.split(' × ').map((seg, i, arr) => (
                  <span key={i}>
                    <span className="whitespace-nowrap">{seg}</span>
                    {i < arr.length - 1 && ' × '}
                  </span>
                ))}
              </span>
              {fde.hero.subPost}
            </>
          }
        />

        {fde.blocks.map((block, i) => {
          const num = String(i + 1).padStart(2, '0');
          const isPlane = i % 2 === 1;
          const bullets = block.bullets as readonly Bullet[];
          const comparison = (block as { comparison?: readonly CompareRow[] }).comparison;
          const key = block.key;

          // レイアウトごとにコンテナ幅を変え、縦スクロールに変化を出す。
          const width =
            key === 'difference' || key === 'process'
              ? 'max-w-4xl'
              : bullets.length > 0
                ? 'max-w-5xl'
                : 'max-w-3xl';

          return (
            <section
              key={key}
              className={`relative section-rule ${
                isPlane ? 'section-plane ' : ''
              }px-4 sm:px-6 lg:px-8 py-16 sm:py-20`}
            >
              <div className={`mx-auto ${width}`}>
                <BlockHeader num={num} eyebrow={block.eyebrow} title={block.title} />

                {/* 比較（4類型）= 罫線の比較行 */}
                {key === 'difference' && comparison ? (
                  <>
                    <Paragraphs items={block.paragraphs.slice(0, 1)} className="prose-measure--wide" />
                    <ScrollReveal className="mt-10 compare-table" delay={120}>
                      {comparison.map((c) => (
                        <div
                          key={c.name}
                          className="compare-row"
                          data-feature={c.feature ? 'true' : undefined}
                        >
                          <div className="compare-row__name">
                            {c.name}
                            {c.label && <small>{c.label}</small>}
                          </div>
                          <div className="compare-row__body">{c.body}</div>
                        </div>
                      ))}
                    </ScrollReveal>
                    <Paragraphs items={block.paragraphs.slice(1)} className="prose-measure--wide" />
                  </>
                ) : key === 'process' ? (
                  /* 手順 = 番号付きの縦ステップレール */
                  <>
                    <Paragraphs items={block.paragraphs} className="prose-measure--wide" />
                    <ScrollReveal className="mt-10" delay={120}>
                      <ol className="step-rail">
                        {bullets.map((b, bi) => (
                          <li key={bi} className="step-item">
                            <span className="step-num" aria-hidden="true">
                              {String(bi + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                              {b.title.replace(/^\d+[\s　]*/, '')}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed prose-measure">
                              {b.desc}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </ScrollReveal>
                  </>
                ) : key === 'proof' ? (
                  /* 実績 = 準備中(DRAFT)の注記 */
                  <>
                    <Paragraphs items={block.paragraphs} className="prose-measure--wide" />
                    <ScrollReveal className="mt-6" delay={120}>
                      <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-[#ff8a3c]/55 pl-4 prose-measure--wide">
                        ※ このセクションは準備中です（DRAFT）。固有の事例・数値は、確定情報のみを掲載する方針のため、確定後に出典とともに公開します。
                      </p>
                    </ScrollReveal>
                  </>
                ) : key === 'value' || key === 'target' || key === 'faq' ? (
                  /* 一覧/FAQ = 箱を持たないヘアライン行 */
                  <>
                    <Paragraphs items={block.paragraphs} className="prose-measure--wide" />
                    <ScrollReveal className="mt-8" delay={120}>
                      <ul className="hairline-list">
                        {bullets.map((b, bi) => (
                          <li key={bi} className="hairline-row">
                            <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 leading-snug">
                              {b.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed prose-measure--wide">
                              {b.desc}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </ScrollReveal>
                  </>
                ) : bullets.length > 0 ? (
                  /* 提供/体制 = 軽い quiet-card のグリッド */
                  <>
                    <Paragraphs items={block.paragraphs} className="prose-measure--wide" />
                    <div
                      className={`mt-10 grid grid-cols-1 ${
                        key === 'team' ? 'md:grid-cols-3' : 'md:grid-cols-2'
                      } gap-4 sm:gap-5`}
                    >
                      {bullets.map((b, bi) => (
                        <ScrollReveal
                          key={bi}
                          as="article"
                          delay={(bi % 2) * 100}
                          className="quiet-card p-5 sm:p-6"
                        >
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-snug">
                            {b.title}
                          </h3>
                          <p className="text-sm text-gray-300 leading-relaxed">{b.desc}</p>
                        </ScrollReveal>
                      ))}
                    </div>
                  </>
                ) : (
                  /* テキストのみ = 読み物（行長を締める） */
                  <Paragraphs items={block.paragraphs} className="prose-measure--wide" />
                )}
              </div>
            </section>
          );
        })}

        {/* CLOSING — 静かな導線 */}
        <section className="relative section-rule overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="glow-spot left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(280px,36vw,480px)] h-[clamp(280px,36vw,480px)]" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="label-fine mb-4">{fde.closing.eyebrow}</p>
              <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-6">
                {fde.closing.title}
              </h2>
              {fde.closing.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10"
                >
                  {p}
                </p>
              ))}
            </ScrollReveal>
            <ScrollReveal
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              delay={120}
            >
              <Link
                href={fde.closing.primary.href}
                className="btn-ember inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-3.5"
              >
                {fde.closing.primary.label}
              </Link>
              <Link
                href={fde.closing.secondary.href}
                className="inline-flex items-center gap-2 text-gray-200 font-semibold px-8 py-3.5 rounded-full border border-white/20 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all"
              >
                {fde.closing.secondary.label}
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

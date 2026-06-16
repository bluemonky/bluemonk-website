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

/**
 * /fde — FDE（Forward Deployed Engineer）を主役に据えたフラッグシップページ。
 * コンテンツは src/data/fde.ts に分離（DRAFT / 要確認）。発光する禅トーンに準拠。
 */
export default function FdePage() {
  return (
    <PageLayout>
      {/* HERO 背後の単点グロー（一点だけ） */}
      <div
        className="absolute inset-x-0 top-0 h-[520px] overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="glow-spot left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 w-[clamp(280px,42vw,560px)] h-[clamp(280px,42vw,560px)]" />
      </div>

      <div className="relative">
        <PageHero
          eyebrow={fde.hero.eyebrow}
          title={fde.hero.headline}
          subtitle={fde.hero.sub}
        />

        {fde.blocks.map((block, i) => {
          const isPlane = i % 2 === 1;
          const hasBullets = block.bullets.length > 0;
          return (
            <section
              key={block.key}
              className={`relative section-rule ${
                isPlane ? 'section-plane ' : ''
              }px-4 sm:px-6 lg:px-8 py-16 sm:py-20`}
            >
              <div className={`mx-auto ${hasBullets ? 'max-w-6xl' : 'max-w-3xl'}`}>
                <ScrollReveal className={hasBullets ? 'text-center' : ''}>
                  <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-3">
                    {block.eyebrow}
                  </p>
                  <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
                    {block.title}
                  </h2>
                </ScrollReveal>

                {/* 本文の段落（※始まりは注記として控えめに） */}
                {block.paragraphs.length > 0 && (
                  <ScrollReveal
                    className={`mt-8 space-y-5 ${hasBullets ? 'max-w-3xl mx-auto text-center' : ''}`}
                    delay={120}
                  >
                    {block.paragraphs.map((p, pi) =>
                      p.startsWith('※') ? (
                        <p key={pi} className="text-sm text-gray-400 leading-relaxed">
                          {p}
                        </p>
                      ) : (
                        <p
                          key={pi}
                          className="text-base sm:text-lg text-gray-300 leading-loose"
                        >
                          {p}
                        </p>
                      ),
                    )}
                  </ScrollReveal>
                )}

                {/* 箇条書き＝カード */}
                {hasBullets && !block.isDraft && (
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {block.bullets.map((b, bi) => (
                      <ScrollReveal
                        key={bi}
                        as="article"
                        delay={(bi % 2) * 100}
                        className="card-interactive glass-card p-6 sm:p-7"
                      >
                        <div className="relative z-10">
                          <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 leading-snug">
                            {b.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                            {b.desc}
                          </p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                )}

                {/* 実績(proof)= DRAFT。準備中の注記ボックスで明示（数値・固有事例は出さない）。 */}
                {block.isDraft && (
                  <ScrollReveal className="mt-8" delay={120}>
                    <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-[#ff8a3c]/55 pl-4">
                      ※ このセクションは準備中です（DRAFT）。固有の事例・数値は、確定情報のみを掲載する方針のため、確定後に出典とともに公開します。
                    </p>
                  </ScrollReveal>
                )}
              </div>
            </section>
          );
        })}

        {/* CLOSING — 静かな導線（問い合わせ最優先にしない） */}
        <section className="relative section-rule overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            aria-hidden="true"
          >
            <div className="glow-spot left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(280px,36vw,480px)] h-[clamp(280px,36vw,480px)]" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#00d4ff] uppercase mb-4">
                {fde.closing.eyebrow}
              </p>
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

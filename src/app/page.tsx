import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import ProofSection from '@/components/home/ProofSection';
import ServicesSection from '@/components/home/ServicesSection';
import VoiceSection from '@/components/home/VoiceSection';
import InsightsSection from '@/components/home/InsightsSection';
import ContactSection from '@/components/home/ContactSection';

// TOP 固有のメタデータ。title は layout の template を使わず default を維持したいため
// 文字列で上書きせず、layout 既定（title.default）をそのまま使う想定で description/canonical のみ補強。
export const metadata: Metadata = {
  title: '人とAIと共に進化する企業へ',
  description:
    '人とAIと共に進化する企業へ。共創が生み出す変革と未来。経営者×ITエンジニア×MBAの視点で、研修・コンサルティング・開発支援を通じて企業のAI活用を支えます。',
  alternates: {
    canonical: '/',
  },
};

/**
 * トップページ（7セクション）— コンセプト「発光する禅」。
 * 情報順序: 思想 → 実績 → 提供物。
 * HERO は全幅・余白多めの没入体験。以降はスクロールでゆっくりリビール。
 *
 * 1. HERO            : 主見出し(明朝・白抜き) + BLUE MONK 対話UI 常駐
 * 2. PHILOSOPHY 抜粋 : 思想の核を3キーワードで（DRAFT）
 * 3. PROOF           : 実在事例カード2件 + 確定ファクトのバッジ（ダミー数字は出さない）
 * 4. SERVICES        : 5:3:2 のウェイトで提供物
 * 5. VOICE OF BLUE MONK : マスコットからのメッセージ
 * 6. INSIGHTS        : Coming Soon 枠
 * 7. CONTACT（控えめ）: mailto 主導線
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <HeroSection />
        <PhilosophySection />
        {/* PROOF: ダミー数字は出さず、実在事例カード + 確定ファクトのバッジで信頼を示す。 */}
        <ProofSection />
        <ServicesSection />
        <VoiceSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

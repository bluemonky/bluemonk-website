import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import ServicesSection from '@/components/home/ServicesSection';
import VoiceSection from '@/components/home/VoiceSection';
import InsightsSection from '@/components/home/InsightsSection';
import ContactSection from '@/components/home/ContactSection';

/**
 * トップページ（7セクション）— コンセプト「発光する禅」。
 * 情報順序: 思想 → 実績 → 提供物。
 * HERO は全幅・余白多めの没入体験。以降はスクロールでゆっくりリビール。
 *
 * 1. HERO            : 主見出し(明朝・白抜き) + BLUE MONK 対話UI 常駐
 * 2. PHILOSOPHY 抜粋 : 思想の核を3キーワードで（DRAFT）
 * 3. PROOF           : 実績数字（DRAFT）
 * 4. SERVICES        : 5:3:2 のウェイトで提供物
 * 5. VOICE OF BLUE MONK : マスコットからのメッセージ
 * 6. INSIGHTS        : Coming Soon 枠
 * 7. CONTACT（控えめ）: mailto 主導線
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PhilosophySection />
        {/* PROOF: 実績数字が DRAFT（00社/000名）のため本番では一旦非表示。実数字が確定したら <ProofSection /> を復活する。 */}
        <ServicesSection />
        <VoiceSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PainSection from '@/components/home/PainSection';
import SolutionSection from '@/components/home/SolutionSection';
import ServicesSection from '@/components/home/ServicesSection';
import TrustSection from '@/components/home/TrustSection';
import ProofSection from '@/components/home/ProofSection';
import DeRiskSection from '@/components/home/DeRiskSection';
import MoreToKnowSection from '@/components/home/MoreToKnowSection';

// TOP 固有のメタデータ。title はブランドキャッチを維持（HEROキャッチは残す方針）。
export const metadata: Metadata = {
  title: '人とAIと共に進化する企業へ',
  description:
    '人とAIと共に進化する企業へ。共創が生み出す変革と未来。経営者×ITエンジニア×MBAが、構想から実装・定着まで一人で伴走。非IT系の中堅企業のAI活用を、動く成果まで支えます。',
  alternates: {
    canonical: '/',
  },
};

/**
 * トップページ — コンセプト「発光する禅」／用件本位の導線（2026-06 更新）。
 *
 * 主役の訪問者＝売上10〜600億円・非IT系の中堅企業の経営者/意思決定者。到達点＝まずは無料相談。
 * 情報順序を「思想→実績→提供物」から「ユーザーの問い → 解決 → 信頼 → 行動」へ反転:
 *   HERO → PAIN（あなたの状況）→ SOLUTION（得られる結果）→ SERVICES（3つの入口）
 *   → TRUST（なぜ任せられるか）→ PROOF（確定事実）→ DE-RISK（無料相談）→ もっと知りたい人へ。
 * 思想・3CX は一次ナビから外し、MoreToKnow / フッター / 各ページ末から到達できる裏付け層へ退避。
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <HeroSection />
        <PainSection />
        <SolutionSection />
        {/* SERVICES: 解決の "3つの入口"（FDE / AXコンサル / 研修） */}
        <ServicesSection />
        {/* TRUST: 丸投げ不安への答え＝home の主役カードをここにスコープ */}
        <TrustSection />
        {/* PROOF: 数値は捏造せず、実在事例＋確定ファクトで補強 */}
        <ProofSection />
        {/* DE-RISK: 単一到達点「まずは無料相談（話すだけ）」。旧 ContactSection を継承 */}
        <DeRiskSection />
        {/* もっと知りたい人へ: 思想・3CX・会社 の裏付け層への入口 */}
        <MoreToKnowSection />
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ComingSoon from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: 'WORKS | BLUE MONK CONSULTING',
  description:
    'BLUE MONK CONSULTING の実績・事例。研修・コンサルティング・開発支援における具体的な成果をご紹介します。',
};

export default function WorksPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="WORKS"
        title="成果で語る、AI活用の実力。"
        subtitle="これまでに手掛けた研修・コンサルティング・開発支援の実績をご紹介します。"
      />
      <ComingSoon message="実績ページは現在準備中です。近日、研修実績と導入事例を公開予定です。" />
    </PageLayout>
  );
}

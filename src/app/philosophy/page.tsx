import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ComingSoon from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: 'PHILOSOPHY | BLUE MONK CONSULTING',
  description:
    'BLUE MONK CONSULTING の思想。経営者×エンジニア×MBAの視点で、人とAIが共に進化する世界を描きます。',
};

export default function PhilosophyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="PHILOSOPHY"
        title="人とAIが、共に進化する世界へ。"
        subtitle="BLUE MONK CONSULTING の思想。"
      />
      <ComingSoon message="思想ページは現在準備中です。近日、Blue Monk Consulting が大切にしている考え方を公開予定です。" />
    </PageLayout>
  );
}

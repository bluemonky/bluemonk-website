import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ComingSoon from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: 'ABOUT | BLUE MONK CONSULTING',
  description:
    '株式会社ブルーモンクコンサルティングと代表者プロフィール。経営者×エンジニア×MBA の視点で、企業のAI活用を支えます。',
};

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="ABOUT"
        title="株式会社ブルーモンクコンサルティング"
        subtitle="経営者 × ITエンジニア × MBA — 3つの経験が生み出す実行力で、企業のAI活用を支えます。"
      />
      <ComingSoon message="会社情報と代表者プロフィールの詳細ページは現在準備中です。" />
    </PageLayout>
  );
}

import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ComingSoon from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: 'INSIGHTS | BLUE MONK CONSULTING',
  description:
    'BLUE MONK CONSULTING の思想発信。AI活用・DX・経営に関する記事や動画をお届けします。',
};

export default function InsightsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="INSIGHTS"
        title="AI時代の経営を、言葉で。"
        subtitle="BLUE MONK が発信する AI活用・DX・経営の視点。"
      />
      <ComingSoon message="記事・動画・Note等の思想発信ページは現在準備中です。" />
    </PageLayout>
  );
}

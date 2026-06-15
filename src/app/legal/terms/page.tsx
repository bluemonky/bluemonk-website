import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ComingSoon from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: '利用規約 | BLUE MONK CONSULTING',
  description: 'BLUE MONK CONSULTING の利用規約。',
};

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="LEGAL" title="利用規約" />
      <ComingSoon message="利用規約は現在準備中です。" />
    </PageLayout>
  );
}

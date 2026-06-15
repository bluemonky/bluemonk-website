import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ComingSoon from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | BLUE MONK CONSULTING',
  description: 'BLUE MONK CONSULTING のプライバシーポリシー。',
};

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="LEGAL" title="プライバシーポリシー" />
      <ComingSoon message="プライバシーポリシーは現在準備中です。" />
    </PageLayout>
  );
}

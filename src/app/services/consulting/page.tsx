import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ComingSoon from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: 'コンサルティング | BLUE MONK CONSULTING',
  description:
    'AI活用DX・戦略伴走コンサルティング。経営課題から逆算し、AIをどこにどう使うかを一緒に設計します。',
};

export default function ConsultingPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="CONSULTING"
        title="AIをどこに使うか、から考える。"
        subtitle="経営課題から逆算して、AI活用戦略を描き、実行まで伴走します。"
      />
      <ComingSoon message="コンサルティングサービスの詳細ページは現在準備中です。具体的なご相談はお問い合わせください。" />
    </PageLayout>
  );
}

import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ComingSoon from '@/components/ui/ComingSoon';

export const metadata: Metadata = {
  title: '開発支援 | BLUE MONK CONSULTING',
  description:
    'MCP・RAG・生成AIアプリケーションの実装支援。現場の課題に合わせた独自のAIソリューションを提供します。',
};

export default function DevelopmentPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="DEVELOPMENT"
        title="独自のAIソリューションを、共に作る。"
        subtitle="MCP・RAG・生成AIアプリケーション。現場の課題に合わせた実装支援を、設計から運用まで一気通貫で。"
      />
      <ComingSoon message="開発支援サービスの詳細ページは現在準備中です。具体的なご相談はお問い合わせください。" />
    </PageLayout>
  );
}

import type { Metadata } from 'next';
import ToolTrainingProgram from '@/components/services/ToolTrainingProgram';
import { claude } from '@/data/services/training-tools';

export const metadata: Metadata = {
  title: 'Claude活用研修 | BLUE MONK CONSULTING',
  description:
    '長文読解・緻密な文章作成・安全性に強い Claude を、業務の実務に活かすビジネスリーダー向け研修。ChatGPT研修と同等の実践カリキュラムを Claude 向けに提供します。助成金活用可。',
  alternates: { canonical: '/services/training/claude' },
};

export default function ClaudeTrainingPage() {
  return <ToolTrainingProgram tool={claude} />;
}

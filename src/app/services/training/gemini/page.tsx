import type { Metadata } from 'next';
import ToolTrainingProgram from '@/components/services/ToolTrainingProgram';
import { gemini } from '@/data/services/training-tools';

export const metadata: Metadata = {
  title: 'Gemini活用研修 | BLUE MONK CONSULTING',
  description:
    'Google Workspace 連携・マルチモーダル・最新情報に強い Gemini を、日常業務に活かすビジネスリーダー向け研修。ChatGPT研修と同等の実践カリキュラムを Gemini 向けに提供します。助成金活用可。',
  alternates: { canonical: '/services/training/gemini' },
};

export default function GeminiTrainingPage() {
  return <ToolTrainingProgram tool={gemini} />;
}

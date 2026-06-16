// サービスは3本柱: FDE(主役) / AXコンサル / 研修。
// 開発支援は FDE（現場常駐型の伴走実装）へ発展（/services/development は /fde へリダイレクト）。
export type ServiceCategory = 'fde' | 'consulting' | 'training';

export type ServiceSummary = {
  slug: ServiceCategory;
  eyebrow: string;
  title: string;
  description: string;
  weight: 'primary' | 'secondary';
  href: string;
};

export const services: ServiceSummary[] = [
  {
    slug: 'fde',
    eyebrow: 'MAIN SERVICE',
    title: 'FDE（伴走型AIエンジニア）',
    description:
      '現場に入り込み、実装して動くまで伴走するAIエンジニア（Forward Deployed Engineer）。AX/DXコンサルと開発・実装を一体で担い、提案で終わらせず「現場で使われ、成果が出る状態」まで責任を持ちます。',
    weight: 'primary',
    href: '/fde',
  },
  {
    slug: 'consulting',
    eyebrow: 'AX CONSULTING',
    title: 'AXコンサル（AI活用DX・戦略伴走）',
    description:
      '「AIをどこに・どう使えば事業が前に進むか」を経営課題から逆算して描く、AIトランスフォーメーションの戦略伴走。方針づくりから整理したい段階のご相談に。',
    weight: 'secondary',
    href: '/services/consulting',
  },
  {
    slug: 'training',
    eyebrow: 'TRAINING',
    title: '研修（ChatGPT活用）',
    description:
      '生成AIを現場で使いこなすためのビジネスリーダー向け研修。経営判断とチームマネジメントに使えるAI活用術を実践的に学びます。助成金の活用が可能です。',
    weight: 'secondary',
    href: '/services/training',
  },
];

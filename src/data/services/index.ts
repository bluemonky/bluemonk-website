export type ServiceCategory = 'training' | 'consulting' | 'development';

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
    slug: 'training',
    eyebrow: 'MAIN SERVICE',
    title: '研修',
    description:
      '生成AIを現場で使いこなすためのビジネスリーダー向け研修。ChatGPTを中心に、経営判断とチームマネジメントに使えるAI活用術を実践的に学びます。',
    weight: 'primary',
    href: '/services/training',
  },
  {
    slug: 'consulting',
    eyebrow: 'CONSULTING',
    title: 'AI活用DX・戦略伴走',
    description:
      '「AIをどこに使うべきか」の判断から、具体的な業務フローの設計・導入まで。経営課題に直結するDX戦略を伴走型でサポートします。',
    weight: 'secondary',
    href: '/services/consulting',
  },
  {
    slug: 'development',
    eyebrow: 'DEVELOPMENT',
    title: '開発支援',
    description:
      'MCP・RAG・生成AIアプリケーションの実装支援。現場の課題に合わせた独自のAIソリューションを、アーキテクチャ設計から運用まで一気通貫で提供します。',
    weight: 'secondary',
    href: '/services/development',
  },
];

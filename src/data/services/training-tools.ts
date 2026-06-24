/**
 * ツール別 生成AI活用研修（Claude / Gemini）のコンテンツデータ。
 *
 * 位置づけ:
 * - 研修のフラッグシップ（詳細カリキュラム）は ChatGPT 研修（training-chatgpt.ts）。
 * - カリキュラム（プロンプト設計・業務活用・チームマネジメント）は本質的にツール非依存。
 *   そのため各ツールページは「そのツールの強み」＋「ChatGPT研修と同等のカリキュラム」へ
 *   集約し、講義・時間割の詳細はフラッグシップに誘導する（重複・捏造を避ける）。
 *
 * 【DRAFT】各ツールの打ち出し・強みコピーはすべて「たたき台」。事実（受講者数・成果％・
 * 固有事例）は記載しない。本人確定後に調整・公開すること。
 */

export type ToolStrength = {
  title: string;
  description: string;
};

export type ToolTraining = {
  slug: 'claude' | 'gemini';
  eyebrow: string; // 例: 'CLAUDE TRAINING'
  toolName: string; // 'Claude' / 'Gemini'
  hero: { title: string; subtitle: string };
  whyTitle: string;
  strengths: ToolStrength[];
  curriculum: { title: string; body: string; flagshipLabel: string };
  cta: { title: string; body: string };
};

// ==========================================================================
// Claude（長文・推論・業務文書・安全性）
// ==========================================================================
// DRAFT: 要確認（たたき台）
export const claude: ToolTraining = {
  slug: 'claude',
  eyebrow: 'CLAUDE TRAINING',
  toolName: 'Claude',
  hero: {
    // 見出しは whitespace-pre-line で改行
    title: 'Claudeを使いこなす、\nビジネスリーダー研修',
    subtitle:
      '長い文書の読み込みと要約、緻密な文章作成、安全性の高い業務利用に強い Claude。その特性を、現場の実務にどう活かすかを実践的に学びます。',
  },
  whyTitle: 'なぜ、Claude なのか。',
  strengths: [
    {
      title: '長い文書を、まるごと扱える',
      description:
        '大量の資料・契約書・議事録を一度に読み込み、要点抽出や横断的な比較ができる。情報量の多い実務に向きます。',
    },
    {
      title: '緻密で自然な文章作成',
      description:
        '提案書・社内文書・メールなど、トーンを整えた長文の作成と推敲に強い。文章の品質を重視する業務に。',
    },
    {
      title: '落ち着いた推論と安全性',
      description:
        '指示への忠実さと慎重な応答設計。業務で扱いやすく、社内展開時の安心感を重視する組織に向きます。',
    },
  ],
  curriculum: {
    title: 'カリキュラムは、ChatGPT研修と同等。',
    body: 'プロンプト設計から業務活用・チームマネジメントまで、フラッグシップの ChatGPT 研修と同じ実践カリキュラムを、Claude の特性に合わせて提供します。講義構成・時間割の詳細は、ChatGPT 研修ページをご覧ください。',
    flagshipLabel: 'ChatGPT研修のカリキュラム・時間割を見る',
  },
  cta: {
    title: 'Claude 研修について、相談する。',
    body: '貴社の業務・体制に合わせて、Claude を使った研修の進め方をご提案します。助成金の活用も可能です。',
  },
};

// ==========================================================================
// Gemini（Google Workspace 連携・マルチモーダル・最新情報）
// ==========================================================================
// DRAFT: 要確認（たたき台）
export const gemini: ToolTraining = {
  slug: 'gemini',
  eyebrow: 'GEMINI TRAINING',
  toolName: 'Gemini',
  hero: {
    title: 'Geminiを使いこなす、\nビジネスリーダー研修',
    subtitle:
      'Google Workspace との連携、画像・音声まで扱うマルチモーダル、最新情報の参照に強い Gemini。Google 環境の日常業務に溶け込ませる使い方を、実践的に学びます。',
  },
  whyTitle: 'なぜ、Gemini なのか。',
  strengths: [
    {
      title: 'Google Workspace と一体で使える',
      description:
        'Gmail・ドキュメント・スプレッドシート・スライドなど、日常の Google 業務にそのまま組み込めます。',
    },
    {
      title: 'マルチモーダル（画像・音声も）',
      description:
        'テキストだけでなく、画像や資料・音声を含む入力に対応。現場の多様な素材をそのまま扱えます。',
    },
    {
      title: '最新情報に強い',
      description:
        'Google の検索基盤を背景に、新しい情報を踏まえた回答を得やすい。調査・情報収集の実務に向きます。',
    },
  ],
  curriculum: {
    title: 'カリキュラムは、ChatGPT研修と同等。',
    body: 'プロンプト設計から業務活用・チームマネジメントまで、フラッグシップの ChatGPT 研修と同じ実践カリキュラムを、Gemini の特性に合わせて提供します。講義構成・時間割の詳細は、ChatGPT 研修ページをご覧ください。',
    flagshipLabel: 'ChatGPT研修のカリキュラム・時間割を見る',
  },
  cta: {
    title: 'Gemini 研修について、相談する。',
    body: '貴社の業務・体制に合わせて、Gemini を使った研修の進め方をご提案します。助成金の活用も可能です。',
  },
};

// ==========================================================================
// ツール切替バンド（各研修ページ間の相互導線）。
// accent は各ツールのブランドアクセント色。小さなマークにのみ使い、基調(発光する禅)は崩さない。
// 公式ロゴ画像を public/images/tools/<slug>.svg 等で用意したら、ToolMark を画像版に差し替える。
// ==========================================================================
export type TrainingToolLink = {
  slug: 'chatgpt' | 'claude' | 'gemini';
  name: string;
  tagline: string;
  href: string;
  accent: string;
  flagship?: boolean;
};

export const trainingTools: TrainingToolLink[] = [
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    tagline: '生成AIの定番。基礎から業務活用まで体系的に。',
    href: '/services/training/chatgpt',
    accent: '#10a37f',
    flagship: true,
  },
  {
    slug: 'claude',
    name: 'Claude',
    tagline: '長文・緻密な文章作成・安全性に強い。',
    href: '/services/training/claude',
    accent: '#d97757',
  },
  {
    slug: 'gemini',
    name: 'Gemini',
    tagline: 'Google Workspace 連携・マルチモーダル。',
    href: '/services/training/gemini',
    accent: '#4285f4',
  },
];

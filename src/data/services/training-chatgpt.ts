/**
 * ChatGPT活用研修 - コンテンツデータ
 *
 * 元ページ: https://dxseminar.hp.peraichi.com/chatgpt からの移行
 *
 * 【DRAFT 表記について】
 * 元ページで空欄だった箇所 (Features / Flow / 困りごと4つ目) は
 * `// DRAFT:` コメント付きで叩き台を記載しています。
 * 内容を確定 or 修正してから公開してください。
 */

export type Challenge = {
  text: string;
};

export type Lecture = {
  number: number;
  title: string;
};

export type SchedulePattern = {
  id: string;
  label: string;
  totalDays: number;
  totalHours: number;
  days: {
    day: number;
    sessions: {
      lectureNumber: number;
      durationHours: number;
    }[];
  }[];
};

export type Feature = {
  title: string;
  description: string;
};

export type CaseStudy = {
  client: string;
  location: string;
  industry: string;
  size: string;
  description: string;
};

export type FlowStep = {
  number: number;
  title: string;
  description: string;
};

// ==========================================================================
// Hero
// ==========================================================================

export const hero = {
  eyebrow: 'CHATGPT TRAINING',
  title: '中小企業向け\nビジネスリーダーのための\nChatGPT活用セミナー',
  subtitle: '注目の生成系AI ChatGPTの研修を、助成金を活用して実施します。',
  cta: '無料相談はこちら',
};

// ==========================================================================
// こんな困りごと・課題はありませんか?
// ==========================================================================

export const challenges: Challenge[] = [
  { text: 'ChatGPTってネットで見るけど、何がすごいのかよくわからない' },
  { text: '実際の仕事で活用するイメージがわかない' },
  { text: '他にはどんな生成系AIサービスがあるか知りたい' },
  // DRAFT: 元ページでは4つ目が空欄でした。以下は叩き台。修正してください。
  { text: '社内でChatGPTを導入したいが、どこから手をつければいいか分からない' },
];

export const challengesTagline = 'あらゆる業種で生成AIを活用して、業務の効率化・生産性向上を目指せます。';

// ==========================================================================
// About - 生成系AIの代表 ChatGPT とは?
// ==========================================================================

export const about = {
  title: '生成系AIの代表 ChatGPT とは?',
  body: `今後はあらゆる業界・業種で、生成AIを活用した業務の効率化・生産性向上が求められる時代になります。

ビジネスリーダー (マネジメント層、これからマネジメント層になる中堅クラス) は、生成AIをどのように業務活用できるかを理解しておく必要があります。

本セミナーでは、基礎的なAI理解と実際の業務への活用ケースを学ぶとともに、マネジメント層に必要となるマネジメント業務にも使えるAI活用術を、ケーススタディを通じて習得していただきます。`,
};

// ==========================================================================
// 対象者
// ==========================================================================

export const target = {
  title: '対象者',
  audience: 'マネジメント層、これからマネジメント層になる中堅クラス',
  description: '中小企業のビジネスリーダーとして、AIを武器に組織を動かしていく方々を対象としています。',
};

// ==========================================================================
// カリキュラム (9講義)
// ==========================================================================

export const lectures: Lecture[] = [
  { number: 1, title: '生成AIの概要' },
  { number: 2, title: 'ChatGPTの基本操作とビジネス活用ケース Ⅰ' },
  { number: 3, title: 'ChatGPTのビジネス活用ケース Ⅱ' },
  { number: 4, title: 'ChatGPTのビジネス活用ケース Ⅲ' },
  { number: 5, title: 'ChatGPTのビジネス活用ケース Ⅳ' },
  { number: 6, title: '業務別課題解決ワークショップ' },
  { number: 7, title: 'マネジメント力の強化、チームマネジメントにChatGPTを活用する方法' },
  { number: 8, title: 'ChatGPT活用のための社内運用ルールとガイドライン策定' },
  { number: 9, title: '成果発表とフィードバックセッション' },
];

// ==========================================================================
// 時間割パターン (4パターン)
// ==========================================================================

export const schedulePatterns: SchedulePattern[] = [
  {
    id: '3d-4h',
    label: '3日 × 4時間',
    totalDays: 3,
    totalHours: 12,
    days: [
      {
        day: 1,
        sessions: [
          { lectureNumber: 1, durationHours: 1 },
          { lectureNumber: 2, durationHours: 1.5 },
          { lectureNumber: 3, durationHours: 1.5 },
        ],
      },
      {
        day: 2,
        sessions: [
          { lectureNumber: 4, durationHours: 1.5 },
          { lectureNumber: 5, durationHours: 1.5 },
          { lectureNumber: 6, durationHours: 1 },
        ],
      },
      {
        day: 3,
        sessions: [
          { lectureNumber: 7, durationHours: 2.5 },
          { lectureNumber: 8, durationHours: 0.5 },
          { lectureNumber: 9, durationHours: 1 },
        ],
      },
    ],
  },
  {
    id: '4d-3h',
    label: '4日 × 3時間',
    totalDays: 4,
    totalHours: 12,
    days: [
      {
        day: 1,
        sessions: [
          { lectureNumber: 1, durationHours: 1 },
          { lectureNumber: 2, durationHours: 2 },
        ],
      },
      {
        day: 2,
        sessions: [
          { lectureNumber: 3, durationHours: 1.5 },
          { lectureNumber: 4, durationHours: 1.5 },
        ],
      },
      {
        day: 3,
        sessions: [
          { lectureNumber: 5, durationHours: 1.5 },
          { lectureNumber: 6, durationHours: 1.5 },
        ],
      },
      {
        day: 4,
        sessions: [
          { lectureNumber: 7, durationHours: 2 },
          { lectureNumber: 8, durationHours: 0.5 },
          { lectureNumber: 9, durationHours: 0.5 },
        ],
      },
    ],
  },
  {
    id: '5d-2h',
    label: '5日 × 2時間',
    totalDays: 5,
    totalHours: 10,
    days: [
      {
        day: 1,
        sessions: [
          { lectureNumber: 1, durationHours: 1 },
          { lectureNumber: 2, durationHours: 1 },
        ],
      },
      {
        day: 2,
        sessions: [
          { lectureNumber: 3, durationHours: 1 },
          { lectureNumber: 4, durationHours: 1 },
        ],
      },
      {
        day: 3,
        sessions: [
          { lectureNumber: 5, durationHours: 1 },
          { lectureNumber: 6, durationHours: 1 },
        ],
      },
      {
        day: 4,
        sessions: [
          { lectureNumber: 7, durationHours: 1.5 },
          { lectureNumber: 8, durationHours: 0.5 },
        ],
      },
      {
        day: 5,
        sessions: [{ lectureNumber: 9, durationHours: 2 }],
      },
    ],
  },
  {
    id: '2d-5h',
    label: '2日 × 5時間',
    totalDays: 2,
    totalHours: 10,
    days: [
      {
        day: 1,
        sessions: [
          { lectureNumber: 1, durationHours: 1 },
          { lectureNumber: 2, durationHours: 1 },
          { lectureNumber: 3, durationHours: 1 },
          { lectureNumber: 4, durationHours: 1 },
          { lectureNumber: 5, durationHours: 1 },
        ],
      },
      {
        day: 2,
        sessions: [
          { lectureNumber: 6, durationHours: 1 },
          { lectureNumber: 7, durationHours: 1.5 },
          { lectureNumber: 8, durationHours: 0.5 },
          { lectureNumber: 9, durationHours: 2 },
        ],
      },
    ],
  },
];

// ==========================================================================
// Features (3項目)
// 元ページは全て空欄だったため、DRAFT 叩き台です。内容を確定してください。
// ==========================================================================

export const features: Feature[] = [
  {
    title: '企画立案から運用まで。ワンストップでサポート',
    // DRAFT: 内容を確定してください
    description:
      '研修設計・受講者分析・実施・フォローアップ・社内運用ルール策定までを一気通貫で提供。研修を「やって終わり」にせず、現場で使える仕組みまで支援します。',
  },
  {
    title: '課題に合わせた提案とコンサルティング',
    // DRAFT: 内容を確定してください
    description:
      '業種・規模・課題に応じて、カリキュラムと時間割を柔軟にカスタマイズ。事前ヒアリングで御社の業務に即したケースを組み立て、研修後のコンサルティングにもシームレスに移行できます。',
  },
  {
    title: '各分野のプロフェッショナルが在籍',
    // DRAFT: 内容を確定してください
    description:
      '経営者 × ITエンジニア × MBA の複合経験を持つ講師が、経営判断・技術・マネジメントの3つの視点から指導。中小企業の現場を知っているからこそ、実践的な助言が可能です。',
  },
];

// ==========================================================================
// 研修実績 (Case Study)
// ==========================================================================

export const caseStudies: CaseStudy[] = [
  {
    client: '工務店様',
    location: '兵庫',
    industry: '建築業',
    size: '約20名',
    description:
      '生成AIおよびChatGPTの業務活用に関する研修を実施しました。品質管理や社内コミュニケーションの効率化を目的とし、具体的な業務プロセスへの生成AI導入方法や活用事例を提供。研修後、業務プロセスの効率化と社内連携の強化が見られ、受講者からも高い評価をいただいております。',
  },
  {
    client: '旅行代理店様',
    location: '大阪',
    industry: '旅行関連業',
    size: '10名程度',
    description:
      '生成AIおよびChatGPTの業務活用に関する研修を実施しました。カスタマーサポートの効率化や社内ナレッジの共有促進を目的とし、具体的な問い合わせ対応シナリオの作成や業務改善の手法を提供。研修後、業務プロセスの効率化と応答品質の向上が見られ、受講者からも高い評価をいただいております。',
  },
];

// ==========================================================================
// サービス導入の流れ (3ステップ)
// 元ページは全て空欄だったため、DRAFT 叩き台です。内容を確定してください。
// ==========================================================================

export const flowSteps: FlowStep[] = [
  {
    number: 1,
    title: 'ご相談の予約',
    // DRAFT: 内容を確定してください
    description:
      'お問い合わせフォーム・メールからご連絡ください。御社の課題やご要望をお伺いする初回ミーティングの日程を調整します。初回相談は無料です。',
  },
  {
    number: 2,
    title: 'お打ち合わせ・ご提案',
    // DRAFT: 内容を確定してください
    description:
      '業種・規模・課題をヒアリングし、最適な研修プラン (時間割・カリキュラム構成・受講対象者) をご提案します。助成金の活用可否もこの段階で確認します。',
  },
  {
    number: 3,
    title: 'ご契約',
    // DRAFT: 内容を確定してください
    description:
      'プランにご納得いただけましたら、契約書を取り交わして研修実施日を確定します。必要な事前資料や受講者アンケートの準備もサポートします。',
  },
];

// ==========================================================================
// 講師 (Member)
// ==========================================================================

export const instructor = {
  name: '青木 紘史',
  nameEn: 'Hirofumi AOKI',
  title: '株式会社ブルーモンクコンサルティング 代表取締役 CEO/CTO',
  career: [
    { year: '2002年', description: 'Javaプログラマ・SE として活動開始' },
    { year: '2004年', description: 'フリーランスとして独立' },
    { year: '2007年', description: '株式会社ラジカルオプティを設立 代表取締役に就任' },
    { year: '2013年', description: 'グロービス経営大学院を成績優秀者として修了' },
    { year: '2025年', description: 'AI活用DXコンサルティングファーム 株式会社ブルーモンクコンサルティングを設立' },
  ],
  weapon: {
    label: '武器',
    headline: '経営者 × ITエンジニア × MBA',
    description: 'の経験と実績が生み出す高い実行力',
  },
};

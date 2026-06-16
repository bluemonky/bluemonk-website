/**
 * 各ページに直書きされていた文言（PageHero 見出し・本文・導線ラベル等）を集約。
 *
 * 方針:
 * - これまで page.tsx に直書きだったコピーを data へ分離し、編集用ミラー
 *   docs/site-copy.md（`node scripts/gen-site-copy.mjs` で生成）に載せて編集できるようにする。
 * - href / slug / status などの設定値はミラー生成時に除外される。
 */

/* ============================== /about ============================== */
export const aboutPage = {
  heroTitle: '株式会社ブルーモンクコンサルティング',
  heroSubtitle:
    '経営者 × ITエンジニア × MBA — 3つの経験が生み出す実行力で、企業のAI活用を支えます。',
} as const;

/* ============================== /services ============================== */
export const servicesPage = {
  heroTitle: '3つのサービスで、AIと共に進化する',
  heroSubtitle:
    '研修・コンサルティング・開発支援。経営判断から実装まで、Blue Monk Consulting は企業のAI活用を一気通貫で支えます。',
  closingNote:
    '各サービスの実績・導入事例は、それぞれの詳細ページの中でご紹介しています。',
  closingPrompt: 'どのサービスが合うか迷ったら',
  // 「Bluemonky」はシアンで強調表示する（描画側で分割）。
  closingHeadline: 'まずは Bluemonky に聞いてください。',
  closingCtaLabel: 'Bluemonky に聞いてみる',
} as const;

/* ============================== /services/training ============================== */
export const trainingPage = {
  heroTitle: '現場で使えるAIスキルを、体系的に。',
  heroSubtitle:
    '研修は Blue Monk Consulting の主力サービス。経営判断から現場オペレーションまで、AIを使いこなす組織を育てます。',
  programsTitle: '研修プログラム一覧',
  programs: [
    {
      slug: 'chatgpt',
      status: 'available',
      eyebrow: 'FLAGSHIP PROGRAM',
      title: 'ChatGPT活用研修',
      description:
        '中小企業のビジネスリーダー向け。生成AIの基礎から業務活用・チームマネジメントまで、9講義で実践的に学ぶフラッグシッププログラム。助成金活用可。',
      href: '/services/training/chatgpt',
    },
  ],
  detailLabel: '詳細を見る',
  placeholder: {
    eyebrow: 'More Programs Coming',
    body:
      '今後、Claude活用研修・Copilot活用研修・生成AIリテラシー研修などを順次追加予定です。',
  },
  closingLead: '自社に合う進め方は、一緒に整理するところから始められます。',
  closingPrimary: { label: '相談する', href: '/contact' },
  closingSecondary: { label: '他のサービスを見る', href: '/services' },
} as const;

/* ============================== /insights ============================== */
export const insightsPage = {
  heroTitle: 'AI時代の経営を、言葉で。',
  heroSubtitle: 'Blue Monk Consulting が発信する AI活用・DX・経営の視点。',
  comingSoonLabel: 'Coming Soon',
  topicsHeading: '発信予定のテーマ（例）',
  onwardPrimary: { label: '思想を読む', href: '/philosophy' },
  onwardSecondary: { label: '提供できること', href: '/services' },
  backLabel: 'トップに戻る',
} as const;

/* ============================== /contact ============================== */
export const contactPage = {
  heroTitle: 'お問い合わせ',
  heroSubtitle: '研修・コンサルティング・開発支援に関するご相談はこちらから。',
  emailLabel: 'Email',
  mailtoLabel: 'メールで相談する',
  note: 'お問い合わせフォームは現在準備中です。\n当面は上記メールアドレスに直接ご連絡ください。',
} as const;

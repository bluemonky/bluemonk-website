/**
 * /about - 会社概要 & 代表プロフィール コンテンツデータ
 *
 * 【事実の扱い】
 * - 確定値（法人名・代表・連絡先・URL）はそのまま記載。
 * - 未確定の事実（設立年・所在地・資本金）は明示プレースホルダ + `// 要確認` コメント。
 *   捏造はしない。確定するまで UI 側で「準備中」として扱う。
 * - 代表プロフィールの経歴 (career) / 武器 (weapon) は
 *   src/data/services/training-chatgpt.ts の instructor を実素材として流用。
 * - 主観的なコピー（ポジショニング/提供価値）は `// DRAFT: 要確認(たたき台)` を付ける。
 */

// ==========================================================================
// 会社概要
// ==========================================================================

export type CompanyInfoItem = {
  label: string;
  /** 確定値。未確定は null にして UI 側でプレースホルダ表示。 */
  value: string | null;
  /** 未確定事実の注記（// 要確認 相当）。確定したら削除。 */
  note?: string;
};

export const companyIntro = {
  eyebrow: 'COMPANY',
  heading: '会社概要',
  // DRAFT: 要確認(たたき台) — ブランディングコピー
  lead: 'AI活用DXコンサルティングファームとして、中小企業の現場に「使えるAI」を根付かせます。経営・技術・マネジメントの視点を一人の手の中に束ね、研修からコンサルティング、開発までを一気通貫で支えます。',
};

export const companyInfo: CompanyInfoItem[] = [
  // --- 確定値 ---
  { label: '会社名', value: '株式会社ブルーモンクコンサルティング' },
  { label: '英文表記', value: 'Blue Monk Consulting Inc.', note: '要確認: 英文正式表記は登記内容と要照合' },
  { label: '代表者', value: '青木 紘史（代表取締役 CEO / CTO）' },
  {
    label: '事業内容',
    // DRAFT: 要確認(たたき台) — 研修5:コンサル3:開発2 の比率を反映
    value: 'AI活用研修事業 / AI活用DXコンサルティング / システム・AIプロダクト開発',
  },
  { label: 'お問い合わせ', value: 'aoki@bluemonk.co.jp' },
  { label: 'URL', value: 'https://www.bluemonk.co.jp/' },

  // --- 未確定事実（捏造しない。プレースホルダ + 要確認）---
  {
    label: '設立',
    value: null,
    // 要確認: 設立年に食い違いあり。
    //   training-chatgpt.ts の instructor.career では「2025年 設立」と記載、
    //   一方で移行元ページ（dxseminar.hp.peraichi.com）では「2024年」表記。
    //   登記情報で正確な設立年月日を確認してから確定すること。
    note: '要確認: 設立年に食い違い（training データは2025年 / 移行元ページは2024年）。登記情報で正確な年月日を確定する。',
  },
  {
    label: '所在地',
    value: null,
    note: '要確認: 本店所在地（登記住所）が未確定。確定後に記載。',
  },
  {
    label: '資本金',
    value: null,
    note: '要確認: 資本金が未確定。確定後に記載。',
  },
];

// ==========================================================================
// 代表プロフィール
// instructor (training-chatgpt.ts) の実素材を流用。
// ==========================================================================

export type CareerItem = {
  year: string;
  description: string;
};

export const profile = {
  eyebrow: 'REPRESENTATIVE',
  heading: '代表プロフィール',
  name: '青木 紘史',
  nameEn: 'Hirofumi AOKI',
  title: '株式会社ブルーモンクコンサルティング 代表取締役 CEO / CTO',

  /** 顔写真は未配置。差し替えるまでプレースホルダ枠で表示。 */
  photo: {
    // 要確認: 代表の顔写真が未配置。確定したら public/images/ に配置しパスを設定。
    src: null as string | null,
    alt: '青木 紘史 代表取締役 CEO / CTO',
  },

  // DRAFT: 要確認(たたき台) — 代表を一言で表す紹介文
  lead: '経営者として会社を率い、ITエンジニアとして手を動かし、MBAで経営の理論を体系化した。3つの経験が重なる地点から、企業のAI活用を「絵に描いた餅」で終わらせず、現場で回る仕組みまで落とし込みます。',

  /** 武器: 差別化軸（確定事実: 経営者 × ITエンジニア × MBA）。 */
  weapon: {
    label: '武器',
    headline: '経営者 × ITエンジニア × MBA',
    description: 'の経験と実績が生み出す、高い実行力。',
    // DRAFT: 要確認(たたき台) — 3要素それぞれの補足
    pillars: [
      { title: '経営者', description: '自ら会社を経営し、事業の数字と意思決定に責任を持つ立場を経験。' },
      { title: 'ITエンジニア', description: 'Java/SE として現場で開発に携わり、技術の実装まで理解する。' },
      { title: 'MBA', description: 'グロービス経営大学院を成績優秀者として修了。経営の理論を体系化。' },
    ],
  },

  /**
   * 経歴年表。
   * 出典: src/data/services/training-chatgpt.ts の instructor.career（実素材）。
   * 2025年の設立年は移行元ページとの食い違いあり（上記 companyInfo の note 参照）。
   */
  career: [
    { year: '2002年', description: 'Javaプログラマ・SE として活動開始' },
    { year: '2004年', description: 'フリーランスとして独立' },
    { year: '2007年', description: '株式会社ラジカルオプティを設立 代表取締役に就任' },
    { year: '2013年', description: 'グロービス経営大学院を成績優秀者として修了' },
    // 要確認: 設立年に食い違い（移行元では2024年表記）。companyInfo の「設立」note を参照。
    {
      year: '2025年',
      description: 'AI活用DXコンサルティングファーム 株式会社ブルーモンクコンサルティングを設立',
    },
  ] satisfies CareerItem[],
};

// ==========================================================================
// 思想・理念への導線（/philosophy へのリンク）
// ==========================================================================

export const philosophyLink = {
  // DRAFT: 要確認(たたき台)
  heading: '私たちの思想',
  description: 'Blue Monk Consulting が大切にしている考え方と、AIに向き合う姿勢について。',
  cta: { label: '思想を見る', href: '/philosophy' },
};

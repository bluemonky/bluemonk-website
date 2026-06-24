/**
 * /3cx（3CX ドクトリンの専用ページ）固有コピー。
 *
 * 3CX は Blue Monk Consulting の "DXとは何か" を定義し直す中核ドクトリン
 * （DXにおける3信条）。サービスの一機能ではなく、思想と全サービスを貫く背骨。
 *
 * 重要:
 * - 3項目の定義本体（items: 企業/市場/業界の変革）は **持たない**。SSOT は
 *   src/data/services/consulting.ts の `threeCx` を import 再利用する（DRAFT を二重管理しない）。
 * - ここには /3cx 固有の論考コピー（DXの再定義・関係＝共創の深掘り・サービスへの写像・
 *   hero / closing）のみを置く。
 * - 主張の強い再定義コピーはすべて「たたき台」。本人確定まで `// DRAFT: 要確認（たたき台）`。
 */

// DRAFT: 要確認（たたき台）— ヒーロー（明朝・whitespace-pre-line で2行）
export const pageHero = {
  eyebrow: '3CX',
  title: 'DXを、\n定義し直す。',
  subtitle:
    '守りで止まるDXを、攻めへ、そして関係へ。企業・市場・業界という三つの層を、内へ・外へ・横断する向きで捉え直す。これが、Blue Monk Consulting の DX ドクトリンです。',
} as const;

// DRAFT: 要確認（たたき台）— 01 DXの再定義（OVERVIEW）
export const redefinition = {
  eyebrow: 'WHY',
  title: '守りだけのDXは、出発点にすぎない。',
} as const;

// 01 本文（段落は \n\n 区切りで描画側が分割）。
// DRAFT: 要確認（たたき台）
export const redefinitionBody = `世の中で語られるDXの多くは、業務を効率化し、生産性を高める「守り」で完結します。それは確かに必要なことですが、整えただけでは、未来は変わりません。業務最適化はゴールではなく、戦うべき場所へ力を集めるための出発点です。

私たちは、ヒーローに掲げた「AIを、世界を変える力に」を、この一枚のドクトリンとして構造化しました。企業を整え、市場を切り拓き、業界の関係そのものを変える——射程を一段ずつ上げていく三つの変革。それが 3CX です。`;

// DRAFT: 要確認（たたき台）— 02 上り階段（compare-table の章見出し）
export const ladder = {
  eyebrow: 'THE LADDER',
  title: 'ひとつの変革では、足りない。',
  stair: '守り → 攻め → 関係 ／ 内 → 外 → 横断',
} as const;

// DRAFT: 要確認（たたき台）— 03 関係＝共創（ページの山場）。段落は \n\n 区切り。
export const cooperation = {
  eyebrow: 'CO-CREATION',
  title: '競争を、共創へ。',
} as const;

export const cooperationBody = `3CX の頂点に置くのは、最も語られにくく、最も独自な一段——業界の変革、すなわち「関係のDX」です。

問いはひとつ。あなたが本当に競うべき相手は、隣の同業他社でしょうか。同じ市場のわずかなシェアを奪い合い、値引きと消耗で互いをすり減らす——その争いは、勝っても市場そのものを痩せさせます。私たちは、その前提を疑います。本当の脅威は業界の外にあり、本当の機会は、業界そのものを大きくすることの中にある。

だから私たちは、競争を共創へと置き換えます。これはゼロサムの発想ではありません。一社の勝ちが一社の負けになる椅子取りゲームから降り、市場の総量を広げ、業界ごと次の段階へ進化させる。誰かを蹴落とすのではなく、共に生き残る道を描く——それが、関係のDXです。

この世界観は、ブランドの根に流れる「共創が生み出す変革」、そして「人とAIの共進化」と、同じ一本のDNAでつながっています。人とAIが役割を分け合って互いを高めるように、企業と企業も、競い合うのではなく高め合える。3CX が最後に問うのは、技術の使い方ではなく、関係のあり方そのものです。`;

// 山場末尾の関連導線（思想＝共進化／FDE＝考える人と作る人を分けない）。
export const cooperationLinks = [
  { label: '人とAIの共進化（思想）を読む', href: '/philosophy' },
  { label: '考える人と作る人を分けない（FDE）', href: '/fde' },
] as const;

// DRAFT: 要確認（たたき台）— 04 サービスへの写像（思想で終わらず提供物へ）
export const mapping = {
  eyebrow: 'IN PRACTICE',
  title: 'それぞれの変革に、担い手がいる。',
  rows: [
    { transform: '守りを整える', dxType: '企業の変革', service: '研修・FDE', href: '/fde' },
    { transform: '攻めを描く', dxType: '市場の変革', service: 'AXコンサル', href: '/services/consulting#3cx' },
    { transform: '関係を共創へ', dxType: '業界の変革', service: '伴走・思想', href: '/philosophy' },
  ],
} as const;

// DRAFT: 要確認（たたき台）— CLOSING（CTA順厳守：問い合わせ最優先にしない）
export const closing = {
  eyebrow: 'NEXT',
  title: '3CX は、思想ではなく、実装される。',
  body:
    '企業を整える「守り」は研修とFDEで、市場を切り拓く「攻め」はAXコンサルで、業界を変える「共創」は伴走そのもので。3CX は語るための言葉ではなく、現場で動かすための柱です。次は、それがサービスとしてどう届くのかをご覧ください。',
  primary: { label: 'サービスを見る', href: '/services' },
  secondary: { label: '思想を読む', href: '/philosophy' },
} as const;

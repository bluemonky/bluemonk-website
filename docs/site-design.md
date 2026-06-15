# BLUE MONK CONSULTING - サイト全体設計書

*この文書はサイトの設計判断を集約する正式ドキュメント。新しいページやコンポーネントを作る時は、まずここを参照する。*

*最終更新: 2026-04-11*

---

## 1. 方針 (確定)

### 1.1 主目的
**ブランディング最優先。** 信頼・思想・技術力を一目で伝えるコーポレートサイト。

- **KPI**: リード獲得数より「信用」「印象」「理解」
- **CTA方針**: 問い合わせを最優先にしない。「思想を読む」「BLUE MONKに相談」「資料を見る」系を前面に。問い合わせフォームは温まった訪問者向けに控えめに配置
- **情報順序**: 思想 → 実績/信頼 → 提供物

### 1.2 事業構成 (提供物の比率)
| 優先度 | 事業 | 比率 |
|---|---|---|
| 主力 | 研修 (特に ChatGPT 活用研修) | 5 |
| 次点 | AI活用DX / 戦略伴走コンサル | 3 |
| 3番手 | MCP/RAG/AIアプリ実装支援 | 2 |

研修を先頭にしつつ、コンサル/開発は「拡張性」として格を見せる。

### 1.3 会社情報
- **正式会社名**: 株式会社ブルーモンクコンサルティング
- **代表**: 青木 紘史 (Hirofumi AOKI) — 代表取締役 CEO/CTO
- **登記**: 済み
- **差別化軸**: 経営者 × ITエンジニア × MBA の複合経験
- **連絡先**: aoki@bluemonk.co.jp (info@ は今後追加予定)
- **ドメイン**: https://www.bluemonk.co.jp/

---

## 2. サイトマップ

```
/                                   トップ
├── /philosophy                     思想 (独立ページ)
├── /services                       サービス一覧ハブ
│   ├── /services/training              研修 (主力)
│   │   └── /services/training/chatgpt      ChatGPT活用研修
│   ├── /services/consulting            AI活用DX/戦略伴走コンサル
│   └── /services/development           MCP/RAG/AIアプリ実装支援
├── /works                          実績・事例
├── /about                          会社 & 代表者プロフィール
├── /insights                       思想発信ハブ (Coming Soon 枠のみ)
├── /contact                        問い合わせ (控えめ配置)
└── /legal/
    ├── /privacy                    プライバシーポリシー
    └── /terms                      利用規約
```

**廃止**: `/demo` — BLUE MONK対話UI (マスコット) がその役割を担うため不要

---

## 3. グローバルナビゲーション

### 3.1 デスクトップ
```
[LOGO]   SERVICES   WORKS   ABOUT   INSIGHTS   PHILOSOPHY        [相談する]
```

- `PHILOSOPHY` は右寄りの独立項目 (ブランディング重視のため可視化)
- 「相談する」ボタンは控えめなトーン (現行の `btn-primary` より弱める)
- ロゴは `/` (トップ) へ

### 3.2 モバイル
ハンバーガーメニューでナビ項目を折りたたみ。

### 3.3 フッター
- Copyright
- Privacy / Terms リンク
- 会社情報サマリー (将来)
- SNSリンク (将来)

---

## 4. トップページ IA

スクロール式のブランド体験として再設計。

```
1. HERO                思想の一言 + BLUE MONK対話UI (常駐)
   ├ キャッチ "BREAK THROUGH UNCERTAINTY WITH LOGIC."
   ├ サブ "人とAIと共に進化する企業へ"
   └ BLUE MONK入力バー (マスコット + チャット)

2. PHILOSOPHY 抜粋     思想の核を3-4キーワードで提示
   └ CTA: [思想を読む → /philosophy]

3. PROOF               信頼の根拠
   ├ 実績数字 (研修実施社数/受講者数 等)
   └ クライアントロゴ or 事例ダイジェスト
   └ CTA: [事例を見る → /works]

4. SERVICES            提供物を 5:3:2 のウェイトで
   ├ 研修 (メインカード・大)
   ├ コンサル (中カード)
   └ 開発支援 (中カード)
   └ CTA: [サービス詳細 → /services]

5. VOICE OF BLUE MONK  マスコットからのメッセージ
   └ 例: "迷ったら、まず聞いてください。"

6. INSIGHTS            Coming Soon 枠 (プレースホルダー)
   └ 将来: Note/動画の最新3件

7. CONTACT (控えめ)    会社情報サマリー + 小さな相談ボタン
   └ CTA: [相談する → /contact]
```

---

## 5. BLUE MONK 対話UI の役割

ヒーローに常駐するマスコット対話UIは、単なるFAQではなく**ブランド体験の中核**として以下4つの役割を担う:

| # | 役割 | 実装イメージ |
|---|---|---|
| 1 | **相談の受け口 (簡易)** | 自由記述で質問を受け取り方向性を返す |
| 2 | **迷いの整理** | 「どのサービスが合うか分からない」状態を解きほぐす |
| 3 | **詳細ページへの導線** | 回答末尾に関連ページへのリンクを提示 |
| 4 | **研修/コンサル/開発の違いを説明** | サジェスト質問「違いを教えて」を常設 |

### 実装フェーズ
- **Phase 1**: ルールベース (ダミー応答) — 現状
- **Phase 2**: Claude/OpenAI API 連携
- **Phase 3**: RAG 本格化 (ナレッジベース参照)

---

## 6. 各ページの設計

### 6.1 `/philosophy` ★新規★
**目的**: BLUE MONK CONSULTING の思想と世界観を伝える。ブランディングの中核ページ。

**構成案**:
- なぜAI活用DXコンサルなのか (動機)
- 人とAIの関係についての思想
- 「経営者 × ITエンジニア × MBA」が生み出す価値観
- なぜ BLUE MONK (青い修行僧) なのか — 命名・マスコットの由来
- ミッション / ビジョン

**状態**: U4 (コア文言) が未決。着手前にユーザーとヒアリング必要。

---

### 6.2 `/services` (ハブ) ★新規★
**目的**: 3サービスの全体像と比率感を伝える。

**構成案**:
- ヒーロー ("私たちが提供する3つのサービス")
- 研修 (主力カード・大)
- コンサル (中カード)
- 開発支援 (中カード)
- 「どれが合うか分からない方は BLUE MONK に相談を」CTA

---

### 6.3 `/services/training` ★新規★
**目的**: 研修サービスの概要とメニュー一覧。

**構成案**:
- 研修の考え方 (なぜ研修が主力か)
- 提供中の研修一覧
  - ChatGPT活用研修 → `/services/training/chatgpt` (詳細)
  - 今後追加予定の研修メニュー (Coming Soon枠)

---

### 6.4 `/services/training/chatgpt` ★新規 (移行本体)★
**目的**: 元ペライチ [dxseminar.hp.peraichi.com/chatgpt](https://dxseminar.hp.peraichi.com/chatgpt) からの移行。

**構成案** (元ページ踏襲):
1. ヒーロー (キャッチ + 助成金訴求 + CTA)
2. こんな課題ありませんか? (困りごと整理)
3. About (生成AI概要)
4. 対象者
5. カリキュラム (9講義 × 4時間割パターン)
6. Features (ワンストップ/提案/プロフェッショナル) — **U3 空欄**
7. Case Study (工務店/旅行代理店)
8. Flow (導入の流れ 3ステップ) — **U3 空欄**
9. 講師紹介 (青木代表抜粋 → `/about` リンク)
10. Contact CTA

**状態**: 元ページの Features / Flow / 困りごと4つ目が空欄。U3 を先に解決する必要あり。

---

### 6.5 `/services/consulting` ★新規★
**目的**: AI活用DX/戦略伴走コンサルの提供価値を伝える。

**状態**: U5 (詳細文言) が未決。着手前にヒアリング必要。一旦スタブで枠だけ作る方針もあり。

---

### 6.6 `/services/development` ★新規★
**目的**: MCP/RAG/AIアプリ実装支援の技術力を示す。

**状態**: U5 が未決。スタブで枠だけ作る方針もあり。

---

### 6.7 `/works`
**目的**: 実績・事例の一覧。信頼構築。

**構成案**:
- 事例カード一覧
  - 工務店様 (兵庫・建築業・20名) ← ChatGPT研修から移行
  - 旅行代理店様 (大阪・旅行・10名) ← ChatGPT研修から移行
- 業種/規模/課題/成果 のフォーマット統一
- CTA: [相談する]

---

### 6.8 `/about`
**目的**: 会社情報と代表者プロフィールを統合。信頼性の訴求。

**構成案**:
- 会社基本情報 (正式名/設立/代表/所在地) — **U2 未埋め**
- 代表者プロフィール
  - 青木紘史 (経歴年表 + 武器 "経営者 × ITエンジニア × MBA")
- 理念・思想 (`/philosophy` へのリンク)
- メディア掲載・登壇実績 (将来)

**状態**: U2 (会社情報の詳細) 未解決。

---

### 6.9 `/insights` ★新規・枠のみ★
**目的**: 思想発信 (Note/動画/記事) のハブ。

**現時点の扱い**: Coming Soon 枠として構造だけ実装。中身は保留。

---

### 6.10 `/contact`
**目的**: 問い合わせの受け口。控えめに配置。

**構成案**:
- 連絡先情報 (メール: aoki@bluemonk.co.jp)
- 問い合わせフォーム (B2B標準: 会社名/担当者名/メール/電話任意/内容)

**状態**: U6 (フォーム送信方式) 未決。Phase 1 は mailto or Google フォーム or API API。

---

### 6.11 `/legal/privacy` と `/legal/terms`
**目的**: 法的要件の遵守。

**状態**: U8 未決。Phase 1 終盤に着手。

---

## 7. デザインシステム (継承)

### 7.1 カラーパレット
| 用途 | カラー | 値 |
|---|---|---|
| 背景 | ダークブルー | `#030b1a` |
| サブ背景 | ダークブルー 80% | `#0a1e3c` |
| アクセント | シアン | `#00d4ff` |
| アクセント2 | ミントグリーン | `#00ffcc` |
| テキスト (明) | ホワイト | `#ffffff` |
| テキスト (中) | ライトグレー | `#e0e7f1` |
| テキスト (弱) | グレー | `#9ca3af` |

### 7.2 トーン
- プロフェッショナル
- 先進的 (AI/テック感)
- 信頼感
- **サイバー×禅** (BLUE MONK = 青い修行僧の世界観)

### 7.3 タイポ
- 見出し: 太字、トラッキング広め
- 本文: 読みやすさ優先、行間広め
- CTA: シアングロー (`glow-text` / `glow-border` 活用)

### 7.4 レスポンシブ
- モバイルファースト
- ブレークポイント: sm(640px), md(768px), lg(1024px), xl(1280px)

---

## 8. コンテンツモデル / データ構造

### 8.1 方針
コンテンツは TSX にハードコードせず、**データとコンポーネントを分離**する:

```
src/
├── app/                           ページ (レイアウト組み立て)
├── components/                    再利用可能なUIコンポーネント
│   ├── layout/                        Header, Footer, etc.
│   ├── home/                          トップ固有セクション
│   ├── services/                      サービスページ共通セクション
│   └── ui/                            汎用UI (Button, Card, etc.)
├── data/                          構造化コンテンツ
│   ├── company.ts                     会社情報
│   ├── services/
│   │   ├── training-chatgpt.ts            ChatGPT研修データ
│   │   ├── consulting.ts
│   │   └── development.ts
│   ├── works.ts                       事例データ
│   └── philosophy.ts                  思想テキスト
└── types/                         TypeScript型定義
```

### 8.2 主要データ型 (例)

```typescript
// src/types/service.ts
type ServiceCategory = 'training' | 'consulting' | 'development'

type Service = {
  slug: string
  category: ServiceCategory
  title: string
  subtitle: string
  description: string
  weight: number  // 5 | 3 | 2 (提供物比率)
}

type TrainingProgram = Service & {
  targetAudience: string
  curriculum: Lecture[]
  schedulePatterns: SchedulePattern[]
  caseStudies: CaseStudy[]
}

type Lecture = {
  number: number
  title: string
  description?: string
  durationHours: number
}
```

---

## 9. 実装フェーズ計画

コンテンツ依存のないものから段階的に進める。

| フェーズ | 内容 | 依存する未決事項 |
|---|---|---|
| **S1** | ヘッダーナビ再構成 | なし |
| **S2** | `/services` ハブ + 3配下ページ骨組み | なし (スタブで可) |
| **S3** | `/services/training/chatgpt` 本体実装 | U3 (Features/Flow 文言) |
| **S4** | `/philosophy` 実装 | U4 (コア文言) |
| **S5** | `/about` 実装 | U2 (会社情報詳細) |
| **S6** | `/works`, `/insights`, `/contact` 実装 | U5 / U6 |
| **S7** | トップページ IA 再構成 (7セクション化) | S3-S6 の大半 |
| **S8** | マスコット差し替え + SEO + Legal | U1 / U7 / U8 |

**最初に実行**: S1 + S2 (コンテンツ依存なし)

---

## 10. 未決事項 (Open Questions)

着手前に解決が必要な項目を一覧化。

| # | 項目 | 影響フェーズ | 状態 |
|---|---|---|---|
| U1 | トップのマスコット画像差し替え | S8 | 青木さんから新画像提示待ち |
| U2 | 会社基本情報の詳細 (設立日/所在地/役員) | S5 | ヒアリング必要 |
| U3 | Features / Flow / 困りごと4つ目 の本文 | S3 | ヒアリング or 私から叩き台 |
| U4 | 思想 (`/philosophy`) のコア文言 | S4 | ヒアリング必要 |
| U5 | コンサル/開発サービスの詳細文言 | S2 (詳細) / S6 | ヒアリング必要 |
| U6 | 問い合わせフォーム送信方式 (mailto/Google/API) | S6 | 選択必要 |
| U7 | SEO / OGP画像 | S8 | 着手直前に詰める |
| U8 | Legal (privacy/terms) 本文 | S8 | テンプレ + 調整 |

---

## 11. 更新履歴

- 2026-04-11: 初版作成。青木さんとの設計合意を反映。

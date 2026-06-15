# BLUE MONK CONSULTING - タスク管理

## タスクID体系

### フォーマット
```
[種別][連番]-[カテゴリ]-[プロセス]
```

### 種別
| コード | 意味 | 連番 |
|--------|------|------|
| **F** | Feature（機能開発） | F/T共通 |
| **T** | Task（作業タスク） | F/T共通 |
| **B** | Backlog（アイデア・課題・バグ） | 別採番 |

### カテゴリ
| コード | 意味 |
|--------|------|
| **UI** | 画面・デザイン |
| **FE** | フロントエンド |
| **BE** | バックエンド |
| **DATA** | データ・RAG |
| **INF** | インフラ・設定 |
| **AST** | アセット（画像等） |
| **ANL** | 分析・計測 |
| **BIZ** | ビジネス・契約 |
| **DOC** | ドキュメント |

### プロセス
| コード | 意味 | 英語 |
|--------|------|------|
| **R** | 要件定義 | Requirements |
| **D** | 設計 | Design |
| **I** | 実装 | Implementation |
| **T** | テスト | Test |
| **L** | リリース | Launch |
| **A** | 全工程 | All |

### ステータス
- [ ] 未着手
- [~] 進行中
- [x] 完了
- [-] 保留

---

## Phase 1: 静的サイト + ダミーチャット

### 完了
| | ID | タスク |
|-|----|--------|
| [x] | T001-INF-I | Next.js プロジェクトセットアップ |
| [x] | T002-UI-I | ダークブルーテーマ設定 |
| [x] | T003-UI-I | ヘッダー・ナビゲーション |
| [x] | T004-UI-I | ヒーローセクション |
| [x] | T005-FE-I | ダミーチャットUI |
| [x] | T006-UI-I | フッター |
| [x] | T007-INF-I | Vercel デプロイ |
| [x] | T008-INF-I | カスタムドメイン設定 (bluemonk.co.jp) |
| [x] | T009-DOC-I | CLAUDE.md 作成 |

### 未着手

#### 設計・ドキュメント
| | ID | タスク |
|-|----|--------|
| [x] | T019-DOC-D | サイト全体設計書 `docs/site-design.md` 作成 |

#### S1: ヘッダーナビ再構成
| | ID | タスク |
|-|----|--------|
| [ ] | F030-UI-I | Header ナビを再構成 (SERVICES/PHILOSOPHY/INSIGHTS 追加、AI DEMO 削除) |

#### S2: サービスハブ + 3カテゴリ骨組み
| | ID | タスク |
|-|----|--------|
| [ ] | F031-UI-A | `/services` ハブページ作成 |
| [ ] | F032-UI-A | `/services/training` ページ作成 (スタブ) |
| [ ] | F033-UI-A | `/services/consulting` ページ作成 (スタブ) |
| [ ] | F034-UI-A | `/services/development` ページ作成 (スタブ) |

#### S3: ChatGPT研修ページ (ペライチ移行本体)
| | ID | タスク |
|-|----|--------|
| [ ] | T035-DATA-R | `src/data/services/training-chatgpt.ts` にコンテンツ起こし |
| [ ] | B002-BIZ-R | U3: Features/Flow/困りごと4つ目の本文をヒアリング or 叩き台作成 |
| [ ] | F036-UI-A | `/services/training/chatgpt` 実装 |

#### S4: /philosophy
| | ID | タスク |
|-|----|--------|
| [ ] | B003-BIZ-R | U4: 思想コピーのヒアリング |
| [ ] | F037-UI-A | `/philosophy` 実装 |

#### S5: /about
| | ID | タスク |
|-|----|--------|
| [ ] | B004-BIZ-R | U2: `docs/company-profile.md` 空欄埋め |
| [ ] | F011-UI-A | `/about` ページ作成 (会社+代表統合) |

#### S6: /works, /insights, /contact
| | ID | タスク |
|-|----|--------|
| [ ] | F012-UI-A | `/works` ページ作成 |
| [ ] | F038-UI-A | `/insights` ページ作成 (Coming Soon枠) |
| [ ] | B005-BIZ-R | U6: 問い合わせフォーム送信方式の決定 |
| [ ] | F013-UI-A | `/contact` ページ作成 |

#### S7: トップページ IA 再構成
| | ID | タスク |
|-|----|--------|
| [ ] | F039-UI-A | トップを 7セクション化 (HERO/PHILOSOPHY/PROOF/SERVICES/VOICE/INSIGHTS/CONTACT) |

#### S8: 仕上げ
| | ID | タスク |
|-|----|--------|
| [ ] | T010-AST-I | トップマスコット画像差し替え (新画像提示待ち) |
| [ ] | F014-DOC-A | `/legal/privacy` 作成 |
| [ ] | F015-DOC-A | `/legal/terms` 作成 |
| [ ] | T016-AST-I | OGP画像作成 |
| [ ] | T017-AST-I | favicon 更新 |
| [ ] | T018-ANL-I | GA4 設定 |

---

## Phase 2: AI API連携

| | ID | タスク |
|-|----|--------|
| [ ] | F019-BE-A | /api/chat エンドポイント作成 |
| [ ] | F020-BE-I | Claude/OpenAI API 連携 |
| [ ] | T021-INF-I | 環境変数設定（Vercel） |
| [ ] | F022-BE-I | レート制限実装 |
| [ ] | F023-BE-I | エラーハンドリング |

---

## Phase 3: RAG本格化

| | ID | タスク |
|-|----|--------|
| [ ] | B001-DATA-R | RAGデータ設計 |
| [ ] | F024-DATA-A | ナレッジベース作成 |
| [ ] | F025-BE-A | ベクトル検索実装（Supabase pgvector等） |
| [ ] | F026-BE-I | 根拠付き回答生成 |

---

## Phase 4: 分析・リード管理

| | ID | タスク |
|-|----|--------|
| [ ] | F027-BE-A | お問い合わせDB保存 |
| [ ] | T028-INF-I | メール通知設定 |
| [ ] | F029-ANL-A | BigQuery連携 |
| [ ] | F030-ANL-A | Looker Studio ダッシュボード |

---

## Backlog（アイデア・課題・バグ）

| | ID | 内容 | 優先度 |
|-|----|------|--------|
|  |    |      |        |

---

## メモ

-

---

*最終更新: 2026-04-11*

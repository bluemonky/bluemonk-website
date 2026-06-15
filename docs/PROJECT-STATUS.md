# PROJECT STATUS — BLUE MONK CONSULTING サイト

> 現在地ダッシュボード。**作業開始時に最初に読み、作業終了時に必ず更新してコミット**すること。
> 詳細設計は [site-design.md](./site-design.md)、タスク台帳は [tasks.md](./tasks.md)、規約は [../AGENTS.md](../AGENTS.md)。

- **最終更新日**: 2026-06-16
- **フェーズ**: Phase 1 — **全ページ実装済み**（一部たたき台／要確認あり）。ダミーチャットは将来 Qwen3 連携。
- **本番**: https://www.bluemonk.co.jp/ ／ https://bluemonk-website.vercel.app/

## 直近の意思決定
1. SSOT は git の `docs/` 配下。AI規約は `AGENTS.md`。remote は SSH。`/demo` 廃止。
2. **TOPは「発光する禅」**（禅ミニマル基調＋サイバー差し色）。確定キャッチ「人とAIと共に進化する企業へ／– 共創が生み出す変革と未来 –」。
3. マスコット＝瞑想モンク画像 `blue-monk-zen.webp`（スプライト廃止）。HERO背景 `site-bg.webp`。
4. **SERVICES と WORKS 統合**（WORKS削除・`/works`→`/services`）。
5. **表記**: マスコット=**Bluemonky** / 会社=**Blue Monk Consulting**（正式名 `BLUE MONK CONSULTING` は維持）。単独「BLUE MONK」不使用。
6. ChatGPT研修に**中級編**移行（初級/中級タブ）。研修ページは HERO/CTA ダーク＋可読本文。
7. 全体の縦余白を圧縮（密度統一）。
8. チャットは将来 Mac Mini ローカル **Qwen3(Ollama)＋Tailscale Funnel**（合言葉＋コンテンツ注入）。現状ダミー応答。
9. **自律仕上げパス(2026-06-16)**: 空ページを全実装（about=実経歴流用／philosophy・consulting・development=たたき台／legal=ひな型／insights=予告体裁）。技術/SEO/a11y強化（metadataBase・robots.ts・sitemap.ts・themeColor・OG画像・Header現在地表示・モバイルメニューa11y・チャットaria-live＋モバイル配置修正・マスコット微アニメ・PageHero明朝統一）。

10. **クラフト向上パス(2026-06-16)**: 「妥協なく最高」へ。HERO入場の振り付け・上質なスクロール演出(translateY+blur)・カードのマイクロインタラクション(縁グロー＋lift＋sweep)・対話UIの発光＋サジェストチップ・タイポ/余白の精緻化を、品位優先（過剰演出禁止・reduced-motion厳守）で全ページに適用。

11. **辛口レビュー反映パス(2026-06-16)**: 「本当に最高か」を批判的再点検し妥協なく修正。**明朝をNoto Serif JPでWebフォント化**（next/font 変数は`<html>`に置き`--font-serif`を実体解決＝全デバイスで明朝。※`@theme inline`は:rootへ変数を出さない/自己参照は循環で空になる点に注意）。**ダミーチャットの断定診断を撤去**（「応答例」明示＋中立誘導・Bluemonky名義／HEROをSSR化しChatConsoleへ分離・チップSSR出力）。**PROOFを実在事例＋確定ファクトで復活**（ダミー数字は出さない）。circuit-bg撤去・配色の深み／Organization・Person・Course JSON-LD／研修ライト本文のコントラストAA化（bookendは維持）／研修直行CTA・VOICE導線／canonical・/works恒久リダイレクト・sitemap・キャッシュ等。**本番ビルドで明朝適用・チャット応答を実画面検証済み。**

## 実装状況
| ページ | 状態 |
|---|---|
| `/`（トップ） | ✅ 発光する禅・6セクション（PROOFは実数字未確定で非表示） |
| `/services`（ハブ） | ✅ 実装 |
| `/services/training` ・ `/services/training/chatgpt` | ✅ 実装（中級編・ダーク寄せ） |
| `/services/consulting` ・ `/services/development` | ✅ 実装（**たたき台**コピー） |
| `/about` | ✅ 実装（代表経歴は実素材、会社の設立/所在地等は**要確認**） |
| `/philosophy` | ✅ 実装（**たたき台**・由来は要確認） |
| `/insights` | ✅ 予告体裁（記事は未作成） |
| `/contact` | 🟡 partial（mailto のみ。フォーム方式 未決 U6） |
| `/legal/privacy` ・ `/legal/terms` | ✅ ひな型（**要・専門家/本人確認**） |
| `/works` | ↪︎ `/services` リダイレクト |

## 要確認／差し替え（本人確定待ち＝ここを指摘・記入してください）
- **会社基本情報**: 設立年（**2024 vs 2025 食い違い**・登記で確定）／所在地／資本金 → `src/data/about.ts`, `docs/company-profile.md`
- **思想(philosophy)**: 全体がたたき台。特に「BLUE MONK＝青い修行僧の由来」は本人記入待ち → `src/data/philosophy.ts`
- **代表プロフィール**: 顔写真未配置（`public/images/about/` 待ち）／公開可否
- **PROOF実績数字**: 研修社数・受講者数・実務歴 → 確定で PROOF セクション復活（`src/data/home.ts`）
- **研修DRAFT**: 困りごと4つ目・Features3・Flow3・中級編9講義の説明 → `src/data/services/training-chatgpt.ts`
- **コンサル/開発**: 提供価値・進め方がたたき台 → `src/data/services/{consulting,development}.ts`
- **legal**: 雛形。所在地・解析ツール名・管轄裁判所・施行日 等 → `src/data/legal.ts`
- **問い合わせ方式(U6)**: フォーム導入可否（Googleフォーム等）＋受信先
- **TOPコピー**: PHILOSOPHY/VOICE/INSIGHTS文言・マスコット文言のトーン → `src/data/home.ts`
- **ロゴ/OGP/favicon**: 透過ロゴ（ヘッダー用・円マーク）／OG画像は暫定（白背景フルロゴ）／favicon はデフォルトのまま

## 運用ルール（詳細は AGENTS.md）
- 開始時 `git pull` → 終了時 `PROJECT-STATUS.md` 更新 → commit → `git push`
- 依存は `npm ci`

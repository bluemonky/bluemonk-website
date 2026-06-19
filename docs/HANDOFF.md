# 引き継ぎ（HANDOFF） — BLUE MONK CONSULTING サイト

> このファイルは「フォルダ移動／環境引き継ぎ」用のスナップショット。最終作成: **2026-06-19**。
> **正（SSOT）は git の `docs/` 配下**。詳細は各ファイルへ: 規約 [AGENTS.md](../AGENTS.md) ／ 現在地 [PROJECT-STATUS.md](./PROJECT-STATUS.md) ／ 設計 [site-design.md](./site-design.md) ／ タスク [tasks.md](./tasks.md) ／ 文章 [site-copy.md](./site-copy.md)。

---

## 0. まず読む順番（新環境での立ち上げ）
1. この HANDOFF.md（全体像）
2. `AGENTS.md`（AI規約の“正”：変更前確認・コードスタイル・同期・CTA順など）
3. `docs/PROJECT-STATUS.md`（現在地ダッシュボード。意思決定 1〜19 が時系列で残っている）
4. 必要に応じて `docs/site-design.md` / `docs/tasks.md` / `docs/site-copy.md`

---

## 1. 現在地スナップショット
- **本番**: https://www.bluemonk.co.jp/ ／ Vercel: https://bluemonk-website.vercel.app/
- **リポジトリ**: `git@github.com:bluemonky/bluemonk-website.git`（remote は SSH）
- **ブランチ/最新**: `main` / `c16839d`（作成時点。`git log` で最新確認）
- **デプロイ**: `main` に push → Vercel が自動デプロイ。`.env` は無し（公開情報のみ・秘密情報なし）。
- **作業ツリー**: クリーン（未コミットなし）。

## 2. フォルダ移動の手順（重要）
1. **移動前に push 済みを確認**（`git status` がクリーン・`git push` 済み）。←済んでいれば中身は安全。
2. フォルダごと移動して可（`.git` も一緒に動くので**履歴・remote はそのまま**）。
3. 移動後、新パスで:
   ```bash
   npm ci        # node_modules を作り直す（lockfile 尊重・環境差防止）
   npm run dev   # 動作確認（localhost:3000）
   npm run build # 本番ビルド確認
   ```
4. **自動メモリは引き継がれない**（後述§3）。
5. 旧フォルダは `git status` クリーン＆push 済みを確認してから削除。

## 3. 自動メモリについて（要・再設定）
Claude Code の自動メモリは **旧パス** `~/.claude/projects/-Users-aoki-Documents-bluemonk-website/memory/` に紐付いており、フォルダを移すと**新パスのセッションでは読み込まれない**。要点を以下に転記（新環境で必要なら再登録）:
- **利用者**: 青木紘史＝BMC代表。**経営者 × ITエンジニア × MBA**（CEO/CTO）。この複合人材が**AIを使い倒して開発する**のが事業の核（FDE）。
- **サイトの狙い**: ブランディング最優先。CTAは問い合わせ最優先にせず「**思想 → 実績 → 提供物**」の順で見せる。
- **進め方の好み**: 実装前に**全体設計・コンテンツを段階合意**。**TSX直書きせずデータ先行**（`src/data/`）。大きめの設計判断は多方向案→批判→統合のワークフローで詰めてから実装、実画面（プレビュー）で検証してから push。
- **同期/SSOT**: 複数 Mac × Claude Code × Cursor 運用。最新は **git の `docs/` を正**。規約は `AGENTS.md`。作業後 `PROJECT-STATUS.md` 更新→push。remote は SSH。

## 4. 技術スタック & コマンド
- Next.js 16（App Router・Turbopack）/ TypeScript / Tailwind CSS v4（`@import "tailwindcss"` + `@theme inline`）/ Vercel。
- 明朝 Web フォント（Noto Serif JP）は**セルフホスト**（`src/app/fonts/*.woff2` + `next/font/local`）。※`next/font/google` のビルド時フェッチが Vercel で失敗しデプロイを止めた事故があり回避済み。
- コマンド: `npm ci` / `npm run dev` / `npm run build` / `npm run lint`。
- 文章ミラー生成: `node scripts/gen-site-copy.mjs`（依存は typescript のみ）。

## 5. 情報設計（IA）
- **サービスは3本柱**: **FDE（主役）／ AXコンサル ／ 研修**。
  - FDE = Forward Deployed Engineer（現場に入り込み、実装はAIを使い倒して動くまでつくり切る）。トップ階層 `/fde`。ナビ先頭付近に「FDE」。
  - AXコンサル = 旧コンサル（`/services/consulting`、表記を AX に）。研修 = `/services/training`（フラッグシップ `/services/training/chatgpt`）。
  - 旧「開発支援」は FDE へ発展。**`/services/development` → `/fde` 恒久リダイレクト**。`/works` → `/services`。
- 公開ルート: `/` `/fde` `/about` `/philosophy` `/insights` `/contact` `/services` `/services/consulting` `/services/training` `/services/training/chatgpt` `/legal/privacy` `/legal/terms`。
- ナビ順: SERVICES → FDE → ChatGPT研修 → ABOUT → INSIGHTS → PHILOSOPHY（`src/components/Header.tsx`）。現在地は**最長一致1つだけ**ハイライト。

## 6. デザインシステム「発光する禅」
- 基調: 背景 `#030b1a` / シアン `#00d4ff` / ミント `#00ffcc`（限定）/ **差し色=暖色 ember `#ff8a3c`（焦点のみ）**。明朝白抜き見出し。静謐・上品・「光は一点」。reduced-motion 厳守・コントラスト AA。
- トークンは `src/app/globals.css` の `:root`（`--surface-1/2`, `--elev-1/2`, `--ember*`, フォントスタック等）。**`@theme inline` は :root へ変数を出さない**点に注意（フォント等は :root に実体定義）。
- 主なクラス（globals.css）:
  - **背景/奥行き**: `.bm-ambient`（固定の寒暖二灯光）・`.bm-grain`（暗部バンディングを均す極微グレイン, -z-10）・`.section-plane`（明るい床＋縦ビネット）・`.section-rule`（極薄シアン区切り＋左端 ember 節）。
  - **カード**: `.glass-card`（素の面）／`.card-interactive.glass-card`（**主役だけ**＝上辺 ember→シアンのリムライト＋深い落ち影＋hover lift）。**軽量化の主役**: `.quiet-card`（無塗り＋ヘアライン＋影なし）。
  - **軽量レイアウト（“単調で重い”の解消）**: `.hairline-list/.hairline-row`（箱なし行）・`.compare-table/.compare-row`（罫線比較）・`.step-rail/.step-item/.step-num`（番号付き縦レール）。
  - **タイポ**: `.serif-display`（明朝・`text-wrap:balance`）・`.page-hero-title`（見出し3層影）・`.label-fine`（細eyebrow）・`.section-index`（章番号01–）・`.prose-measure(--wide)`（行長）。
  - **CTA**: `.btn-ember`（静かなゴースト＋左端 ember キーライン。塗りボタンは廃止）。
- **改行ポリシー**（globals body・継承）: `line-break:strict`（禁則）＋`word-break:auto-phrase`（文節折り・対応ブラウザのみ）＋`text-wrap:pretty`（widow回避）。見出しは `balance`。意図的改行は `\n`＋`whitespace-pre-line`。割りたくない語は `whitespace-nowrap`（例: FDEの「経営者 × ITエンジニア × MBA」は ` × ` でのみ改行）。
- **マトリックスのデジタルレイン**: `src/components/home/MatrixRain.tsx`。TOP HERO のモンキー背後。**緑ではなくミュートした寒色シアン**＋被写界深度＋低密度＋稀に ember グリント（“今っぽい”データの流れ）。性能配慮（~16fps・タブ非表示で停止・DPR最大2）、reduced-motion で静止。

## 7. コンテンツ編集フロー（重要・運用）
- **サイト文章は `src/data/*.ts` が runtime の正**（`home.ts` / `fde.ts` / `pages.ts` / `services/*` / `about.ts` / `philosophy.ts` / `legal.ts`）。各ページの直書き文言も `pages.ts` 等に集約済み。
- **編集用ミラー**: `docs/site-copy.md`（keypath アンカー付き・約690項目）。
  - 流れ: `site-copy.md` を編集 → 「**反映して**」→ 担当が `src/data`・各 `page.tsx` の metadata へ反映（md→data は手動同期）。
  - 改行を入れたい箇所は md でその位置に改行を1つ入れる（サブ＝説明文は `whitespace-pre-line` で改行対応済み。本文段落で改行対応が要る箇所は描画側に対応が必要）。
  - 再生成（data→md）: `node scripts/gen-site-copy.mjs`。**data を直接編集したら再生成**して md を最新化。

## 8. これまでの主な実装（詳細は PROJECT-STATUS の決定 1〜19）
発光する禅の確立 → 立体感の付与 → 差し色(ember)の二灯化 → CTAを静かなゴーストへ → サブページ整合 → 文章の data 集約とミラー → **FDE主役化＋3本柱再編** → 「単調で重い→知的でスマート」軽量化（quiet-card/比較/ステップレール/章番号） → Matrixレイン → 日本語改行ポリシー。**全て本番反映済み**。

## 9. 未確定・要確認（本人記入待ち＝ここを埋めると完成度が上がる）
- 会社基本情報: **設立年（2024 vs 2025 の食い違い・登記で確定）**／所在地／資本金 → `src/data/about.ts`, `docs/company-profile.md`
- 思想（philosophy）: たたき台。「BLUE MONK＝青い修行僧の由来」本人記入待ち → `src/data/philosophy.ts`
- 代表プロフィール: 顔写真未配置（`public/images/about/` 待ち）
- **FDEページのコピー全体**: 強い叩き台（DRAFT）。実績ブロックは「準備中・確定後に出典付き公開」で非掲載 → `src/data/fde.ts`
- 実績の数値・固有事例（社数/受講者数/成果%）: 確定後に出典付きで掲載
- コンサル/研修 DRAFT 文言 → `src/data/services/*`
- legal: 雛形（所在地・解析ツール名・管轄裁判所・施行日 等、専門家/本人確認）→ `src/data/legal.ts`
- 問い合わせ方式: フォーム導入可否＋受信先（現状 mailto: aoki@bluemonk.co.jp）
- ロゴ/OGP/favicon: 透過ロゴ／OG画像は暫定／favicon デフォルト

## 10. 将来（Phase 2 以降）
- TOPの Bluemonky チャットは現状**ダミー応答**。将来は Mac Mini ローカルの **Qwen3（Ollama）＋ Tailscale Funnel**（合言葉＋コンテンツ注入）に接続予定（Vercel は tailnet に入れないため Funnel が必要）。`src/components/home/ChatConsole.tsx` の状態スロット（idle/loading/error/complete）を API 連携に差し替える設計。

## 11. 引き継ぎチェックリスト
- [ ] `git status` クリーン・`git push` 済み（移動前）
- [ ] 新パスで `npm ci` → `npm run build` が通る
- [ ] `git remote -v` が SSH のまま／push できる（SSH 鍵が新環境にある）
- [ ] 必要なら自動メモリを新パスで再登録（§3 の4点）
- [ ] `AGENTS.md` / `PROJECT-STATUS.md` を読んでから作業開始

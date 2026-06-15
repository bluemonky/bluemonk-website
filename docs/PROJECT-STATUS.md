# PROJECT STATUS — BLUE MONK CONSULTING サイト

> 現在地ダッシュボード。**作業開始時に最初に読み、作業終了時に必ず更新してコミット**すること。
> 詳細設計は [site-design.md](./site-design.md)、タスク台帳は [tasks.md](./tasks.md)、規約は [../AGENTS.md](../AGENTS.md)。

- **最終更新日**: 2026-06-15
- **フェーズ**: Phase 1（静的サイト + ダミーチャット）— 実装途中（主要導線は完成）
- **本番**: https://www.bluemonk.co.jp/ ／ https://bluemonk-website.vercel.app/

## 直近の意思決定（2026-06-15）
1. **SSOT は git の `docs/` 配下**。ローカル AI 記憶 / エディタ設定は共有しない前提で運用。
2. AI 規約は **`AGENTS.md` に集約**（`CLAUDE.md` / `.cursor/rules` は参照のみ）。
3. git remote を **SSH 方式**へ変更（埋め込みトークンを `.git/config` から排除）。
4. サイトマップは `site-design.md` が正。**`/demo` は廃止**（対話 UI が役割を担う）。

## 実装状況
| ページ | 状態 |
|---|---|
| `/`（トップ） | ✅ 実装（Phase 1 ダミーチャット） |
| `/services`（ハブ） | ✅ 実装 |
| `/services/training` | ✅ 実装 |
| `/services/training/chatgpt` | ✅ 実装（本格 LP・最も作り込み済） |
| `/contact` | 🟡 partial（mailto のみ。フォーム未実装） |
| `/about` `/philosophy` `/works` `/insights` | ⬜ Coming Soon スタブ |
| `/services/consulting` `/services/development` | ⬜ Coming Soon スタブ |
| `/legal/privacy` `/legal/terms` | ⬜ Coming Soon スタブ |

## 進行中
- バックログ（5 か月分の未コミット作業）の初回コミットと SSOT 整備

## 次にやること（site-design.md S1〜 / tasks.md より）
- F030: Header ナビ再構成（SERVICES / PHILOSOPHY / INSIGHTS 追加、AI DEMO 削除）
- `/services/{consulting,development}` スタブ整備、`/services/training` 系の本文確定
- `/philosophy` 実装（要: 思想コピー B003 / U4）
- トップ 7 セクション化（F039）

## ブロッカー / 未決事項（ヒアリング待ち U1〜U8）
- U2: `company-profile.md` 空欄埋め（会社情報）
- U3: 研修 Features / Flow / 困りごとの本文
- U4: 思想コピー
- U5: コンサル / 開発の文言
- U6: 問い合わせフォーム送信方式の決定

## 既知の不整合（順次解消）
- `site-structure.md` / `seo-settings.md` が旧構成（`/demo` 残存）。正は `site-design.md`。
- `tasks.md` のタスク ID `F030` が二重採番（UI-I と ANL-A）。
- `company-profile.md` / `seo-settings.md` は具体値が大半空欄。

## 運用ルール（詳細は AGENTS.md）
- 開始時 `git pull` → 終了時 `PROJECT-STATUS.md` 更新 → commit → `git push`
- 依存は `npm ci`

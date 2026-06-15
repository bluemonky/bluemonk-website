# PROJECT STATUS — BLUE MONK CONSULTING サイト

> 現在地ダッシュボード。**作業開始時に最初に読み、作業終了時に必ず更新してコミット**すること。
> 詳細設計は [site-design.md](./site-design.md)、タスク台帳は [tasks.md](./tasks.md)、規約は [../AGENTS.md](../AGENTS.md)。

- **最終更新日**: 2026-06-15
- **フェーズ**: Phase 1（静的サイト + ダミーチャット）— TOP刷新・研修中級編を本番公開済み
- **本番**: https://www.bluemonk.co.jp/ ／ https://bluemonk-website.vercel.app/

## 直近の意思決定（2026-06-15）
1. **SSOT は git の `docs/` 配下**。AI規約は `AGENTS.md` に集約。remote は SSH。
2. サイトマップは `site-design.md` が正。`/demo` は廃止。
3. **TOPは「発光する禅」**（A禅ミニマル基調 + Bサイバー差し色）で実装。確定キャッチ「人とAIと共に進化する企業へ / – 共創が生み出す変革と未来 –」を明朝白抜き見出しに。
4. **マスコットは瞑想モンク画像**（`public/images/bluemonkey/blue-monk-zen.webp`・透過WebP）。スプライト12ポーズは廃止（静止表示）。VOICEセクションからは画像を外しテキストのみ。
5. **SERVICES と WORKS を統合** → メニューは SERVICES 一本化（WORKS削除）。`/works` → `/services` リダイレクト。実績/事例は各サービス詳細内で見せる方針。
6. **ChatGPT研修に中級編を移行**（9講義＋時間割3パターン、初級/中級タブ切替）。研修ページは HERO/CTA をダーク化（TOP寄せ）、本文は可読ライト維持。
7. 全体の**縦余白を圧縮**（py-24/32 → py-12〜20）。TOPと研修ページで密度統一。
8. **チャットは将来、Mac Mini のローカル Qwen3(Ollama) を Tailscale Funnel 経由で接続**予定（OpenAI互換API・合言葉トークンで保護・コンテンツ注入方式）。現状は Phase1 ダミー応答。
9. **表記の使い分け**: マスコット = **Bluemonky** / 会社 = **Blue Monk Consulting**（正式名・ロゴ・フッターの `BLUE MONK CONSULTING` は維持）。単独「BLUE MONK」は使わない。
10. **HERO背景**に `public/images/hero/site-bg.webp`（ダーク・回路＋下部グロー、元 `Webサイト_背景.png` を最適化）を反映。

## 実装状況
| ページ | 状態 |
|---|---|
| `/`（トップ） | ✅ 発光する禅・6セクション（HERO/PHILOSOPHY/SERVICES/VOICE/INSIGHTS/CONTACT）。PROOFは実数字未確定のため非表示 |
| `/services`（ハブ） | ✅ 実装（WORKS統合先） |
| `/services/training` | ✅ 実装 |
| `/services/training/chatgpt` | ✅ 実装（中級編追加・ダーク寄せ・レベルタブ） |
| `/works` | ↪︎ `/services` へリダイレクト（統合） |
| `/contact` | 🟡 partial（mailto のみ） |
| `/about` `/philosophy` `/insights` | ⬜ Coming Soon スタブ |
| `/services/consulting` `/services/development` | ⬜ Coming Soon スタブ |
| `/legal/privacy` `/legal/terms` | ⬜ Coming Soon スタブ |

## 次にやること
- **実コンテンツ差し替え（DRAFT解消）**: TOP PROOFの実績数字 → PROOF復活 / philosophy(思想) / about(代表プロフィール・顔写真) / 研修 困りごと4つ目・Features3・Flow3・中級編説明 / 設立年(2024 or 2025)
- `/philosophy` `/about` `/insights` `/services/{consulting,development}` の本文実装
- `/contact` 送信方式の決定と本実装
- チャットバックエンド（ローカルQwen3 / Ollama / Tailscale Funnel + 合言葉）— Phase2相当だが先行可
- 仕上げ: OGP画像 / favicon / sitemap.ts / robots.ts / JSON-LD

## ブロッカー / 未決事項（ヒアリング待ち）
- U2: 会社情報（設立年含む） / U4: 思想コピー / U5: コンサル・開発の文言 / U6: 問い合わせ方式
- PROOFの実績数字（公開可否含む）、代表の顔写真、実績企業名の公開可否

## 既知の不整合（順次解消）
- `site-structure.md` / `seo-settings.md` が旧構成（`/demo` 残存）。正は `site-design.md`。
- `tasks.md` のタスク ID `F030` 二重採番。
- `company-profile.md` / `seo-settings.md` は具体値が大半空欄。

## 運用ルール（詳細は AGENTS.md）
- 開始時 `git pull` → 終了時 `PROJECT-STATUS.md` 更新 → commit → `git push`
- 依存は `npm ci`

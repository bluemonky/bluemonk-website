# AGENTS.md — AI エージェント共通規約（単一の正 / SSOT）

このファイルは Blue Monk Consulting サイトを編集する **すべての AI エージェント
（Claude Code / Cursor 等）の規約の唯一の正（Single Source of Truth）** です。
`CLAUDE.md` と `.cursor/rules/` はこのファイルを参照します。
規約を変えるときは **このファイルだけ** を更新してください（重複管理しない）。

> 本リポジトリは **複数の Mac の Claude Code と Cursor** で共同編集されます。
> 最新情報を共有できる唯一の手段は **git にコミットされたリポジトリ内ドキュメント** です。
> ローカルの AI 記憶・エディタ設定は他環境へ共有されないため、信頼しないでください。

## 0. 最初に読むもの（作業開始時に必須）
1. `docs/PROJECT-STATUS.md` … 現在地・直近の意思決定・進行中タスク・ブロッカー
2. `docs/site-design.md` … サイト全体設計（サイトマップ・方針）の正
3. `docs/tasks.md` … タスク台帳

## 1. 同期ルール（複数 Mac / 複数ツール）
- **作業開始時**: 必ず `git pull`（または `git fetch && git rebase`）。
- **作業終了時**: `docs/PROJECT-STATUS.md` を更新 → こまめに commit → `git push`。
- 依存導入は `npm install` ではなく **`npm ci`**（lockfile 尊重・環境差防止）。
- `main` = 本番（Vercel 自動デプロイ）。push は即デプロイされる前提で扱う。

### 新しい Mac / 環境の初回セットアップ
リポジトリは **SSH 接続**で運用する（HTTPS URL に Personal Access Token を埋め込まない）。
新しい Mac では初回のみ次を行う:

1. SSH 鍵を生成（マシンごとに 1 つ）:
   ```bash
   ssh-keygen -t ed25519 -C "aoki@bluemonk.co.jp (マシン名)" -f ~/.ssh/id_ed25519 -N ""
   ```
2. 公開鍵 `~/.ssh/id_ed25519.pub` を GitHub に登録: https://github.com/settings/ssh/new
   - **Title**: そのMacが分かる名前（例 `aoki-macbookpro-m3`）
   - **Key type**: Authentication Key
3. 接続確認: `ssh -T git@github.com` →「Hi bluemonky! …」が出れば OK
4. remote が SSH か確認（違えば設定）:
   ```bash
   git remote -v   # → git@github.com:bluemonky/bluemonk-website.git であること
   git remote set-url origin git@github.com:bluemonky/bluemonk-website.git
   ```
5. `npm ci` で依存をインストール

> セキュリティ: PAT を `.git/config` の URL に平文で埋め込まない。漏れたトークンは
> GitHub（Settings → Developer settings → Personal access tokens）で即失効する。

## 2. 変更前の確認（重要）
- コードを変更する前に、必ずユーザーに確認を取る。
- 特に **UI / テキストの変更は事前承認が必須**。
- 実装前に **全体設計とコンテンツを段階的に合意**する（設計先行・データ先行）。

## 3. コンテンツ運用
- コンテンツは **TSX に直書きせず `src/data/` 配下に分離**する。
- **主役の訪問者＝売上 10〜600 億円・非IT系の中堅企業の経営者/意思決定者**。情報は主語を
  BMC（送り手の独白）→ 訪問者の用件へ反転し **「ユーザーの問い → 解決 → 信頼 → 行動」** の順で見せる。
  ブランド資産（思想・3CX）は消さず "なぜ信頼できるか／深さ" を支える**裏付け層へ退避**（一次ナビから外し、
  フッター／各ページ末／TOP「もっと知りたい人へ」から到達）。
- **到達点は全サービス共通で「まずは無料相談（話すだけ）」**。各章末に文脈 CTA を段階配置し自然に誘導する
  （強 CTA は DE-RISK 章・ヘッダー・フッターに限定、各章末は控えめテキストリンク主体で「発光する禅」の静謐を保つ）。
  KPI は「信用 / 印象 / 理解 ＋ 無料相談への到達」。ただし価格訴求には寄せない（相応の予算がある層）。
- 事業比率は **研修 5（特に ChatGPT 活用研修）: コンサル 3: 開発 2**。
- 本番で使う画像は `public/images/` 配下。`docs/references/` は参考資料置き場
  （本番非配信・画像は git 非追跡）。

## 4. コードスタイル
- TypeScript strict mode / 関数コンポーネント + hooks
- インデント 2 スペース
- コンポーネント名・ファイル名は PascalCase

## 5. Tech Stack / コマンド
- Next.js 16 (App Router) / TypeScript / Tailwind CSS v4 / Vercel
- `npm run dev` / `npm run build` / `npm run lint`

## 6. ドキュメント地図（docs/）
| ファイル | 役割 |
|---|---|
| `site-design.md` | 全体設計（正）。サイトマップ・方針 |
| `tasks.md` | タスク台帳（ID / 状態） |
| `PROJECT-STATUS.md` | 現在地ダッシュボード（毎セッション更新） |
| `company-profile.md` | 会社情報（コンテンツ一次情報・空欄埋め対象） |
| `seo-settings.md` | SEO 設定（一次情報・要更新） |
| `site-structure.md` | 旧構成（DEPRECATED 予定。正は site-design.md） |
| `references/` | 参考資料（本番非使用。画像は git 非追跡） |

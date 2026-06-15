# Blue Monk Consulting - Development Guidelines

> **AI 規約の正は [AGENTS.md](./AGENTS.md)。** Claude Code は作業前に必ず
> `AGENTS.md` と `docs/PROJECT-STATUS.md` / `docs/site-design.md` / `docs/tasks.md` を読むこと。
> 規約（変更前確認・コードスタイル・同期ルール・CTA 順など）は AGENTS.md に集約している。

## Project Overview
BLUE MONK CONSULTING 公式Webサイト
- URL: https://www.bluemonk.co.jp/
- Vercel: https://bluemonk-website.vercel.app/

## Tech Stack
- Next.js 16 (App Router)
- TypeScript / Tailwind CSS v4
- Vercel (hosting)

## Design
- Dark blue cyber theme with glow effects（背景 #030b1a / アクセント シアン #00d4ff・ミント #00ffcc）
- Blue Monkey character (sprite-based, 12 poses)
- Future: Lottie/Rive animation

## Common Commands
```bash
npm ci           # 依存インストール（lockfile 尊重・環境差防止）
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Project Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── about/ philosophy/ works/ insights/ contact/
│   ├── services/        # ハブ + consulting/ development/ training/(chatgpt/)
│   └── legal/           # privacy/ terms/
├── components/
│   ├── layout/ ui/ services/(chatgpt/)
│   └── BlueMonkey / ChatBubble / Header / HeroSection / Footer
└── data/                # コンテンツ（TSX 直書きせずここに分離）
    └── services/
public/images/           # 本番画像（bluemonkey/ logo/ ほか）
docs/                    # 設計・タスク・SSOT（site-design / tasks / PROJECT-STATUS …）
```

## Phase Plan
- Phase 1: Static site + dummy chat (CURRENT)
- Phase 2: AI API integration (RAG)
- Phase 3: Full RAG with knowledge base
- Phase 4: Analytics + lead management

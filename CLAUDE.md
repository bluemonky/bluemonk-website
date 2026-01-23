# Blue Monk Consulting - Development Guidelines

## Project Overview
BLUE MONK CONSULTING 公式Webサイト
- URL: https://www.bluemonk.co.jp/
- Vercel: https://bluemonk-website.vercel.app/

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (hosting)

## Design
- Dark blue cyber theme with glow effects
- Blue Monkey character (sprite-based, 12 poses)
- Future: Lottie/Rive animation

## Development Rules

### IMPORTANT: 変更前に必ず確認
- コードを変更する前に、必ずユーザーに確認を取ること
- 特にUI/テキストの変更は事前承認が必要

### Code Style
- TypeScript strict mode
- Functional components with hooks
- 2-space indentation
- Component names: PascalCase
- File names: PascalCase for components

### Git Workflow
- main branch is production (auto-deploy to Vercel)
- Always commit with clear Japanese/English messages
- Push triggers automatic deployment

## Common Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Project Structure
```
src/
├── app/           # Next.js App Router pages
├── components/    # React components
public/
└── images/
    └── bluemonkey/  # Blue Monkey sprites
```

## Phase Plan
- Phase 1: Static site + dummy chat (CURRENT)
- Phase 2: AI API integration (RAG)
- Phase 3: Full RAG with knowledge base
- Phase 4: Analytics + lead management

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

12. **立体感の付与(2026-06-16)**: 「暗すぎ・平坦」解消のため、背景より明るい面トークン(--surface-1/2)＋落ち影(--elev)を追加。`.glass-card` を「上から光が当たった浮いた面」(明るめグラデ＋上辺ハイライト＋内側ハイライト＋落ち影)に。body に上部の柔らかなアンビエント光源で奥行きを付与（発光する禅＝光は一点の節度は維持）。

13. **差し色（オレンジ）＝二灯化(2026-06-16)**: 「まだのっぺり」への対応。寒色シアン一色の平坦さを、暖色オレンジ `--ember(#ff8a3c)` を差し色に入れて温度差で解消。画面固定の二灯アンビエント層 `.bm-ambient`、主要CTAのオレンジ塗り、カードhover暖色、PROOF実績ドット、HERO暖色光。→ **14でCTAの塗りを撤回（派手すぎ）。**

14. **差し色の再設計＝静かなCTA＋構造の立体感(2026-06-16)**: フィードバック「ボタンは目立ちすぎ、他はほとんど変わらない」を受け、設計を反転（多方向案→批判パネル→統合のワークフローで決定）。**(a) CTAを静かに**: `.btn-ember` を全面オレンジ塗り→**無塗りゴースト＋細枠＋左端 inset の ember キーライン**へ（クラス名据置でcall site 3箇所無改修。文字#e6f6ffでAA余裕）。**(b) 立体感を本文全体へ**: `.section-plane`（背景より明るい床パネル）を PROOF/VOICE/CONTACT に交互適用し明→暗→明の段差リズム／主役カードを `.card-interactive.glass-card` にスコープして深い落ち影＋接地暗線＋hover -6px lift（bare .glass-card=ChatBubble/legal/about dl/Coming Soon は非汚染）。**(c) 差し色を構造線に分散**: カード上辺の **ember→シアン リムライト**（`.card-interactive.glass-card::before`・光の方向統一）／セクション区切り `.section-rule` 左端の短い ember の節（章の起点）／PROOFドット／hover時に矢印を ember 化。基調シアン維持・reduced-motion で lift 無効。**全セクション実画面検証・本番ビルドOK。** ※強度は `--ember`・`.section-plane` の rgba・`::before` リムの opacity で調整可。

15. **立体感の深化＝“彫り込み”(2026-06-16)**: 「もう少し立体感を」への対応（上品さは後退させない方針／多方向案→批判パネル→統合のワークフローで決定）。彩度・グロー・動きを増やさず**距離の手がかりだけ**を足す: (a) **マスコット接地**=足元に接地影＋静止の寒色ペデスタル光（宙吊り解消・明滅なし）、(b) **極微グレイン `.bm-grain`**（彩度0・opacity .03・本文背面 -z-10）で暗部バンディングを均し闇に厚み、(c) **主役カード内部の地グラデ**（上明・下沈み＋内ハイライト青寄り／color-mix フォールバック付・`.card-interactive.glass-card` 限定）、(d) **HERO見出しの3層影**（HERO inline 限定・グロー総量据置）、(e) **chat-shell の前景化**（落ち影深化＋上辺inset）、(f) **section-plane の縦ビネット**（背景レイヤに畳み込み・端64pxのみ・中央可読域は無加工）。固定全面レイヤは ambient+grain の2枚に限定。reduced-motion 追記不要（全て静的）。**実画面検証・本番ビルドOK。**

16. **サブページ全体の整合パス(2026-06-16)**: TOP以外の全11ページを「発光する禅」の設計言語へ統一（多方向監査→統合のワークフローで決定）。**(a) 共通 PageHero 見出しに3層影 `.page-hero-title`**（globals共通 .serif-display は壊さず全サブに一括）。**(b) ベタ塗りCTAを廃し `.btn-ember` ゴーストに統一**（philosophy/consulting/development/chatgpt HERO・最終）。**(c) 区切りを `.section-rule`（ember節）に統一**（about/philosophy/consulting/development）。**(d) 主役カードを `.card-interactive.glass-card` 化**（philosophy MissionVision／consulting・development Challenges／insights テーマ／contact）＝上辺リム＋深い影。**(e) 行き止まり解消**（services/training/insights/contact に btn-ember 導線、contactメールもゴーストCTA化）。**(f) a11y**（legal最終改定日 gray-400・メールmailtoリンク化・draftNotice ember線・ul role、training placeholder可読化、chatgpt ライトタブのアクティブを深ティール #0e7490 でAA確保、philosophy KEYWORDS可読化）。**(g) services ハブのタイルも TOP と同じ均整化**。意図的差異（chatgpt本文ライトbookend／bareカードの静けさ／DRAFT）は維持。サブHEROへの暖色glow追加・床planeは過剰回避で見送り。**主要ページ実画面検証・本番ビルドOK。**

17. **FDE主役化＝サービス3本柱(2026-06-16)**: 開発支援を **FDE（Forward Deployed Engineer／現場常駐型の伴走実装）** へ発展させ全面に。サービスを **FDE(主役)／AXコンサル／研修** の3本柱に再編（`src/data/services/index.ts`：slug `development`→`fde`、`consulting`→AX表記、`training`）。**`/fde` をトップ階層に新設**（`src/data/fde.ts`＋`src/app/fde/page.tsx`。ガッツリ: What is FDE／なぜ今／提供(AX/DX×実装一体)／違い(4類型)／価値／進め方／体制(経営×ITエンジニア×MBA)／対象／FAQ／実績(DRAFT)／CTA）。ナビに「FDE」追加。**`/services/development`→`/fde` 恒久リダイレクト**・sitemap更新（`/fde`追加・development除外）。コンサルは「**AXコンサル（AI活用DX・戦略伴走）**」へ表記変更＋FDEとの住み分け一文。呼称は「FDE（Forward Deployed Engineer）＋日本語補足」。**コピーは要確認(DRAFT)**＝固有実績/数値は非掲載（確定後に出典付き公開）。調査→多方向→批判→統合のワークフローで作成。site-copy.md 再生成(672項目)。**主要セクション実画面検証・本番ビルドOK。**

## 実装状況
| ページ | 状態 |
|---|---|
| `/`（トップ） | ✅ 発光する禅（SERVICESはFDE主役の3本柱） |
| `/fde`（FDEフラッグシップ） | ✅ 新設（**たたき台DRAFT**・実績は準備中＝非掲載） |
| `/services`（ハブ） | ✅ 3本柱（FDE/AXコンサル/研修） |
| `/services/training` ・ `/services/training/chatgpt` | ✅ 実装（中級編・ダーク寄せ） |
| `/services/consulting`（AXコンサル） ・ `/services/development`（↪︎`/fde`） | ✅ 実装（**たたき台**コピー） |
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

## 文章の編集（編集用ミラー）
- **`docs/site-copy.md`** = サイト全文の**編集用ミラー**（622項目・keypath アンカー付き）。本文を直接編集 → 「site-copy.md を反映して」で `src/data/`・各 `page.tsx` の metadata へ正確に反映する（md→data は手動同期）。**サイト本体は md を直接参照しない**（runtime の正は `src/data/`）。
- ページ直書きだった文言（PageHero見出し・本文・導線ラベル・chatgpt各見出し）も **`src/data/pages.ts` / `training-chatgpt.ts` の `sections`** に集約済み（ミラーに反映）。
- 再生成（データ→md）: `node scripts/gen-site-copy.mjs`（依存は typescript のみ）。**data を直接編集したら再生成**して md を最新化する。

## 運用ルール（詳細は AGENTS.md）
- 開始時 `git pull` → 終了時 `PROJECT-STATUS.md` 更新 → commit → `git push`
- 依存は `npm ci`

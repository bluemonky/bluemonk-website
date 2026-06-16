// =============================================================================
// サイト文章の「編集用Markdown」生成スクリプト（データ → docs/site-copy.md）
//
// 目的: src/data/*.ts に集約されたサイト文章を、非コードで編集しやすい1枚の
//       Markdown に書き出す。利用者はこの md を編集し、その内容を元に
//       担当（Claude / 開発者）が src/data へ反映する（md→data は手動同期）。
//       ※サイトはこの md を直接参照しない（runtime の正は src/data のまま）。
//
// 実行: node scripts/gen-site-copy.mjs
//       （依存は devDependency の typescript のみ。ts を transpile して取り込む）
//
// 各文章には keypath（例: `proof.cases[0].summary`）を見出しとして付ける。
// これが反映先の正確なアンカーになる（編集時に keypath 行は変えないこと）。
// =============================================================================

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import ts from 'typescript';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// 取り込み順（= md 上の並び）と、ページ見出し。
const FILES = [
  ['src/data/home.ts', 'トップページ', '/'],
  ['src/data/pages.ts', '各ページの文言（PageHero見出し・本文・導線ラベル）', '各ページ'],
  ['src/data/services/index.ts', 'サービス共通カード（TOP / サービス一覧で使用）', '/services'],
  ['src/data/services/training-chatgpt.ts', 'ChatGPT研修ページ', '/services/training/chatgpt'],
  ['src/data/services/consulting.ts', 'コンサルティングページ', '/services/consulting'],
  ['src/data/services/development.ts', '開発支援ページ', '/services/development'],
  ['src/data/about.ts', '会社・代表（About）', '/about'],
  ['src/data/philosophy.ts', '思想（Philosophy）', '/philosophy'],
  ['src/data/legal.ts', '法務・その他（プライバシー / 利用規約 等）', '/legal'],
];

// 文章ではない設定キーは出力しない（リンク先・種別・真偽値など）。
// 文章ではない設定/構造値（リンク先・種別・連番・ID・真偽値など）は出力しない。
// ※日程の数値（durationHours / day / year / totalHours 等）は編集対象なので残す。
const DENY_KEYS = new Set([
  'href', 'slug', 'weight', 'comingSoon', 'level', 'number', 'lectureNumber', 'id', 'status',
]);
// 同一内容のエイリアス export（重複出力を避ける）。
const SKIP_EXPORTS = new Set(['lectures', 'schedulePatterns']);

// ts ソースを ESM の JS に transpile し、data: URL として動的 import する。
// ソース上の `export const NAME` 出現順（ESM 名前空間はキーがソートされるため、
// 読みやすさのため元の定義順を別途取得する）。
function exportOrder(absPath) {
  const src = readFileSync(absPath, 'utf8');
  const order = [];
  const re = /export const ([A-Za-z_$][\w$]*)/g;
  let m;
  while ((m = re.exec(src)) !== null) order.push(m[1]);
  return order;
}

async function importTs(absPath) {
  const src = readFileSync(absPath, 'utf8');
  const out = ts.transpileModule(src, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
      isolatedModules: true,
    },
    fileName: absPath,
  }).outputText;
  const url = 'data:text/javascript;charset=utf-8,' + encodeURIComponent(out);
  return import(url);
}

const esc = (s) => String(s).replace(/\r\n/g, '\n');

// 値を再帰的に walk し、文字列/数値の葉を keypath 付きで出力する。
function walk(keyPrefix, value, lines) {
  if (value === null || value === undefined) return;

  if (typeof value === 'string' || typeof value === 'number') {
    const text = esc(value);
    lines.push(`- **\`${keyPrefix}\`**`);
    // 値はインデントして転記（改行は維持）。空文字は (空) と明示。
    if (text === '') {
      lines.push('  (空)');
    } else {
      for (const ln of text.split('\n')) lines.push(`  ${ln}`);
    }
    lines.push('');
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, i) => walk(`${keyPrefix}[${i}]`, item, lines));
    return;
  }

  if (typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      if (DENY_KEYS.has(k)) continue;
      walk(`${keyPrefix}.${k}`, v, lines);
    }
    return;
  }
  // boolean 等は出力しない。
}

const head = [];
head.push('# サイト文章（編集用）');
head.push('');
head.push('> このファイルは **編集用のミラー** です。本文を直接書き換えてください。');
head.push('> 各文章の見出し `` `keypath` `` は反映先のアンカーです（**この行は変えない**）。');
head.push('> 編集後に「site-copy.md を反映して」と伝えると、`src/data/` の該当箇所へ正確に反映します。');
head.push('> サイト本体はこのファイルを直接参照しません（runtime の正は `src/data/`）。');
head.push('> 再生成（データ→このファイル）: `node scripts/gen-site-copy.mjs`');
head.push('');
head.push('---');
head.push('');

const body = [];
let total = 0;

for (const [rel, pageTitle, route] of FILES) {
  const abs = resolve(ROOT, rel);
  const mod = await importTs(abs);
  body.push(`## ${pageTitle}　\`${route}\``);
  body.push('');
  body.push(`<sub>反映先ファイル: \`${rel}\`</sub>`);
  body.push('');

  // ソース定義順で並べる（名前空間のソート順ではなく）。念のため未捕捉分も末尾に。
  const srcOrder = exportOrder(abs);
  const exportNames = [...new Set([...srcOrder, ...Object.keys(mod)])].filter(
    (n) => n in mod && !SKIP_EXPORTS.has(n),
  );
  for (const name of exportNames) {
    const val = mod[name];
    if (typeof val === 'function') continue;
    const before = body.length;
    const section = [];
    walk(name, val, section);
    // 文章が1つも無い export（設定のみ）は見出しごと省略。
    if (section.length === 0) continue;
    body.push(`### ${name}`);
    body.push('');
    body.push(...section);
    total += section.filter((l) => l.startsWith('- **`')).length;
    void before;
  }
  body.push('---');
  body.push('');
}

// ---------------------------------------------------------------------------
// ページの SEO 文章（メタデータ: title / description）。page.tsx 内の文字列を抽出。
// 反映先は各 page.tsx の metadata。値だけを編集する想定。
// ---------------------------------------------------------------------------
const PAGES = [
  ['src/app/page.tsx', 'トップ', '/'],
  ['src/app/services/page.tsx', 'サービス一覧', '/services'],
  ['src/app/services/training/page.tsx', '研修ハブ', '/services/training'],
  ['src/app/services/training/chatgpt/page.tsx', 'ChatGPT研修', '/services/training/chatgpt'],
  ['src/app/services/consulting/page.tsx', 'コンサルティング', '/services/consulting'],
  ['src/app/services/development/page.tsx', '開発支援', '/services/development'],
  ['src/app/about/page.tsx', '会社・代表', '/about'],
  ['src/app/philosophy/page.tsx', '思想', '/philosophy'],
  ['src/app/insights/page.tsx', 'インサイト', '/insights'],
  ['src/app/contact/page.tsx', 'お問い合わせ', '/contact'],
  ['src/app/legal/privacy/page.tsx', 'プライバシーポリシー', '/legal/privacy'],
  ['src/app/legal/terms/page.tsx', '利用規約', '/legal/terms'],
];

function pickStr(block, key) {
  const m = block.match(new RegExp(`${key}:\\s*(?:'([^']*)'|"([^"]*)")`));
  return m ? (m[1] ?? m[2]) : null;
}

body.push('## ページのSEO文章（メタデータ）');
body.push('');
body.push('<sub>反映先: 各 `page.tsx` の `metadata`。サイト全体の既定タイトル・OGPは `src/app/layout.tsx`。</sub>');
body.push('');
for (const [rel, name, route] of PAGES) {
  let src;
  try { src = readFileSync(resolve(ROOT, rel), 'utf8'); } catch { continue; }
  const block = (src.match(/export const metadata[\s\S]*?\n};/) || [src])[0];
  const title = pickStr(block, 'title');
  const desc = pickStr(block, 'description');
  if (!title && !desc) continue;
  body.push(`### ${name}　\`${route}\``);
  body.push('');
  body.push(`<sub>反映先ファイル: \`${rel}\`</sub>`);
  body.push('');
  if (title) { body.push('- **`metadata.title`**'); body.push(`  ${esc(title)}`); body.push(''); total++; }
  if (desc) { body.push('- **`metadata.description`**'); body.push(`  ${esc(desc)}`); body.push(''); total++; }
}
body.push('---');
body.push('');

const md = head.concat(body).join('\n').replace(/\n{3,}/g, '\n\n').replace(/\n+$/,'\n');
const outPath = resolve(ROOT, 'docs/site-copy.md');
writeFileSync(outPath, md, 'utf8');
console.log(`✅ 生成: docs/site-copy.md（文章 ${total} 項目 / ${FILES.length} ファイル）`);

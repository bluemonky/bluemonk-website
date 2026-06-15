import { redirect } from 'next/navigation';

/**
 * WORKS は SERVICES に統合済み。
 * 実績・事例は「サービスの中で見せる」方針のため、/works は /services へ恒久リダイレクトする。
 * 既存の外部リンク・ブックマーク互換のためにルートは残し、Server Component で redirect するだけ。
 */
export default function WorksPage() {
  redirect('/services');
}

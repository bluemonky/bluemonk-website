import { permanentRedirect } from 'next/navigation';

/**
 * 開発支援は FDE（Forward Deployed Engineer／現場常駐型の伴走実装）へ発展。
 * 旧 /services/development は /fde へ恒久リダイレクト（HTTP 308）。
 * 既存リンク・ブックマーク互換のためルートは残し、検索エンジンにも恒久移転を伝える。
 */
export default function DevelopmentPage() {
  permanentRedirect('/fde');
}

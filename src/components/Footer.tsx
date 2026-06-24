import Link from 'next/link';

// フッター導線。一次ナビから外した「思想 / 3CX」もここから到達できるようにする
// （裏付け層のオーファン化を防ぐ）。
const footerLinks = [
  { label: 'FDE', href: '/fde' },
  { label: '研修', href: '/services/training' },
  { label: 'AXコンサル', href: '/services/consulting' },
  { label: '思想', href: '/philosophy' },
  { label: '3CX', href: '/3cx' },
  { label: '会社・代表', href: '/about' },
  { label: 'お問い合わせ', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(0,212,255,0.1)] bg-[#030b1a]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* フッターナビ（思想/3CX を含む全体導線） */}
        <nav
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-6 text-sm text-gray-400"
          aria-label="フッターナビゲーション"
        >
          {footerLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[#00d4ff] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>&copy; {currentYear} BLUE MONK CONSULTING</span>
          </div>

          {/* INSIGHTS（予告枠の受け皿）＋ 法務 */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link href="/insights" className="hover:text-[#00d4ff] transition-colors">
              INSIGHTS
            </Link>
            <Link href="/legal/privacy" className="hover:text-[#00d4ff] transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:text-[#00d4ff] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative star */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8" aria-hidden="true">
        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21 8 14l-6-4.6h7.6z" />
        </svg>
      </div>
    </footer>
  );
}

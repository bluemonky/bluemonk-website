import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(0,212,255,0.1)] bg-[#030b1a]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>&copy; {currentYear} BLUE MONK CONSULTING</span>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
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
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21 8 14l-6-4.6h7.6z"/>
        </svg>
      </div>
    </footer>
  );
}

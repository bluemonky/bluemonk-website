'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  { label: 'SERVICES', href: '/services' },
  { label: 'FDE', href: '/fde' },
  { label: 'ChatGPT研修', href: '/services/training/chatgpt' },
  { label: 'ABOUT', href: '/about' },
  { label: 'INSIGHTS', href: '/insights' },
  { label: 'PHILOSOPHY', href: '/philosophy' },
];

/** 現在地判定: 完全一致、または下層ページ（href 配下）を現在地とみなす。 */
function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname() ?? '';
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = () => setIsMenuOpen(false);

  // Esc で閉じる（開いているときのみ）。
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  // 開いたら最初のリンクへフォーカスを移す。
  useEffect(() => {
    if (isMenuOpen) firstMenuLinkRef.current?.focus();
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030b1a]/80 backdrop-blur-md border-b border-[rgba(0,212,255,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="BLUE MONK CONSULTING">
            <Image
              src="/images/logo/bluemonk-mark.png"
              alt=""
              width={516}
              height={330}
              priority
              className="h-10 sm:h-12 w-auto group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.6)] transition-all"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-bold text-white tracking-wider">BLUE MONK</span>
              <span className="text-[10px] sm:text-xs text-[#00d4ff] tracking-[0.2em]">CONSULTING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="メインナビゲーション">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors relative group ${
                    active ? 'text-[#00d4ff]' : 'text-gray-300 hover:text-[#00d4ff]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#00d4ff] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/contact"
              aria-current={isActivePath(pathname, '/contact') ? 'page' : undefined}
              className="btn-ember text-sm font-semibold rounded-full px-5 py-1.5"
            >
              相談する
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="lg:hidden p-2 text-gray-300 hover:text-[#00d4ff] transition-colors"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-nav"
            className="lg:hidden py-4 border-t border-[rgba(0,212,255,0.1)]"
            aria-label="メインナビゲーション"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    ref={index === 0 ? firstMenuLinkRef : undefined}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`text-sm font-medium transition-colors py-2 ${
                      active ? 'text-[#00d4ff]' : 'text-gray-300 hover:text-[#00d4ff]'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                aria-current={isActivePath(pathname, '/contact') ? 'page' : undefined}
                className="btn-ember text-sm font-semibold rounded-full px-4 py-2 text-center mt-2"
                onClick={closeMenu}
              >
                相談する
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

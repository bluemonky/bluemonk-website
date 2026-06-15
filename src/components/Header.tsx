'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'SERVICES', href: '/services' },
  { label: 'ChatGPT研修', href: '/services/training/chatgpt' },
  { label: 'ABOUT', href: '/about' },
  { label: 'INSIGHTS', href: '/insights' },
  { label: 'PHILOSOPHY', href: '/philosophy' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#00d4ff] transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-medium text-[#00d4ff] border border-[#00d4ff]/50 rounded-full px-4 py-1.5 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] transition-all"
            >
              相談する
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-[#00d4ff] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
          <nav className="lg:hidden py-4 border-t border-[rgba(0,212,255,0.1)]">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-[#00d4ff] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-sm font-medium text-[#00d4ff] border border-[#00d4ff]/50 rounded-full px-4 py-2 text-center hover:bg-[#00d4ff]/10 transition-all mt-2"
                onClick={() => setIsMenuOpen(false)}
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

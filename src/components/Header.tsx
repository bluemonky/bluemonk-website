'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'WORKS', href: '/works' },
  { label: 'ABOUT AOKI', href: '/about' },
  { label: 'AI DEMO', href: '/demo' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030b1a]/80 backdrop-blur-md border-b border-[rgba(0,212,255,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#00d4ff] flex items-center justify-center bg-[#030b1a] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-shadow">
              <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-8 sm:h-8">
                <circle cx="20" cy="12" r="6" fill="#00d4ff" opacity="0.8"/>
                <ellipse cx="20" cy="28" rx="12" ry="8" fill="none" stroke="#00d4ff" strokeWidth="2"/>
                <circle cx="16" cy="10" r="1.5" fill="#030b1a"/>
                <circle cx="24" cy="10" r="1.5" fill="#030b1a"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white tracking-wider">BLUE MONK</span>
              <span className="text-[10px] sm:text-xs text-[#00d4ff] tracking-[0.2em]">CONSULTING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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
              className="btn-primary text-sm"
            >
              CONSULTATION
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-[#00d4ff] transition-colors"
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
          <nav className="md:hidden py-4 border-t border-[rgba(0,212,255,0.1)]">
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
                className="btn-primary text-sm text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CONSULTATION
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

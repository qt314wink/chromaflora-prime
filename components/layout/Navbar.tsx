'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/constants';
import { useNarrative } from '@/hooks/useNarrative';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { uiState, corruption } = useNarrative();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[200] transition-all duration-500',
        scrolled
          ? 'backdrop-blur-xl bg-bg-primary/80 border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <nav
        className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display font-bold text-gradient-rainbow text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          {SITE.name}
        </Link>

        <ul className="hidden md:flex items-center gap-6" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {'external' in link && link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
                >
                  {link.label} ↗
                </a>
              ) : (
                <a
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span
            className={cn(
              'hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border transition-all duration-500',
              corruption > 0.5
                ? 'border-rainbow-red/40 text-rainbow-red bg-rainbow-red/5'
                : corruption > 0.1
                ? 'border-rainbow-orange/40 text-rainbow-orange bg-rainbow-orange/5'
                : 'border-rainbow-cyan/40 text-rainbow-cyan bg-rainbow-cyan/5'
            )}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{
                background:
                  corruption > 0.5
                    ? 'var(--color-rainbow-red)'
                    : corruption > 0.1
                    ? 'var(--color-rainbow-orange)'
                    : 'var(--color-rainbow-cyan)',
              }}
            />
            {uiState.toUpperCase()}
          </span>
        </div>
      </nav>
    </header>
  );
}

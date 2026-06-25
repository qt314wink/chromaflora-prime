'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SITE, NAV_LINKS } from '@/lib/constants';

export function FooterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <footer className="relative py-16 px-4 border-t border-white/5">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <p className="font-display font-bold text-gradient-rainbow text-lg">
            {SITE.name}
          </p>
          <p className="text-text-muted text-xs font-mono mt-1">
            {SITE.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {'external' in link && link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-text-secondary transition-colors duration-200 text-xs font-mono"
                  >
                    {link.label} ↗
                  </a>
                ) : (
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-text-secondary transition-colors duration-200 text-xs font-mono"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-text-muted text-xs font-mono">
          Built with Next.js · WebGL · Framer Motion
        </p>
      </motion.div>
    </footer>
  );
}

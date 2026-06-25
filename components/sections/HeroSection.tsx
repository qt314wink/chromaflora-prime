'use client';

import { useEffect, useState } from 'react';
import { narrativeEngine } from '@/lib/narrative';
import { glitchText } from '@/lib/utils';
import { useNarrativeStore } from '@/lib/store';

const TITLE = 'CHROMAFLORA PRIME';
const SUBTITLE = 'Where code blooms into consciousness.';

export function HeroSection() {
  const corruption = useNarrativeStore((s) => s.corruption);
  const [displayTitle, setDisplayTitle] = useState(TITLE);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (corruption < 0.1) {
      setDisplayTitle(TITLE);
      return;
    }
    const id = setInterval(() => setTick((t) => t + 1), 80);
    return () => clearInterval(id);
  }, [corruption]);

  useEffect(() => {
    if (corruption < 0.1) return;
    const progress = 1 - corruption;
    setDisplayTitle(glitchText(TITLE, progress));
  }, [tick, corruption]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rainbow-purple/10 animate-blob-morph blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-rainbow-cyan/10 animate-blob-morph blur-3xl"
          style={{ animationDelay: '-5s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-rainbow-magenta/5 animate-blob-morph blur-3xl"
          style={{ animationDelay: '-10s' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl">
        <p className="text-rainbow-cyan font-mono text-xs tracking-[0.3em] uppercase mb-6">
          Digital Garden — v1.0.0
        </p>

        <h1
          className="text-gradient-rainbow font-display font-bold tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: 1.1 }}
        >
          {displayTitle}
        </h1>

        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {SUBTITLE}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => narrativeEngine.advance()}
            className="px-8 py-3 rounded-full bg-rainbow-cyan text-bg-primary font-semibold hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rainbow-cyan"
          >
            Enter the Garden
          </button>
          <a
            href="#features"
            className="px-8 py-3 rounded-full border border-white/20 text-text-primary hover:border-white/40 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Explore Features
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" aria-hidden="true">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-rainbow-cyan/50 mx-auto" />
      </div>
    </section>
  );
}

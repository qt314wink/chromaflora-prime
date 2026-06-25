'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { narrativeEngine } from '@/lib/narrative';
import { glitchText } from '@/lib/utils';
import { useNarrativeStore } from '@/lib/store';
import { Button, Badge } from '@/components/ui';

const TITLE = 'CHROMAFLORA PRIME';
const SUBTITLE = 'Where code blooms into consciousness.';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export function HeroSection() {
  const corruption = useNarrativeStore((s) => s.corruption);
  const [displayTitle, setDisplayTitle] = useState(TITLE);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (corruption < 0.1) { setDisplayTitle(TITLE); return; }
    const id = setInterval(() => setTick((t) => t + 1), 80);
    return () => clearInterval(id);
  }, [corruption]);

  useEffect(() => {
    if (corruption < 0.1) return;
    setDisplayTitle(glitchText(TITLE, 1 - corruption));
  }, [tick, corruption]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rainbow-purple/10 animate-blob-morph blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-rainbow-cyan/10 animate-blob-morph blur-3xl" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-rainbow-magenta/5 animate-blob-morph blur-3xl" style={{ animationDelay: '-10s' }} />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <Badge variant="cyan" className="mb-6">Digital Garden — v1.0.0</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-gradient-rainbow font-display font-bold tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: 1.1 }}
        >
          {displayTitle}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {SUBTITLE}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="primary" onClick={() => narrativeEngine.advance()}>
            Enter the Garden
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Features
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" aria-hidden="true">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-rainbow-cyan/50 mx-auto" />
      </div>
    </section>
  );
}

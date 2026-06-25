'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNarrativeStore } from '@/lib/store';
import { narrativeEngine } from '@/lib/narrative';
import { Card, Badge, Button } from '@/components/ui';
import { UI_STATE_LABELS } from '@/lib/constants';
import type { ShowcaseItem } from '@/types';

const ITEMS: ShowcaseItem[] = [
  { id: 'pristine', title: 'Pristine State', subtitle: 'Zero entropy. The garden at rest.', tag: 'PHASE 01', color: 'var(--color-rainbow-cyan)', glowColor: 'rgba(51,204,255,0.2)' },
  { id: 'corrupted', title: 'Corruption Phase', subtitle: 'Entropy bleeds through the seams.', tag: 'PHASE 03', color: 'var(--color-rainbow-red)', glowColor: 'rgba(255,51,102,0.2)' },
  { id: 'transcendent', title: 'Transcendence', subtitle: 'Chaos resolved into something new.', tag: 'PHASE 06', color: 'var(--color-rainbow-purple)', glowColor: 'rgba(153,51,255,0.2)' },
];

export function ShowcaseSection() {
  const uiState = useNarrativeStore((s) => s.uiState);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="showcase" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge variant="cyan" className="mb-4">Narrative Arc</Badge>
          <h2 className="text-gradient-rainbow font-display font-bold text-4xl md:text-5xl mb-4">Six States of Being</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
            >
              <Card glow={item.glowColor} className="p-8 text-center h-full">
                <p className="font-mono text-xs tracking-widest mb-4" style={{ color: item.color }}>{item.tag}</p>
                <h3 className="font-display font-bold text-2xl text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.subtitle}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-text-muted font-mono text-xs mb-4">
            Current state: <span className="text-rainbow-cyan">{(UI_STATE_LABELS[uiState] ?? uiState).toUpperCase()}</span>
          </p>
          <Button variant="danger" size="sm" onClick={() => narrativeEngine.advance()}>
            ADVANCE STATE →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

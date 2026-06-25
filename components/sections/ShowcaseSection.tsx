'use client';

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

  return (
    <section id="showcase" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="cyan" className="mb-4">Narrative Arc</Badge>
          <h2 className="text-gradient-rainbow font-display font-bold text-4xl md:text-5xl mb-4">Six States of Being</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ITEMS.map((item) => (
            <Card key={item.id} glow={item.glowColor} className="p-8 text-center">
              <p className="font-mono text-xs tracking-widest mb-4" style={{ color: item.color }}>{item.tag}</p>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.subtitle}</p>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <p className="text-text-muted font-mono text-xs mb-4">
            Current state: <span className="text-rainbow-cyan">{(UI_STATE_LABELS[uiState] ?? uiState).toUpperCase()}</span>
          </p>
          <Button variant="danger" size="sm" onClick={() => narrativeEngine.advance()}>
            ADVANCE STATE →
          </Button>
        </div>
      </div>
    </section>
  );
}

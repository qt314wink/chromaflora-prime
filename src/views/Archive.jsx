import React from 'react';
import { ARCHIVE_ENTRIES } from '../data/content';
import { SpectralInk } from '../components/shared/SpectralInk';

export const ArchiveView = () => (
  <div className="max-w-2xl mx-auto space-y-40 py-20 pb-80">
    {ARCHIVE_ENTRIES.map(entry => (
      <section key={entry.id} className="animate-bloom">
        <span className="font-mono text-[10px] text-accent tracking-[0.4em] mb-4 block">{entry.subtitle}</span>
        <h2 className="text-4xl font-serif italic mb-6">{entry.title}</h2>
        <p className="text-lg leading-relaxed text-white/60 mb-8">{entry.text}</p>
        <SpectralInk>[DATA_REVEALED: The nebula remembers.]</SpectralInk>
      </section>
    ))}
  </div>
);

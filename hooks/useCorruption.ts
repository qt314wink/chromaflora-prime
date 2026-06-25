'use client';

import { useEffect, useState } from 'react';
import { useNarrativeStore } from '@/lib/store';
import { generateGlitchChar } from '@/lib/utils';

/**
 * Returns a glitched version of the provided text driven by current corruption level.
 * Re-randomises every `intervalMs` when corruption is active.
 */
export function useCorruptedText(text: string, intervalMs = 80): string {
  const corruption = useNarrativeStore((s) => s.corruption);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (corruption < 0.05) {
      setDisplay(text);
      return;
    }

    const id = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char) => {
            if (char === ' ') return ' ';
            return Math.random() < corruption ? generateGlitchChar() : char;
          })
          .join('')
      );
    }, intervalMs);

    return () => clearInterval(id);
  }, [text, corruption, intervalMs]);

  return display;
}

/**
 * Returns corruption level 0-1 and derived boolean flags.
 */
export function useCorruption() {
  const corruption = useNarrativeStore((s) => s.corruption);
  return {
    corruption,
    isClean: corruption < 0.05,
    isLow: corruption >= 0.05 && corruption < 0.3,
    isMedium: corruption >= 0.3 && corruption < 0.6,
    isHigh: corruption >= 0.6,
    isCritical: corruption >= 0.8,
  };
}

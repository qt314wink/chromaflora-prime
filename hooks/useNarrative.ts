'use client';

import { useNarrativeStore } from '@/lib/store';
import { narrativeEngine } from '@/lib/narrative';
import type { UIState } from '@/types';

/**
 * Primary hook for consuming narrative state in components.
 * Provides reactive UIState, corruption level, and advance/reset helpers.
 */
export function useNarrative() {
  const uiState = useNarrativeStore((s) => s.uiState);
  const corruption = useNarrativeStore((s) => s.corruption);
  const chapter = useNarrativeStore((s) => s.chapter);
  const glitchActive = useNarrativeStore((s) => s.glitchActive);

  const advance = () => narrativeEngine.advance();

  const jumpTo = (state: UIState) =>
    useNarrativeStore.getState().setUIState(state);

  const isState = (...states: UIState[]) => states.includes(uiState);

  return {
    uiState,
    corruption,
    chapter,
    glitchActive,
    advance,
    jumpTo,
    isState,
    isPristine: uiState === 'pristine',
    isCorrupted: uiState === 'corrupted' || uiState === 'fragmenting',
    isAuthenticated: uiState === 'authenticated' || uiState === 'transcendent',
  };
}

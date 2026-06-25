import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import type { UIState, CorruptionLevel, AudioState } from '@/types';

/* — Narrative ————————————————————————— */
interface NarrativeStore {
  uiState: UIState;
  corruption: CorruptionLevel;
  chapter: number;
  glitchActive: boolean;
  setUIState: (state: UIState) => void;
  setCorruption: (level: CorruptionLevel) => void;
  setChapter: (chapter: number) => void;
  setGlitchActive: (active: boolean) => void;
  advance: () => void;
}

export const useNarrativeStore = create<NarrativeStore>()(
  subscribeWithSelector((set, get) => ({
    uiState: 'pristine',
    corruption: 0,
    chapter: 0,
    glitchActive: false,

    setUIState: (uiState) => set({ uiState }),
    setCorruption: (corruption) => set({ corruption }),
    setChapter: (chapter) => set({ chapter }),
    setGlitchActive: (glitchActive) => set({ glitchActive }),

    advance: () => {
      const { uiState } = get();
      const transitions: Record<UIState, UIState> = {
        pristine: 'awakening',
        awakening: 'corrupted',
        corrupted: 'fragmenting',
        fragmenting: 'authenticated',
        authenticated: 'transcendent',
        transcendent: 'transcendent',
      };
      set({ uiState: transitions[uiState] });
    },
  }))
);

/* — Audio ————————————————————————————— */
interface AudioStore extends AudioState {
  setInitialized: (v: boolean) => void;
  setEnabled: (v: boolean) => void;
  setVolume: (v: number) => void;
  setAnalyserData: (data: Uint8Array | null) => void;
}

export const useAudioStore = create<AudioStore>()((set) => ({
  initialized: false,
  enabled: false,
  volume: 0.7,
  analyserData: null,
  setInitialized: (initialized) => set({ initialized }),
  setEnabled: (enabled) => set({ enabled }),
  setVolume: (volume) => set({ volume }),
  setAnalyserData: (analyserData) => set({ analyserData }),
}));

/* — UI ———————————————————————————————— */
interface UIStore {
  cursorX: number;
  cursorY: number;
  isHovering: boolean;
  modalOpen: boolean;
  setCursor: (x: number, y: number) => void;
  setHovering: (v: boolean) => void;
  setModalOpen: (v: boolean) => void;
}

export const useUIStore = create<UIStore>()((set) => ({
  cursorX: 0,
  cursorY: 0,
  isHovering: false,
  modalOpen: false,
  setCursor: (cursorX, cursorY) => set({ cursorX, cursorY }),
  setHovering: (isHovering) => set({ isHovering }),
  setModalOpen: (modalOpen) => set({ modalOpen }),
}));

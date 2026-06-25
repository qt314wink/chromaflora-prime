/* ============================================
   CHROMAFLORA PRIME — TYPE DEFINITIONS
   ============================================ */

export type UIState =
  | 'pristine'
  | 'awakening'
  | 'corrupted'
  | 'fragmenting'
  | 'authenticated'
  | 'transcendent';

export type CorruptionLevel = number;

export interface NarrativeState {
  uiState: UIState;
  corruption: CorruptionLevel;
  chapter: number;
  glitchActive: boolean;
  audioEnabled: boolean;
}

export type NarrativeListener = (state: UIState) => void;

export interface FluidConfig {
  fluidColor: string;
  blend: number;
  intensity: number;
  force: number;
  distortion: number;
  radius: number;
  rainbow: boolean;
}

export interface CursorState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  isHovering: boolean;
  isClicking: boolean;
}

export interface AudioState {
  initialized: boolean;
  enabled: boolean;
  volume: number;
  analyserData: Uint8Array | null;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
  delay: number;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  color: string;
  glowColor: string;
}

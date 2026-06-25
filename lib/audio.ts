'use client';

import { useAudioStore } from './store';

let audioCtx: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let gainNode: GainNode | null = null;

export function initAudio(): void {
  if (typeof window === 'undefined' || audioCtx) return;
  try {
    audioCtx = new (
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext
    )();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    gainNode = audioCtx.createGain();
    gainNode.gain.value = useAudioStore.getState().volume;
    analyser.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    useAudioStore.getState().setInitialized(true);
    useAudioStore.getState().setEnabled(true);
    startAnalyserLoop();
  } catch (e) {
    console.warn('[ChromaFlora] Web Audio init failed:', e);
  }
}

function startAnalyserLoop(): void {
  if (!analyser) return;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);
  function tick() {
    if (!analyser) return;
    analyser.getByteFrequencyData(dataArray);
    useAudioStore.getState().setAnalyserData(new Uint8Array(dataArray));
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export function setVolume(value: number): void {
  if (!gainNode || !audioCtx) return;
  gainNode.gain.setTargetAtTime(value, audioCtx.currentTime, 0.01);
  useAudioStore.getState().setVolume(value);
}

export function playTone(
  frequency: number,
  duration = 0.1,
  type: OscillatorType = 'sine'
): void {
  if (!audioCtx || !gainNode) return;
  const osc = audioCtx.createOscillator();
  const env = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  env.gain.setValueAtTime(0.15, audioCtx.currentTime);
  env.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  osc.connect(env);
  env.connect(gainNode);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

export const getAudioContext = () => audioCtx;
export const getAnalyser = () => analyser;

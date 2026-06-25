import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* ============================================
   CLASS UTILITY — shadcn/ui compatible
   ============================================ */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ============================================
   MATH UTILITIES
   ============================================ */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

export function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/* ============================================
   STRING UTILITIES
   ============================================ */
export function generateGlitchChar(): string {
  const chars =
    '!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return chars[Math.floor(Math.random() * chars.length)];
}

export function glitchText(text: string, progress: number): string {
  return text
    .split('')
    .map((char, i) => {
      if (char === ' ') return ' ';
      const threshold = i / text.length;
      return progress < threshold ? generateGlitchChar() : char;
    })
    .join('');
}

/* ============================================
   TIMING UTILITIES
   ============================================ */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

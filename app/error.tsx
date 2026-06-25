'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[ChromaFlora] Runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#ff3366] mb-4">
          System Error
        </p>
        <h1
          className="font-bold mb-4 text-white"
          style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
        >
          Corruption Detected
        </h1>
        <p className="text-[#a0a0b0] mb-2 leading-relaxed font-mono text-sm">
          {error.message || 'An unexpected error occurred.'}
        </p>
        {error.digest && (
          <p className="text-[#606070] mb-8 font-mono text-xs">digest: {error.digest}</p>
        )}
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#ff3366]/50 text-[#ff3366] hover:bg-[#ff3366]/10 transition-colors duration-300 font-mono text-sm tracking-widest"
        >
          Attempt Recovery
        </button>
      </div>
    </div>
  );
}

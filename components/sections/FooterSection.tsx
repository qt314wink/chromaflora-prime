'use client';

export function FooterSection() {
  return (
    <footer className="relative py-16 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold text-gradient-rainbow text-lg">
            ChromaFlora Prime
          </p>
          <p className="text-text-muted text-xs font-mono mt-1">
            Where code blooms into consciousness.
          </p>
        </div>
        <p className="text-text-muted text-xs font-mono">
          Built with Next.js · WebGL · Framer Motion
        </p>
      </div>
    </footer>
  );
}

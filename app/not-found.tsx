import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#33ccff] mb-4">
          Error 404
        </p>
        <h1
          className="font-bold mb-4 text-white"
          style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
        >
          Page Not Found
        </h1>
        <p className="text-[#a0a0b0] mb-8 leading-relaxed">
          This node does not exist in the garden.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#33ccff]/50 text-[#33ccff] hover:bg-[#33ccff]/10 transition-colors duration-300 font-mono text-sm tracking-widest"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

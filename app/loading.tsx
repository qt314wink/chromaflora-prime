export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-[#33ccff] border-t-transparent animate-spin" />
        <p className="font-mono text-xs text-[#606070] tracking-widest uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}

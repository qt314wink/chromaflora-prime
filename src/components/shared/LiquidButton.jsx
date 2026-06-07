import React from 'react';
import { useChromaOS } from '../../context/ChromaOS';

export const LiquidButton = ({ children }) => {
  const { emitRipple } = useChromaOS();
  return (
    <div className="relative group">
      <button onClick={(e) => emitRipple(e.clientX, e.clientY, 2)} className="relative z-10 px-6 py-2 bg-accent text-black font-bold uppercase tracking-widest rounded-full transition-transform active:scale-95">
        {children}
      </button>
      <div className="absolute inset-0 gooey-filter opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
        <div className="absolute top-0 left-1/4 w-6 h-6 bg-accent rounded-full group-hover:-translate-y-8 transition-all duration-500" />
        <div className="absolute top-0 right-1/4 w-4 h-4 bg-accent rounded-full group-hover:-translate-y-6 transition-all duration-700" />
      </div>
    </div>
  );
};

import React, { useEffect, useRef } from 'react';
export const ElasticCursor = () => {
  const ref = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const dPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  useEffect(() => {
    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', move);
    const anim = () => {
      const dx = pos.current.x - dPos.current.x;
      const dy = pos.current.y - dPos.current.y;
      dPos.current.x += dx * 0.15; dPos.current.y += dy * 0.15;
      const s = Math.sqrt(dx*dx + dy*dy);
      const a = Math.atan2(dy, dx) * 180 / Math.PI;
      if (ref.current) { ref.current.style.transform = `translate3d(${dPos.current.x}px, ${dPos.current.y}px, 0) rotate(${a}deg) scale(${1+s/100}, ${1-s/200})`; }
      rafId.current = requestAnimationFrame(anim);
    };
    rafId.current = requestAnimationFrame(anim);
    return () => {
      window.removeEventListener('mousemove', move);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);
  return <div ref={ref} className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full z-[9999] pointer-events-none mix-blend-difference shadow-[0_0_15px_var(--accent)]" />;
};

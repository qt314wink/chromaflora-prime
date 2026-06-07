import React, { useState } from 'react';
import { useChromaOS } from '../context/ChromaOS';
import { Fingerprint, Unlock } from 'lucide-react';

export const TerminalView = () => {
  const { identity, setIdentity, emitRipple } = useChromaOS();
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value);
    if(e.target.value.toLowerCase() === 'dark_aether') {
      setIdentity(p => ({...p, isCorrupted: !p.isCorrupted}));
      setInput('');
      emitRipple(window.innerWidth/2, window.innerHeight/2, 5);
    }
  };
  return (
    <div className="max-w-md mx-auto h-[60vh] flex flex-col items-center justify-center space-y-12">
      <div className={`w-32 h-32 rounded-full border border-accent/30 flex items-center justify-center transition-all duration-700 ${identity.isAuthenticated ? 'bg-accent text-black scale-110' : 'text-accent'}`} onClick={() => setIdentity(p=>({...p, isAuthenticated: true}))}>
        {identity.isAuthenticated ? <Unlock size={40}/> : <Fingerprint size={40} className="animate-pulse" />}
      </div>
      <div className="w-full glass-card p-4 rounded-xl font-mono text-xs space-y-2">
        <div className="text-accent uppercase tracking-widest">Protocol_Wait...</div>
        <input value={input} onChange={handleInput} placeholder="Type code..." className="w-full bg-transparent outline-none border-none text-white uppercase" />
      </div>
    </div>
  );
};

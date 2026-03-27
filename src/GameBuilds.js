import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Cpu, Wind } from 'lucide-react';

const GameBuilds = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans overflow-hidden relative">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <Link to="/" className="text-slate-500 hover:text-purple-400 transition-colors uppercase tracking-widest text-xs font-bold">← Back to Hub</Link>
        
        <header className="mt-12 mb-20">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase text-white leading-none mb-6">Game<br/>Builds</h1>
          <div className="h-1 w-24 bg-purple-500 mb-6" />
          <p className="text-slate-400 max-w-md">Developing physics-based simulations and immersive browser-based interactive experiences.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group p-1 bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl">
            <div className="bg-[#050505] p-10 rounded-[22px] h-full border border-white/5 group-hover:border-purple-500/50 transition-all">
              <Gamepad2 className="text-purple-400 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2 uppercase">Core Engine</h3>
              <p className="text-slate-500 font-light text-sm">Custom collision logic and state management for high-performance browser gaming.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBuilds;

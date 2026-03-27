import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, Database, Layers } from 'lucide-react';

const WebBuilds = () => {
  const specs = [
    { title: "FARM Stack", detail: "FastAPI + React + MongoDB", icon: <Database className="text-cyan-400" /> },
    { title: "Edge Ready", detail: "Global Vercel Deployment", icon: <Zap className="text-yellow-400" /> },
    { title: "UI/UX", detail: "Tailwind CSS + Framer Motion", icon: <Layers className="text-purple-400" /> }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-widest text-xs font-bold">← Back to Hub</Link>
        
        <header className="mt-12 mb-16 border-l-4 border-cyan-500 pl-8">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4">High-Velocity<br/>Web Systems</h1>
          <p className="text-slate-400 max-w-xl text-lg font-light">Architecting scalable digital environments with sub-second latency and zero-trust security protocols.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {specs.map((spec, i) => (
            <div key={i} className="p-8 bg-slate-900/30 border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all">
              <div className="mb-4">{spec.icon}</div>
              <h3 className="font-bold uppercase tracking-tight mb-1">{spec.title}</h3>
              <p className="text-slate-500 text-sm">{spec.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-900/20 to-transparent p-12 rounded-3xl border border-cyan-500/10">
          <h2 className="text-2xl font-bold mb-4 uppercase italic">Live Deployment Status</h2>
          <div className="flex items-center gap-3 text-cyan-500 font-mono text-sm">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
            NODE: OTDAISURFER.SURF // STABLE
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBuilds;

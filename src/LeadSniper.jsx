import React, { useState } from 'react';
import { Search, Crosshair, Zap, ShieldCheck, Database, Sliders } from 'lucide-react';

const LeadSniper = () => {
  const [isScanning, setIsScanning] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 relative">
      
      {/* Background Neon Mist */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Header with Neon Aqua Underline */}
        <div className="mb-12">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter">
            Lead <span className="text-neon-aqua">Sniper</span> V1.0
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-aqua via-neon-purple to-transparent mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: Search Controls */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-900/50 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neon-pink mb-4 block">Target Parameters</label>
              
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-white/30" size={18} />
                  <input 
                    type="text" 
                    placeholder="Industry (e.g. AI SaaS)" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:border-neon-aqua outline-none transition-all"
                  />
                </div>
                <div className="relative">
                  <Sliders className="absolute left-3 top-3 text-white/30" size={18} />
                  <input 
                    type="text" 
                    placeholder="Location (e.g. Charleston)" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:border-neon-aqua outline-none transition-all"
                  />
                </div>
              </div>

              <button 
                onClick={startScan}
                className={`w-full mt-6 py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(57,255,20,0.2)]
                  ${isScanning ? 'bg-neon-green text-black animate-pulse' : 'bg-white/5 text-neon-green border border-neon-green/50 hover:bg-neon-green hover:text-black'}
                `}
              >
                {isScanning ? <Zap size={16} className="animate-bounce" /> : <Crosshair size={16} />}
                {isScanning ? 'Scanning Tides...' : 'Initialize Extraction'}
              </button>
            </div>

            {/* Shield Info */}
            <div className="p-6 rounded-[2rem] bg-neon-purple/5 border border-neon-purple/20 flex gap-4">
              <ShieldCheck className="text-neon-purple shrink-0" />
              <p className="text-[10px] leading-relaxed text-slate-400 uppercase font-bold tracking-wider">
                Compliance Protocol Alpha: All extractions are verified via the <span className="text-neon-purple">Sentinel</span> to avoid shadowban risks.
              </p>
            </div>
          </div>

          {/* RIGHT: Live Data Feed */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/50 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-xl">
              <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Database size={14} className="text-neon-blue" /> Live Data Stream
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-neon-green animate-ping"></div>
                  <div className="w-2 h-2 rounded-full bg-neon-green"></div>
                </div>
              </div>
              
              <div className="p-6 h-[400px] overflow-y-auto space-y-4 font-mono">
                {isScanning ? (
                  <div className="space-y-2">
                    <p className="text-neon-aqua text-xs">{`> Accessing Neural Layer...`}</p>
                    <p className="text-neon-pink text-xs">{`> Bypassing Gateways...`}</p>
                    <p className="text-neon-green text-xs">{`> Extracting Lead Data [####-------]`}</p>
                  </div>
                ) : (
                  <p className="text-white/20 text-xs italic">Awaiting target initialization...</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeadSniper;

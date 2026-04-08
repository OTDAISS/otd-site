import React from 'react';
import { Lock, Target, ShieldAlert, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Vault() {
  return (
    <div className="min-h-screen bg-black text-white p-12 flex flex-col items-center justify-center">
      <div className="max-w-xl text-center">
        <div className="inline-block p-4 bg-red-500/10 border border-red-500/20 rounded-full mb-8">
          <ShieldAlert className="text-red-500" size={40} />
        </div>
        <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-4">The Vault</h1>
        <p className="text-slate-500 mb-12 uppercase tracking-widest text-[10px] font-bold">// Restricted Access // Elite Tier Only</p>
        
        <div className="grid gap-4">
          <Link to="/vault/sniper" className="flex items-center justify-between p-6 bg-slate-900 border border-white/5 rounded-2xl hover:bg-emerald-500 group transition-all">
            <div className="flex items-center gap-4 text-left">
              <Target size={24} className="text-emerald-500 group-hover:text-black" />
              <div>
                <span className="block font-black uppercase italic group-hover:text-black">Lead Sniper V1.0</span>
                <span className="text-[10px] text-slate-500 uppercase group-hover:text-black/60">High-Precision Scraping</span>
              </div>
            </div>
            <Lock size={16} className="text-slate-700 group-hover:text-black/40" />
          </Link>
        </div>
      </div>
    </div>
  );
}

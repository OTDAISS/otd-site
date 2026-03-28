import React, { useState } from 'react';
import { Gauge, AlertTriangle, Zap, TrendingUp } from 'lucide-react';

const FuelGauge = () => {
  const [limits] = useState({
    openai: { spent: 45, budget: 50, color: 'text-cyan-400' },
    anthropic: { spent: 12, budget: 40, color: 'text-purple-400' },
    elevenlabs: { spent: 28, budget: 30, color: 'text-pink-500' }
  });

  const calculatePercent = (spent, budget) => Math.min((spent / budget) * 100, 100);

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl max-w-md font-sans">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-cyan-500/10 p-2 rounded-lg text-cyan-400">
            <Gauge size={24} />
          </div>
          <h2 className="text-xl font-black italic tracking-tighter text-white uppercase">Fuel Gauge</h2>
        </div>
        <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded-full font-mono uppercase tracking-widest">Live Sync</span>
      </div>

      <div className="space-y-8">
        {Object.entries(limits).map(([provider, data]) => {
          const percent = calculatePercent(data.spent, data.budget);
          const isCritical = percent > 85;
          return (
            <div key={provider} className="relative">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Provider</p>
                  <p className={`text-sm font-black uppercase ${data.color}`}>{provider}</p>
                </div>
                <div className="text-right">
                  <span className="text-white font-mono font-bold">${data.spent}</span>
                  <span className="text-slate-600 text-xs font-mono"> / ${data.budget}</span>
                </div>
              </div>
              <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-[2px]">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${isCritical ? 'bg-gradient-to-r from-red-600 to-orange-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]' : `bg-gradient-to-r from-slate-700 to-current ${data.color.replace('text', 'bg')}`}`}
                  style={{ width: `${percent}%` }}
                />
              </div>
              {isCritical && <div className="absolute -right-2 -top-2 animate-pulse"><AlertTriangle className="text-red-500" size={14} /></div>}
            </div>
          );
        })}
      </div>

      <div className="mt-10 pt-6 border-t border-slate-900 grid grid-cols-2 gap-4">
        <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-1">
            <TrendingUp size={12} />
            <span className="text-[10px] font-bold uppercase">Est. Total</span>
          </div>
          <p className="text-xl font-mono font-bold text-white">$85.00</p>
        </div>
        <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-1">
            <Zap size={12} />
            <span className="text-[10px] font-bold uppercase">Efficiency</span>
          </div>
          <p className="text-xl font-mono font-bold text-cyan-400">92%</p>
        </div>
      </div>
    </div>
  );
};

export default FuelGauge;

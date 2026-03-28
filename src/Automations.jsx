import React from 'react';
import { Workflow, Activity, Radio, Database } from 'lucide-react';

const logs = [
  { time: "10:55:01", action: "Lead Captured", system: "Phase 1: Ingestion" },
  { time: "10:58:44", action: "Sentiment Analysis", system: "Phase 2: Logic" },
  { time: "11:01:12", action: "Proposal Dispatched", system: "Phase 3: Delivery" }
];

export default function Automations() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-black italic uppercase mb-2">Automation Matrix</h1>
            <p className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.3em]">// LIVE SYSTEM FEED</p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
          </div>
        </div>
        
        <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl">
          {logs.map((log, i) => (
            <div key={i} className="flex items-center gap-6 p-8 border-b border-slate-800 last:border-0 hover:bg-emerald-500/5 transition-colors group">
              <span className="font-mono text-emerald-500 text-xs w-20">{log.time}</span>
              <Workflow size={20} className="text-slate-600 group-hover:text-emerald-500 transition-colors" />
              <div className="flex-grow">
                <span className="font-black italic uppercase text-lg tracking-tight block">{log.action}</span>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{log.system}</span>
              </div>
              <Radio size={16} className="text-slate-800 group-hover:text-emerald-900 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

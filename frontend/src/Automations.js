```javascript
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

        <div className="space-y-4 font-mono text-xs">
          {logs.map((log, i) => (
            <div key={i} className="bg-slate-900/50 p-4 border-l-2 border-emerald-500 flex justify-between">
              <span className="text-slate-500">[{log.time}]</span>
              <span className="text-white uppercase font-bold">{log.action}</span>
              <span className="text-emerald-500/50">{log.system}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ); 
}
``` [4, 5]

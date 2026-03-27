import React, { useState } from 'react';
import { Target, Search, Download, Terminal, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadSniper = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState([]);

  const startScan = () => {
    setIsScanning(true);
    // Simulating the "Sniper" logic
    setTimeout(() => {
      setResults([
        { name: "Alex Rivera", role: "CEO", company: "Nexus Tech", email: "a.rivera@nexustech.io" },
        { name: "Sarah Chen", role: "Founder", company: "Bloom AI", email: "chen@bloom.ai" },
        { name: "Marcus Vane", role: "Ops Director", company: "Vane Logistics", email: "m.vane@vanelog.com" }
      ]);
      setIsScanning(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link to="/vault" className="flex items-center gap-2 text-emerald-400 mb-8 hover:text-white transition-colors no-underline font-black uppercase tracking-widest text-[10px]">
          <ArrowLeft size={14} /> Back to Vault
        </Link>

        <div className="bg-slate-900/50 border border-emerald-500/20 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="relative z-10">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">Lead Sniper V1.0</h1>
            <p className="text-slate-400 mb-8 text-sm">Targeted LinkedIn Extraction & Enrichment Engine</p>

            <div className="grid gap-4 mb-8">
              <input 
                type="text" 
                placeholder="Target Industry (e.g. SaaS Founders)" 
                className="bg-slate-950 border border-slate-800 p-4 rounded-xl outline-none focus:border-emerald-500/50 transition-all font-mono text-sm"
              />
              <button 
                onClick={startScan}
                disabled={isScanning}
                className="bg-emerald-600 hover:bg-emerald-500 p-4 rounded-xl font-black italic uppercase tracking-widest transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isScanning ? <Terminal className="animate-spin" /> : <Target size={20} />}
                {isScanning ? "SCANNING TARGETS..." : "INITIALIZE SNIPER SCAN"}
              </button>
            </div>

            {results.length > 0 && (
              <div className="mt-8 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xs font-black text-emerald-400 uppercase tracking-widest">Extraction Results</h3>
                  <button className="text-[10px] bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-lg flex items-center gap-2 transition-colors">
                    <Download size={12} /> CSV
                  </button>
                </div>
                <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
                  {results.map((lead, i) => (
                    <div key={i} className="p-4 border-b border-slate-900 last:border-0 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-sm">{lead.name}</div>
                        <div className="text-[10px] text-slate-500 uppercase font-black">{lead.role} @ {lead.company}</div>
                      </div>
                      <div className="text-emerald-500 font-mono text-xs">{lead.email}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadSniper;

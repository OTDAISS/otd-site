import React from 'react';
import { BarChart3, Zap, ShieldCheck, RefreshCw } from 'lucide-react';

const TokenArbitrage = () => {
  const models = [
    { name: 'Gemini 3.1 Flash-Lite', provider: 'Google', input: 0.25, output: 1.50, latency: '210ms', score: '98%' },
    { name: 'GPT-5 Mini', provider: 'OpenAI', input: 0.25, output: 2.00, latency: '280ms', score: '95%' },
    { name: 'Claude 4.5 Haiku', provider: 'Anthropic', input: 1.00, output: 5.00, latency: '264ms', score: '99%' },
    { name: 'Llama 4 Maverick', provider: 'Meta', input: 0.26, output: 0.85, latency: '190ms', score: '92%' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 font-sans selection:bg-pink-500/30">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 border-b border-slate-800 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex items-center gap-5">
            <div className="bg-pink-500 p-4 rounded-2xl rotate-3 shadow-[0_0_30px_rgba(236,72,153,0.4)]">
              <BarChart3 className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-5xl font-black italic tracking-tighter uppercase text-white">Arbitrage Terminal</h1>
              <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest mt-1 flex items-center gap-2">
                <RefreshCw size={12} className="animate-spin-slow" /> Market Live // Sector 04
              </p>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
            <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Market Floor (Avg)</p>
            <p className="text-2xl font-mono font-bold text-white">$0.25 <span className="text-xs text-slate-600">/ 1M Tokens</span></p>
          </div>
        </header>

        <div className="bg-slate-900/30 rounded-[2.5rem] border border-slate-800 overflow-hidden backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/80 text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black">
                  <th className="p-8">Engine</th>
                  <th className="p-8">Input Costs</th>
                  <th className="p-8">Output Costs</th>
                  <th className="p-8"><Zap size={14} className="inline mr-2 text-cyan-400"/> Latency</th>
                  <th className="p-8">Efficiency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 font-mono text-sm">
                {models.map((model) => (
                  <tr key={model.name} className="hover:bg-cyan-500/5 transition-all group">
                    <td className="p-8">
                      <p className="text-white font-black italic text-lg group-hover:text-cyan-400 transition-colors uppercase">{model.name}</p>
                      <p className="text-[10px] text-slate-600 font-bold uppercase">{model.provider}</p>
                    </td>
                    <td className="p-8 text-slate-400">${model.input.toFixed(2)}</td>
                    <td className="p-8 text-slate-400">${model.output.toFixed(2)}</td>
                    <td className="p-8 text-cyan-500 font-black">{model.latency}</td>
                    <td className="p-8"><span className="bg-slate-800 text-pink-500 px-3 py-1 rounded-full border border-slate-700 text-xs font-black italic">{model.score}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 p-8 bg-gradient-to-br from-slate-900 to-[#020617] border border-pink-500/20 rounded-[2rem] flex flex-col md:flex-row items-center gap-8">
          <div className="bg-pink-500/10 p-5 rounded-3xl border border-pink-500/20 shadow-inner"><ShieldCheck className="text-pink-500" size={32} /></div>
          <div>
            <h3 className="font-black italic uppercase text-pink-500 text-lg mb-2 tracking-tight">Intelligence Brief</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
              Arbitrage detected in heavy-summarization workflows. Migrating from <span className="text-white font-bold">GPT-5 Mini</span> to <span className="text-cyan-400 font-bold underline underline-offset-4 decoration-2">Gemini 3.1 Flash-Lite</span> results in a <span className="text-white font-black italic">91.4% cost reduction</span> without significant accuracy decay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenArbitrage;

import React from 'react';
import { Coins, Zap, BarChart3 } from 'lucide-react';

const models = [
  { name: "GPT-4o", provider: "OpenAI", price: "$5.00", latency: "450ms", value: "High" },
  { name: "Claude 3.5", provider: "Anthropic", price: "$3.00", latency: "520ms", value: "Extreme" },
  { name: "Llama 3 (70B)", provider: "Groq", price: "$0.75", latency: "80ms", value: "Alpha" },
  { name: "DeepSeek V2", provider: "DeepSeek", price: "$0.14", latency: "650ms", value: "Budget" }
];

const TokenArbitrage = () => {
  return (
    <div className="bg-slate-900 border border-emerald-500/20 p-10 rounded-[3rem] shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <div className="flex items-center gap-3 text-emerald-400 mb-2">
            <Coins size={20} />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-black">// Cost Arbitrage</span>
          </div>
          <h2 className="text-4xl font-black uppercase italic">Token Arbitrage</h2>
        </div>
        <div className="bg-emerald-500 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          Live Rates
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-950">
            <tr>
              <th className="p-5 text-[10px] font-mono text-slate-500 uppercase tracking-widest">Model Engine</th>
              <th className="p-5 text-[10px] font-mono text-slate-500 uppercase tracking-widest">Input/1M</th>
              <th className="p-5 text-[10px] font-mono text-slate-500 uppercase tracking-widest">Latency</th>
              <th className="p-5 text-[10px] font-mono text-slate-500 uppercase tracking-widest text-right">Surfer Rating</th>
            </tr>
          </thead>
          <tbody className="bg-slate-900/40">
            {models.map((m, i) => (
              <tr key={i} className="border-t border-slate-800 hover:bg-emerald-500/5 transition-colors group">
                <td className="p-5">
                  <div className="font-bold text-white">{m.name}</div>
                  <div className="text-[9px] text-slate-600 uppercase font-mono">{m.provider}</div>
                </td>
                <td className="p-5 font-mono text-emerald-400">{m.price}</td>
                <td className="p-5 text-slate-400">
                  <div className="flex items-center gap-2 text-xs">
                    <Zap size={12} className={i === 2 ? "text-emerald-500" : "text-slate-700"} /> {m.latency}
                  </div>
                </td>
                <td className="p-5 text-right">
                  <span className={`px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-tighter ${
                    m.value === 'Alpha' ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {m.value}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TokenArbitrage;

import React from 'react';
import { Zap, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Automations = () => {
  const services = [
    { title: "LinkedIn Lead Sniper", desc: "AI-driven profile scraping and personalized outreach that actually gets replies.", price: "$1,200 Setup" },
    { title: "CRM Ghostwriter", desc: "Automated meeting transcription and CRM entry. Never take notes again.", price: "$2,500 Setup" },
    { title: "24/7 AI Voice Agent", desc: "Custom-trained voice models to handle inbound calls and book appointments.", price: "$3,000 Setup" },
    { title: "The 'Clay' Waterfall", desc: "Advanced lead enrichment to find verified emails for any decision-maker.", price: "$1,500 Setup" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-blue-400 mb-12 hover:text-white transition-colors no-underline font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Ecosystem
        </Link>

        <div className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 uppercase leading-none">
            AI Automations
          </h1>
          <p className="text-slate-400 mt-6 text-lg md:text-xl max-w-2xl font-medium">
            High-velocity infrastructure designed to buy your time back and scale your output.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-slate-900/40 border border-blue-500/10 p-10 rounded-[2.5rem] hover:border-blue-500/40 transition-all group relative">
              <Zap className="text-blue-400 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight">{s.title}</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">{s.desc}</p>
              <div className="flex items-center justify-between border-t border-slate-800/50 pt-6">
                <span className="text-green-400 font-black text-xl italic tracking-tighter">{s.price}</span>
                <span className="flex items-center gap-1 text-[10px] text-blue-400 uppercase tracking-[0.2em] font-black">
                  <ShieldCheck size={12}/> High ROI
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-blue-600/5 border border-blue-500/20 rounded-[3rem] text-center">
          <p className="text-slate-300 italic text-lg max-w-3xl mx-auto">
            "We don't just build bots; we build digital employees that never sleep."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Automations;

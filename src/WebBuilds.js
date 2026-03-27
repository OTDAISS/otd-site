WebBuilds.js 
WebBuilds.js
import React from 'react';
import { Globe, Code, Zap, ArrowLeft, Layout } from 'lucide-react';

const WebBuilds = () => {
  const tiers = [
    { title: "The 'MVP' Launchpad", desc: "A high-speed, single-page React site optimized for conversion and mobile.", price: "$2,500+" },
    { title: "Authority Ecosystem", desc: "5-10 pages, custom CMS integration, and automated SEO content engine.", price: "$5,000+" },
    { title: "SaaS Front-End", desc: "Complex web applications with user dashboards and API integrations.", price: "$10,000+" },
    { title: "Conversion Audit", desc: "We fix your current site's speed and UI to double your lead flow.", price: "$1,500" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => window.location.href = '/'} className="flex items-center gap-2 text-blue-400 mb-8 hover:text-white transition-colors">
          <ArrowLeft size={20} /> Back to Hub
        </button>

        <div className="mb-12">
          <h1 className="text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 uppercase">
            High-Velocity Web
          </h1>
          <p className="text-slate-400 mt-4 text-lg">Websites that load in milliseconds and convert for years.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className="bg-slate-900/40 border border-purple-500/10 p-8 rounded-3xl hover:bg-slate-900/60 transition-all group">
              <Layout className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2 italic uppercase">{t.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{t.desc}</p>
              <div className="text-xl font-black text-purple-400">{t.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 border-2 border-dashed border-slate-800 rounded-3xl text-center">
          <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-2">Technical Advantage</p>
          <p className="text-slate-300 italic">"We don't use templates. We build on the React/Vercel stack for 100/100 Google Lighthouse scores."</p>
        </div>
      </div>
    </div>
  );
};

export default WebBuilds;
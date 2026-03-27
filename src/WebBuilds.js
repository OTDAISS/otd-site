import React from 'react';
import { Globe, Code2, Rocket, ArrowLeft, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebBuilds = () => {
  const tiers = [
    { 
      title: "The Speed Demon", 
      desc: "Static, lightning-fast landing pages optimized for 100/100 Google Lighthouse scores.", 
      price: "$1,500" 
    },
    { 
      title: "The Ecosystem Hub", 
      desc: "Full-stack React applications with integrated CMS, auth, and custom API connections.", 
      price: "$4,500" 
    },
    { 
      title: "Conversion Funnels", 
      desc: "Data-driven funnels designed specifically to turn cold traffic into high-ticket sales.", 
      price: "$2,800" 
    },
    { 
      title: "Custom SaaS MVP", 
      desc: "Rapid prototyping of your software idea. From concept to functional code in weeks.", 
      price: "$8,000+" 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans text-center md:text-left">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="flex items-center justify-center md:justify-start gap-2 text-purple-400 mb-12 hover:text-white transition-colors no-underline font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Hub
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 uppercase leading-none">
            High-Velocity Web
          </h1>
          <p className="text-slate-400 mt-6 text-lg md:text-xl max-w-2xl font-medium mx-auto md:mx-0">
            We don't just build websites. We build high-performance digital assets that load instantly and convert aggressively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tiers.map((t, i) => (
            <div key={i} className="bg-slate-900/40 border border-purple-500/10 p-10 rounded-[2.5rem] hover:border-purple-500/40 transition-all group shadow-xl">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-2xl">
                  <Globe className="text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight">{t.title}</h3>
              </div>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium min-h-[60px]">{t.desc}</p>
              <div className="text-3xl font-black text-purple-400 italic tracking-tighter">{t.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-purple-600/5 border border-purple-500/20 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 shadow-inner">
          <Rocket size={48} className="text-purple-400 animate-pulse" />
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-2">Built for the Modern Web</h4>
            <p className="text-slate-400 italic">"If your site takes longer than 2 seconds to load, you've already lost the lead. We ensure you never lose a lead again."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBuilds;

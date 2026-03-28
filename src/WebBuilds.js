```javascript
import React from 'react'; 
import { Globe, Code2, Cpu, ExternalLink } from 'lucide-react';

const projects = [ 
  { name: "AI Surfer Dashboard", tech: "React / Vite / Tailwind", desc: "Real-time AI monitoring with pink & blue ocean aesthetics." }, 
  { name: "Ocean Tide API", tech: "FastAPI / PostgreSQL", desc: "Secure backend handling automated lead distribution." } 
];

export default function WebBuilds() { 
  return ( 
    <div className="min-h-screen bg-slate-950 text-white p-12"> 
      <h1 className="text-5xl font-black italic uppercase mb-4">Web Architecture</h1> 
      <p className="text-cyan-500 font-mono text-xs mb-12 tracking-[0.3em]">// FULL-STACK BUILD PORTFOLIO</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-cyan-500 transition-all">
            <h3 className="text-2xl font-bold italic mb-2">{project.name}</h3>
            <p className="text-cyan-500 font-mono text-[10px] uppercase mb-4">{project.tech}</p>
            <p className="text-slate-400 text-sm mb-6">{project.desc}</p>
            <button className="flex items-center gap-2 text-xs font-black uppercase text-cyan-400">
              View Deployment <ExternalLink size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  ); 
}
``` [6, 7]

import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Cpu, Zap, Lock, Database, Globe, Layout } from 'lucide-react';

const tools = [
  { name: "Lead Sniper", path: "/leadsniper", icon: <Target />, desc: "AI-Powered lead qualification & capture." },
  { name: "Workflows", path: "/workflows", icon: <Zap />, desc: "End-to-end automation triggers." },
  { name: "The Vault", path: "/vault-data", icon: <Database />, desc: "Confidential process maps & SOPs." },
  { name: "Web Builds", path: "/webbuilds", icon: <Globe />, desc: "Modern SaaS & E-comm architecture." },
  { name: "Member Pass", path: "/memberpass", icon: <Lock />, desc: "Client portal & access management." },
  { name: "Automations", path: "/automations", icon: <Cpu />, desc: "Cross-platform AI integrations." }
];

const Vault = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-black italic uppercase tracking-tighter text-emerald-400">The Vault</h1>
            <p className="text-slate-500 font-mono text-sm mt-2">// ACCESS LEVEL: FOUNDER // CLASSIFIED</p>
          </div>
          <Shield size={48} className="text-emerald-500/20" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <Link key={i} to={tool.path} className="group no-underline">
              <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2rem] hover:border-emerald-500/50 transition-all h-full">
                <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform">{tool.icon}</div>
                <h3 className="text-xl font-black uppercase italic mb-2">{tool.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vault;

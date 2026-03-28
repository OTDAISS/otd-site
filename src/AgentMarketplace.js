import { Users2, Download, Star, ShieldCheck, Cpu } from 'lucide-react';

const agents = [
 {
   id: 'ag_01',
   name: "The Cold Closer",
   role: "Sales & Outreach",
   rating: 4.9,
   desc: "Optimized for high-ticket B2B objection handling and appointment setting logic.",
   tech: "GPT-4o / Claude 3.5"
 },
 {
   id: 'ag_02',
   name: "The Social Architect",
   role: "Content & Growth",
   rating: 4.8,
   desc: "Expert in 'Voice Mimicry' for LinkedIn and X ghostwriting. Trained on 10k viral hooks.",
   tech: "Llama 3 / Mistral"
 },
 {
   id: 'ag_03',
   name: "The System Auditor",
   role: "Operations",
   rating: 5.0,
   desc: "Scans business workflows for 'leakage' and identifies precise points for AI integration.",
   tech: "Perplexity / Custom RAG"
 }
];

const AgentMarketplace = () => {
 return (
   <div className="bg-slate-950 min-h-screen text-white p-8 md:p-16">
    <div className="max-w-6xl mx-auto">
     <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
      <div>
       <div className="flex items-center gap-3 text-emerald-400 mb-4">
        <Cpu size={24} />
        <span className="font-mono text-xs uppercase tracking-[0.4em] font-black">// Deployment Ready</span>
       </div>
       <h1 className="text-6xl font-black italic uppercase tracking-tighter leading-none">
        Agent <br /> <span className="text-emerald-500">Marketplace</span>
       </h1>
       <p className="text-slate-500 mt-6 max-w-xl text-lg">
        Pre-configured AI personas ready to plug directly into your ecosystem. [cite: 5]
       </p>
      </div>
      <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl">
       <div className="text-[10px] uppercase font-black tracking-widest text-emerald-500 mb-2">Inventory Sync</div>
       <div className="flex items-center gap-2 text-2xl font-bold italic">
        <Users2 className="text-emerald-400" size={20} />
        12 New Personas This Week
       </div>
      </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {agents.map((agent) => (
       <div key={agent.id} className="group bg-slate-900/40 border border-slate-800 p-8 rounded-[3rem] hover:border-emerald-500/40 transition-all duration-500">
        <div className="flex justify-between items-start mb-8">
         <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 group-hover:border-emerald-500/50 transition-colors">
          <Users2 className="text-emerald-400" />
         </div>
         <div className="flex items-center gap-1 text-emerald-500 font-bold">
          <Star size={14} fill="currentColor" />
          {agent.rating}
         </div>
        </div>
        <h3 className="text-2xl font-black uppercase italic mb-1 group-hover:text-emerald-400 transition-colors">{agent.name}</h3>
        <p className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest mb-6">{agent.role}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">{agent.desc}</p>
        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
         <span className="text-[10px] font-mono text-slate-500 uppercase">Tech: {agent.tech}</span>
         <button className="flex items-center gap-2 text-xs font-black uppercase text-emerald-400 hover:text-white transition-colors">
          Deploy <Download size={14} />
         </button>
        </div>
       </div>
      ))}
     </div>

     <footer className="mt-20 text-center flex items-center justify-center gap-4 text-slate-600">
      <ShieldCheck size={16} />
      <p className="text-[10px] uppercase font-black tracking-widest">
       All agents are pre-validated for Safety & Hallucination Resistance. instructions are encrypted and member-exclusive. [cite: 5]
      </p>
     </footer>
    </div>
   </div>
 );
};

export default AgentMarketplace;

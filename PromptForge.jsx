import React, { useState } from 'react';
import { Wand2, Copy, CheckCircle, Terminal } from 'lucide-react';

const PromptForge = () => {
  const [role, setRole] = useState('Marketing Expert');
  const [goal, setGoal] = useState('Write an email sequence');
  const [copied, setCopied] = useState(false);

  const generatedPrompt = `ACT AS A [${role.toUpperCase()}]. YOUR CORE OBJECTIVE IS TO [${goal.toUpperCase()}]. \n\nCONSTRAINTS: \n- USE PSYCHOLOGICAL TRIGGERS (URGENCY, SOCIAL PROOF).\n- MAINTAIN A HIGH-AUTHORITY, PROFESSIONAL TONE.\n- OUTPUT IN MARKDOWN FORMAT.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-emerald-500/20 p-8 rounded-[2.5rem] shadow-2xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400"><Wand2 size={24} /></div>
        <h2 className="text-2xl font-black uppercase italic">Prompt Forge <span className="text-emerald-500 font-mono text-[10px] tracking-[0.3em] ml-4">// V2.1</span></h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-[10px] font-mono uppercase text-slate-500 tracking-widest block mb-2">Define AI Persona</label>
          <input 
            type="text" 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-emerald-400 font-mono text-sm focus:border-emerald-500 outline-none"
          />
        </div>
        <div>
          <label className="text-[10px] font-mono uppercase text-slate-500 tracking-widest block mb-2">Define Objective</label>
          <textarea 
            value={goal} 
            onChange={(e) => setGoal(e.target.value)} 
            className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-emerald-400 font-mono text-sm focus:border-emerald-500 outline-none h-24"
          />
        </div>
        <div className="bg-black/50 p-6 rounded-2xl border border-slate-800 relative">
          <div className="text-[10px] font-mono text-slate-600 absolute top-4 left-4 flex items-center gap-2">
            <Terminal size={12} /> ENGINE_OUTPUT.txt
          </div>
          <p className="text-slate-300 font-mono text-[11px] mt-6 leading-relaxed whitespace-pre-wrap">
            {generatedPrompt}
          </p>
          <button 
            onClick={handleCopy}
            className="absolute top-4 right-4 text-emerald-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-black uppercase"
          >
            {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy Script"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptForge;

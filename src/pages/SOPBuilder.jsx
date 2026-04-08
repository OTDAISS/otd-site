import React, { useState } from 'react';
import { PlusIcon, TrashIcon, SparklesIcon, SaveIcon, ChevronRight } from 'lucide-react';

const SOPBuilder = () => {
  const [sopTitle, setSopTitle] = useState('');
  const [steps, setSteps] = useState([{ id: 1, text: '', role: 'AI Agent' }]);

  const addStep = () => setSteps([...steps, { id: Date.now(), text: '', role: 'Human Specialist' }]);
  const removeStep = (id) => setSteps(steps.filter(step => step.id !== id));
  const updateStep = (id, field, value) => setSteps(steps.map(s => s.id === id ? { ...s, [field]: value } : s));

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-10 font-sans selection:bg-cyan-500/30">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-cyan-500/20 pb-8">
          <div>
            <h1 className="text-5xl font-black italic bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent tracking-tighter">SOP ARCHITECT</h1>
            <p className="text-cyan-400/50 text-xs font-bold uppercase tracking-[0.4em] mt-2">Ocean Tide Drop // Operational Logic</p>
          </div>
          <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-black px-6 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)] uppercase italic text-sm">
            <SaveIcon size={18} /> Deploy Protocol
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800 backdrop-blur-xl">
              <label className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-3 block">Procedure Identity</label>
              <input 
                type="text" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-xl font-bold"
                placeholder="Name your automation..."
                value={sopTitle}
                onChange={(e) => setSopTitle(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.id} className="group bg-slate-900/20 p-6 rounded-2xl border border-slate-800/50 hover:border-pink-500/30 transition-all relative">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-pink-500 font-black italic text-xs tracking-widest uppercase">Sequence {index + 1}</span>
                    <button onClick={() => removeStep(step.id)} className="text-slate-600 hover:text-red-400 transition-colors"><TrashIcon size={16}/></button>
                  </div>
                  <select 
                    className="w-full bg-slate-950 border border-slate-800 text-xs text-cyan-400 rounded-lg p-2 mb-4 uppercase font-bold outline-none"
                    value={step.role}
                    onChange={(e) => updateStep(step.id, 'role', e.target.value)}
                  >
                    <option>AI Agent</option>
                    <option>Human Specialist</option>
                    <option>Victoria (Staff)</option>
                    <option>Webflow Trigger</option>
                  </select>
                  <textarea 
                    className="w-full bg-transparent border-none focus:ring-0 text-slate-300 placeholder:text-slate-700 resize-none h-20"
                    placeholder="Input process instructions..."
                    value={step.text}
                    onChange={(e) => updateStep(step.id, 'text', e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={addStep} className="flex-1 flex items-center justify-center gap-2 py-5 border-2 border-dashed border-slate-800 rounded-2xl text-slate-500 hover:text-cyan-400 hover:border-cyan-500/50 transition-all font-bold uppercase text-xs">
                <PlusIcon size={18}/> New Step
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-5 bg-slate-900 border border-slate-800 rounded-2xl text-cyan-400 hover:bg-slate-800 transition-all font-bold uppercase text-xs">
                <SparklesIcon size={18}/> AI Suggest Logic
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-950/80 border border-cyan-500/20 rounded-[2rem] p-8 sticky top-10">
              <h3 className="text-cyan-400 font-black italic uppercase tracking-tighter mb-8 flex items-center gap-2 text-xl">
                <ChevronRight size={20} className="text-pink-500"/> Live Protocol Preview
              </h3>
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <div key={step.id} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full ${step.role.includes('AI') ? 'bg-cyan-400 shadow-[0_0_15px_#22d3ee]' : 'bg-pink-500 shadow-[0_0_15px_#ec4899]'}`} />
                      {i !== steps.length - 1 && <div className="w-px h-20 bg-gradient-to-b from-slate-700 to-transparent" />}
                    </div>
                    <div className="pb-10">
                      <p className="text-[10px] font-black uppercase text-slate-500 mb-1">{step.role}</p>
                      <p className="text-sm font-medium italic text-slate-300">{step.text || "Drafting sequence..."}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOPBuilder;

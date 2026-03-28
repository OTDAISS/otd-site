import React, { useState } from 'react';
import { PlusIcon, TrashIcon, SparklesIcon, SaveIcon } from 'lucide-react';

const SOPBuilder = () => {
  const [sopTitle, setSopTitle] = useState('');
  const [steps, setSteps] = useState([{ id: 1, text: '', role: 'AI Agent' }]);

  const addStep = () => {
    setSteps([...steps, { id: Date.now(), text: '', role: 'Human' }]);
  };

  const removeStep = (id) => {
    setSteps(steps.filter(step => step.id !== id));
  };

  const updateStep = (id, field, value) => {
    setSteps(steps.map(step => step.id === id ? { ...step, [field]: value } : step));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-10 flex justify-between items-end border-b border-cyan-500/30 pb-6">
          <div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent italic">
              NEON SOP BUILDER
            </h1>
            <p className="text-cyan-200/60 mt-2 uppercase tracking-widest text-xs">Ocean Tide Drop // System Architect</p>
          </div>
          <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-500 px-4 py-2 rounded-lg transition-all shadow-lg shadow-pink-500/20">
            <SaveIcon size={18} /> SAVE PROTOCOL
          </button>
        </header>

        {/* Builder Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor Column */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-md">
              <label className="block text-xs font-bold text-cyan-400 mb-2 uppercase">Procedure Name</label>
              <input 
                type="text" 
                placeholder="e.g., Automated Lead Sniper Workflow" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-pink-500 transition-colors"
                value={sopTitle}
                onChange={(e) => setSopTitle(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.id} className="relative group bg-slate-800/30 p-5 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-pink-500 font-black italic">STEP 0{index + 1}</span>
                    <button onClick={() => removeStep(step.id)} className="text-slate-500 hover:text-red-400 transition-colors">
                      <TrashIcon size={16} />
                    </button>
                  </div>
                  
                  <select 
                    className="w-full bg-slate-900 text-xs text-cyan-300 border border-slate-700 rounded mb-3 p-1 uppercase"
                    value={step.role}
                    onChange={(e) => updateStep(step.id, 'role', e.target.value)}
                  >
                    <option>AI Agent</option>
                    <option>Human Specialist</option>
                    <option>Victoria (Staff)</option>
                    <option>Automation Trigger</option>
                  </select>

                  <textarea 
                    placeholder="Describe the action..." 
                    className="w-full bg-transparent border-b border-slate-700 focus:border-cyan-400 focus:outline-none py-2 resize-none"
                    value={step.text}
                    onChange={(e) => updateStep(step.id, 'text', e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button onClick={addStep} className="flex-1 flex items-center justify-center gap-2 py-4 border-2 border-dashed border-slate-700 rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all">
                <PlusIcon size={20} /> ADD MANUAL STEP
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl hover:opacity-90 transition-all">
                <SparklesIcon size={20} /> AI GENERATE STEPS
              </button>
            </div>
          </div>

          {/* Preview Column (Visual Flow) */}
          <div className="hidden lg:block bg-slate-950/50 rounded-3xl border border-cyan-500/20 p-8 sticky top-8">
            <h2 className="text-cyan-400 text-sm font-bold mb-6 tracking-tighter">LIVE FLOW PREVIEW</h2>
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${step.role.includes('AI') ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'bg-pink-500 shadow-[0_0_10px_#ec4899]'}`} />
                    {index !== steps.length - 1 && <div className="w-0.5 h-16 bg-slate-800" />}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">{step.role}</p>
                    <p className="text-sm text-slate-300 italic">{step.text || "Awaiting instructions..."}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOPBuilder;


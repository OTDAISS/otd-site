import React, { useState } from 'react';
import { CheckSquare, Activity } from 'lucide-react';

const tasks = [
  { id: 1, label: "Manual Lead Data Entry", weight: 15 },
  { id: 2, label: "Daily Social Media Scheduling", weight: 10 },
  { id: 3, label: "Customer Support Ticket Sorting", weight: 25 },
  { id: 4, label: "Invoice Generation & Emailing", weight: 20 },
  { id: 5, label: "CRM Contact Enrichment", weight: 30 }
];

const AutomationScorecard = () => {
  const [selected, setSelected] = useState([]);

  const toggleTask = (id) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const humanOverhead = selected.reduce((acc, id) => {
    const task = tasks.find(t => t.id === id);
    return acc + (task ? task.weight : 0);
  }, 0);

  return (
    <div className="bg-slate-900 border border-emerald-500/20 p-8 rounded-[3rem] shadow-2xl">
      <div className="flex items-center gap-3 mb-8">
        <Activity className="text-emerald-400" />
        <h2 className="text-2xl font-black uppercase italic">Optimization Scorecard</h2>
      </div>
      <div className="space-y-4 mb-10">
        {tasks.map(task => (
          <div 
            key={task.id} 
            onClick={() => toggleTask(task.id)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer flex justify-between items-center ${
              selected.includes(task.id) 
              ? 'bg-emerald-500/10 border-emerald-500 text-white' 
              : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700'
            }`}
          >
            <span className="font-mono text-xs uppercase tracking-widest">{task.label}</span>
            {selected.includes(task.id) ? <CheckSquare size={16} /> : <div className="w-4 h-4 border border-slate-700 rounded" />}
          </div>
        ))}
      </div>
      <div className="bg-black/40 p-8 rounded-3xl border border-slate-800 flex flex-col items-center text-center">
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] mb-4">Current Human Overhead</div>
        <div className={`text-6xl font-black italic ${humanOverhead > 50 ? 'text-red-500' : 'text-emerald-500'}`}>
          {humanOverhead}%
        </div>
      </div>
    </div>
  );
};

export default AutomationScorecard;

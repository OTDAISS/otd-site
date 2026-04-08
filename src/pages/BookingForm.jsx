import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, CheckCircle, Zap, ShieldCheck } from 'lucide-react';

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Strategy Audit',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Deployment Requested:", formData);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="bg-slate-900 border border-emerald-500/30 p-12 rounded-[3.5rem] max-w-md w-full text-center shadow-[0_0_50px_rgba(16,185,129,0.1)]">
          <div className="bg-emerald-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <CheckCircle size={48} className="text-emerald-400" />
          </div>
          <h1 className="text-3xl font-black uppercase italic text-white mb-4">Request Logged</h1>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Your deployment request for <span className="text-emerald-400 font-mono underline">{formData.service}</span> has been prioritized. 
            An architect will contact you within 6 business hours.
          </p>
          <button onClick={() => setSubmitted(false)} className="w-full bg-slate-800 hover:bg-slate-700 text-white py-4 rounded-2xl font-black uppercase tracking-widest transition-all">
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 md:p-16 flex items-center justify-center">
      <div className="max-w-4xl w-full grid md:grid-cols-5 gap-0 bg-slate-900/40 border border-slate-800 rounded-[3.5rem] overflow-hidden shadow-2xl">
        <div className="md:col-span-2 bg-emerald-600 p-12 flex flex-col justify-between">
            <Zap size={40} className="text-black mb-8" />
            <h2 className="text-4xl font-black uppercase italic leading-none text-black mb-6">
              Secure Your Slot
            </h2>
            <p className="text-emerald-950 text-sm font-bold leading-relaxed opacity-80">
              Enter the development pipeline. Our team handles the heavy lifting of AI integration while you scale.
            </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-emerald-950">
              <span className="text-[10px] font-black uppercase tracking-widest">Priority Member Access</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-3 p-12 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="Identify yourself..." 
                className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl focus:border-emerald-500 outline-none transition-all font-mono text-sm text-emerald-400"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Business Email</label>
              <input 
                required
                type="email" 
                placeholder="hq@yourcompany.com" 
                className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl focus:border-emerald-500 outline-none transition-all font-mono text-sm text-emerald-400"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Selected Service</label>
              <select 
                className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl focus:border-emerald-500 outline-none transition-all font-mono text-sm text-emerald-400 appearance-none cursor-pointer"
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option>Strategy Audit</option>
                <option>Voice Agent Deployment</option>
                <option>RAG Hub Setup</option>
                <option>Workflow Automation</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Implementation Goals</label>
              <textarea 
                rows="3" 
                placeholder="Describe your core bottleneck..."
                className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl focus:border-emerald-500 outline-none transition-all font-mono text-sm text-emerald-400"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
          </div>
          <button type="submit" className="group w-full bg-emerald-500 hover:bg-emerald-400 text-black py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
            Initialize Deployment <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex justify-center items-center gap-4 text-slate-600">
             <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-tighter">
                <Calendar size={12} /> Fast Turnaround
             </div>
             <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-tighter">
                <Clock size={12} /> 6hr Response Time
             </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

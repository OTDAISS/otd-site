import React, { useState } from 'react';
import { Lock, Unlock, Zap, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MemberPass = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleVerify = () => {
    if (accessCode.toUpperCase() === 'SURF2024') {
      setIsUnlocked(true);
    } else {
      alert('Access Denied: Invalid Sequence');
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 text-white font-sans">
        <div className="max-w-md w-full bg-slate-900/50 border border-emerald-500/20 p-12 rounded-[3rem] text-center backdrop-blur-xl shadow-2xl">
          <Lock className="w-16 h-16 text-emerald-500 mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl font-black mb-2 uppercase italic tracking-tighter">Vault Access</h2>
          <p className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-8 text-center">Authorized Personnel Only</p>
          
          <input 
            type="password" 
            value={accessCode} 
            onChange={(e) => setAccessCode(e.target.value)} 
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-4 outline-none text-white text-center font-mono tracking-widest focus:border-emerald-500/50 transition-colors" 
            placeholder="••••••••" 
          />
          
          <button 
            onClick={handleVerify} 
            className="w-full bg-emerald-600 hover:bg-emerald-500 py-4 rounded-2xl font-black transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-emerald-500/20"
          >
            INITIALIZE AUTH
          </button>

          <Link to="/" className="inline-block mt-8 text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest no-underline transition-colors">
            Return to Hub
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <Link to="/" className="flex items-center gap-2 text-emerald-400 mb-12 hover:text-white transition-colors no-underline font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Ecosystem
        </Link>

        <Unlock className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
        <h1 className="text-6xl font-black text-white mb-2 italic tracking-tighter uppercase">Vault Unlocked</h1>
        <p className="text-emerald-400 font-bold tracking-[0.3em] uppercase mb-12 text-xs">Lead Intelligence Active</p>

        <div className="grid gap-6">
          <div className="bg-slate-900/40 p-12 rounded-[3rem] border border-emerald-500/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap size={160} />
            </div>
            
            <Zap className="text-yellow-400 mx-auto mb-6 w-12 h-12" />
            <h3 className="text-3xl font-black mb-4 italic uppercase">Lead Scout V1.0</h3>
            <p className="text-slate-400 mb-10 max-w-md mx-auto leading-relaxed">
              Your high-velocity lead extraction engine is ready. Deploy to scrape targeted data in seconds.
            </p>
            
            <button 
              onClick={() => window.open('https://google.com', '_blank')} 
              className="inline-flex items-center gap-3 bg-emerald-600 px-12 py-5 rounded-2xl font-black hover:bg-emerald-500 transition-all text-white shadow-xl shadow-emerald-500/20 transform hover:scale-105"
            >
              <Download size={24} /> DOWNLOAD ENGINE
            </button>
          </div>
          
          <div className="p-8 border-2 border-dashed border-slate-900 rounded-[3rem]">
            <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black">Next Update: V1.1 coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPass;

import React, { useState } from 'react';
import { Lock, Unlock, Zap, Download } from 'lucide-react';

const MemberPass = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleVerify = () => {
    if (accessCode === 'SURF2024') {
      setIsUnlocked(true);
    } else {
      alert('Invalid Access Code');
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans text-white">
        <div className="max-w-md w-full bg-slate-800 border border-blue-500/30 p-8 rounded-xl text-center">
          <Lock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2 uppercase tracking-tighter italic">Member Pass Required</h2>
          <p className="text-slate-400 mb-6">Enter your access code to unlock the Lead Scout AI tools.</p>
          <input 
            type="password"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white mb-4 focus:border-blue-500 outline-none"
            placeholder="Enter Code..."
          />
          <button 
            onClick={handleVerify}
            className="w-full bg-blue-600 hover:bg-blue-400 text-white font-black py-3 rounded-full transition-all transform hover:scale-105"
          >
            UNLOCK VAULT
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center gap-3 mb-12">
          <Unlock className="w-16 h-16 text-green-400 mb-2" />
          <h1 className="text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic">
            Member Pass Vault
          </h1>
          <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
        </div>
        
        <div className="bg-slate-800/50 border border-blue-500/20 p-10 rounded-3xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold flex items-center justify-center gap-2 mb-4">
            <Zap className="text-yellow-400 fill-yellow-400" /> LEAD SCOUT V1.0
          </h3>
          <p className="text-slate-400 mb-10 max-w-md mx-auto">
            Access confirmed. Your high-velocity lead extraction tool is ready for deployment.
          </p>
          
          <a 
            href="#" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 px-12 py-5 rounded-full font-black hover:from-blue-500 hover:to-blue-400 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)] text-white no-underline uppercase tracking-wider"
          >
            <Download size={24} /> Download Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberPass;
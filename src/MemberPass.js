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
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 text-white">
        <div className="max-w-md w-full bg-slate-800 border border-blue-500/30 p-8 rounded-xl text-center">
          <Lock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2 uppercase italic tracking-tighter">Member Pass Required</h2>
          <input 
            type="password"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded p-3 mb-4 outline-none text-white"
            placeholder="Enter Code..."
          />
          <button 
            onClick={handleVerify} 
            className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-full font-black transition-all transform hover:scale-105"
          >
            UNLOCK VAULT
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <Unlock className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h1 className="text-5xl font-black text-blue-400 mb-8 italic tracking-tighter">VAULT UNLOCKED</h1>
        <div className="bg-slate-800 p-10 rounded-3xl border border-blue-500/20 shadow-2xl">
          <Zap className="text-yellow-400 mx-auto mb-4 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-4">LEAD SCOUT V1.0</h3>
          <p className="text-slate-400 mb-8">Access confirmed. Your lead extraction engine is ready.</p>
          <button 
            onClick={() => window.open('https://google.com', '_blank')}
            className="inline-flex items-center gap-3 bg-blue-600 px-10 py-4 rounded-full font-black hover:bg-blue-500 transition-all text-white shadow-lg shadow-blue-500/20"
          >
            <Download size={24} /> DOWNLOAD NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberPass;
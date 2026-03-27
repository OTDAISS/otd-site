import React, { useState } from 'react';
import MemberPass from './MemberPass';

function App() {
  const [showMembers, setShowMembers] = useState(false);

  // If the user clicked 'Enter', show the Member Pass vault
  if (showMembers) {
    return <MemberPass />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center font-sans">
      <div className="text-center p-10 border border-blue-500/20 rounded-3xl bg-slate-800/30">
        <h1 className="text-6xl font-black mb-4 tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          OTD AI SURFER
        </h1>
        <p className="text-slate-400 mb-8 uppercase tracking-widest text-sm">High-Velocity Lead Intelligence</p>
        
        <button 
          onClick={() => setShowMembers(true)}
          className="bg-blue-600 hover:bg-blue-400 text-white px-12 py-4 rounded-full font-black transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          ENTER MEMBER PASS
        </button>
      </div>
    </div>
  );
}

export default App;

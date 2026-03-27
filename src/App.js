import React, { useState } from 'react';
import MemberPass from './MemberPass';

function App() {
  const [showVault, setShowVault] = useState(false);

  if (showVault) {
    return <MemberPass />;
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-white">
      <div className="max-w-2xl w-full bg-slate-900/50 border border-blue-500/20 p-12 rounded-3xl text-center backdrop-blur-md shadow-[0_0_50px_rgba(59,130,246,0.1)]">
        <h1 className="text-7xl font-black italic tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          OTD AI SURFER
        </h1>
        <p className="text-blue-400/60 font-bold tracking-[0.2em] uppercase mb-12 text-sm">
          High-Velocity Lead Intelligence
        </p>
        
        <button 
          onClick={() => setShowVault(true)}
          className="group relative inline-flex items-center justify-center px-10 py-4 font-black text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.4)] transform hover:scale-105"
        >
          ENTER MEMBER PASS
        </button>
      </div>
    </div>
  );
}

export default App;
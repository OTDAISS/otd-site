import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Placeholder components to keep the app from crashing
const Placeholder = ({ name }) => (
  <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
    <div className="text-center max-w-md">
      <h1 className="text-4xl font-black uppercase italic mb-4 text-emerald-500">{name}</h1>
      <p className="text-slate-500 mb-8 font-medium">System is initializing this module. Hub connection is active.</p>
      <Link to="/" className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-xl text-emerald-400 font-black uppercase tracking-widest text-[10px] no-underline hover:bg-emerald-500 hover:text-slate-950 transition-all">
        ← Back to Hub
      </Link>
    </div>
  </div>
);

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-white text-center">
      <div className="max-w-6xl w-full bg-slate-900/30 border border-blue-500/10 p-12 rounded-[3rem] backdrop-blur-xl shadow-2xl">
        <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-400 to-cyan-500">
          OTD AI SURFER
        </h1>
        <p className="text-blue-400/80 font-bold tracking-[0.4em] uppercase mb-16 text-[10px] md:text-xs">Digital Ecosystem Architect</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Link to="/automations" className="group bg-slate-800/40 hover:bg-blue-600 p-8 rounded-3xl transition-all no-underline text-white border border-blue-500/20 shadow-lg">
            <h2 className="font-black italic text-xl md:text-2xl uppercase text-center">AI Automations</h2>
          </Link>
          <Link to="/workflows" className="group bg-slate-800/40 hover:bg-cyan-600 p-8 rounded-3xl transition-all no-underline text-white border border-cyan-500/20 shadow-lg">
            <h2 className="font-black italic text-xl md:text-2xl uppercase text-center">Strategic Workflows</h2>
          </Link>
          <Link to="/web-builds" className="group bg-slate-800/40 hover:bg-purple-600 p-8 rounded-3xl transition-all no-underline text-white border border-purple-500/20 shadow-lg">
            <h2 className="font-black italic text-xl md:text-2xl uppercase text-center">High-Velocity Web</h2>
          </Link>
          <Link to="/game-builds" className="group bg-slate-800/40 hover:bg-orange-600 p-8 rounded-3xl transition-all no-underline text-white border border-orange-500/20 shadow-lg">
            <h2 className="font-black italic text-xl md:text-2xl uppercase text-center">Game & Sim Builds</h2>
          </Link>
          <Link to="/vault" className="group bg-slate-800/40 hover:bg-emerald-600 p-8 rounded-3xl transition-all no-underline text-white border border-emerald-500/20 lg:col-span-2 shadow-lg">
            <h2 className="font-black italic text-xl md:text-2xl uppercase text-center">Member Vault Access</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/automations" element={<Placeholder name="AI Automations" />} />
        <Route path="/workflows" element={<Placeholder name="Workflows" />} />
        <Route path="/web-builds" element={<Placeholder name="Web Builds" />} />
        <Route path="/game-builds" element={<Placeholder name="Game Builds" />} />
        <Route path="/vault" element={<Placeholder name="Member Vault" />} />
        <Route path="/sniper" element={<Placeholder name="Lead Sniper" />} />
      </Routes>
    </Router>
  );
}

export default App;

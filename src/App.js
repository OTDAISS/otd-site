import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MemberPass from './MemberPass';
import Automations from './Automations';
import Workflows from './Workflows';
import WebBuilds from './WebBuilds';

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-white text-center">
      <div className="max-w-5xl w-full bg-slate-900/30 border border-blue-500/10 p-12 md:p-16 rounded-[3rem] backdrop-blur-xl shadow-2xl">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-400 to-cyan-500">
          OTD AI SURFER
        </h1>
        <p className="text-blue-400/80 font-bold tracking-[0.4em] uppercase mb-16 text-[10px] md:text-xs">Digital Ecosystem Architect</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <Link to="/automations" className="group bg-slate-800/40 hover:bg-blue-600 border border-blue-500/20 p-8 rounded-3xl transition-all no-underline text-white shadow-lg hover:shadow-blue-500/20">
            <h2 className="font-black italic text-xl md:text-2xl group-hover:scale-105 transition-transform uppercase">AI Automations</h2>
          </Link>
          <Link to="/workflows" className="group bg-slate-800/40 hover:bg-cyan-600 border border-cyan-500/20 p-8 rounded-3xl transition-all no-underline text-white shadow-lg hover:shadow-cyan-500/20">
            <h2 className="font-black italic text-xl md:text-2xl group-hover:scale-105 transition-transform uppercase">Strategic Workflows</h2>
          </Link>
          <Link to="/web-builds" className="group bg-slate-800/40 hover:bg-purple-600 border border-purple-500/20 p-8 rounded-3xl transition-all no-underline text-white shadow-lg hover:shadow-purple-500/20">
            <h2 className="font-black italic text-xl md:text-2xl group-hover:scale-105 transition-transform uppercase">High-Velocity Web</h2>
          </Link>
          <Link to="/vault" className="group bg-slate-800/40 hover:bg-emerald-600 border border-emerald-500/20 p-8 rounded-3xl transition-all no-underline text-white shadow-lg hover:shadow-emerald-500/20">
            <h2 className="font-black italic text-xl md:text-2xl group-hover:scale-105 transition-transform uppercase">Member Vault</h2>
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
        <Route path="/automations" element={<Automations />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/web-builds" element={<WebBuilds />} />
        <Route path="/vault" element={<MemberPass />} />
      </Routes>
    </Router>
  );
}

export default App;
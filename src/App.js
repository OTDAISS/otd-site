import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Placeholder components for routes (Update these as you build them)
const Placeholder = ({ name }) => (
  <div className="min-h-screen bg-black text-white p-20 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-4 uppercase italic tracking-widest">{name}</h1>
    <p className="text-cyan-500 animate-pulse mb-8">System Protocols: Initializing...</p>
    <Link to="/" className="text-slate-500 hover:text-white transition-colors">← Return to Command Center</Link>
  </div>
);

const Home = () => (
  <div className="min-h-screen bg-black text-white p-8 font-sans selection:bg-cyan-500/30">
    <div className="max-w-6xl mx-auto">
      <header className="mb-20 mt-12">
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 leading-none">
          OTD AI SURFER
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400 font-light tracking-[0.2em] uppercase italic">
          Digital Ecosystem Architect
        </p>
      </header>

      <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "High-Velocity Web", path: "/web-builds", color: "from-cyan-500/20" },
          { name: "Immersive Games", path: "/game-builds", color: "from-purple-500/20" },
          { name: "Strategic Workflows", path: "/workflows", color: "from-emerald-500/20" },
          { name: "AI Automations", path: "/automations", color: "from-orange-500/20" },
          { name: "The Vault", path: "/vault", color: "from-red-500/20" }
        ].map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className="group relative p-10 bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <span className="relative z-10 text-2xl font-bold tracking-tight group-hover:text-cyan-400 transition-colors uppercase italic">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>

      <footer className="mt-32 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-slate-600 font-bold">
        <span>© 2026 Ocean Tide Drop</span>
        <span className="text-cyan-900">Status: Optimized</span>
      </footer>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-builds" element={<Placeholder name="Web Builds" />} />
        <Route path="/game-builds" element={<Placeholder name="Game Builds" />} />
        <Route path="/workflows" element={<Placeholder name="Strategic Workflows" />} />
        <Route path="/automations" element={<Placeholder name="AI Automations" />} />
        <Route path="/vault" element={<Placeholder name="The Vault" />} />
      </Routes>
    </Router>
  );
}

export default App;

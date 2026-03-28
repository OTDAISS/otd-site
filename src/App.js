import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Users2, Download, Star, ShieldCheck, Cpu, LayoutGrid, Lock, Home as HomeIcon } from 'lucide-react';

// --- 1. THE TYPEWRITER ENGINE ---
const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else { clearInterval(timer); }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayedText;
};

// --- 2. THE MARKETPLACE COMPONENT ---
const AgentMarketplace = () => {
  const agents = [
    { id: 'ag_01', name: "The Cold Closer", role: "Sales & Outreach", rating: 4.9, desc: "Optimized for high-ticket B2B objection handling.", tech: "GPT-4o" },
    { id: 'ag_02', name: "The Social Architect", role: "Content & Growth", rating: 4.8, desc: "Expert in 'Voice Mimicry' for LinkedIn ghostwriting.", tech: "Claude 3.5" },
    { id: 'ag_03', name: "The System Auditor", role: "Operations", rating: 5.0, desc: "Scans business workflows for integration points.", tech: "Custom RAG" }
  ];

  return (
    <div className="p-10 max-w-6xl mx-auto animate-in fade-in duration-700">
      <div className="flex justify-between items-end mb-12 border-b border-emerald-500/20 pb-6">
        <div>
          <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest mb-2">// Deployment Ready</p>
          <h2 className="text-4xl font-black uppercase italic text-white">Agent Marketplace</h2>
        </div>
        <div className="text-right hidden md:block">
          <span className="text-xs font-mono text-slate-500">VERSION_3.0_STABLE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div key={agent.id} className="group bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-emerald-500/40 transition-all backdrop-blur-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-emerald-500/10 transition-colors">
                <Cpu size={20} className="text-emerald-500" />
              </div>
              <div className="flex items-center gap-1 text-xs text-yellow-500 font-bold">
                <Star size={12} className="fill-yellow-500" /> {agent.rating}
              </div>
            </div>
            <h3 className="text-xl font-bold italic text-white mb-1">{agent.name}</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">{agent.desc}</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
              <span className="text-[9px] font-mono text-slate-500 uppercase">{agent.tech}</span>
              <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-400 text-black px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all">
                Deploy <Download size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 3. OTHER PAGE PLACEHOLDERS ---
const Home = () => {
  const text = useTypewriter("OTD_AI_SURFER // SYSTEM_READY", 60);
  return <div className="p-20 font-mono text-cyan-400"><h1 className="text-5xl font-black italic">{text}</h1></div>;
};

const Vault = () => <div className="p-20 font-mono text-red-500"><h1 className="text-2xl underline">SECURE_VAULT_OFFLINE</h1></div>;

// --- 4. THE SYSTEM DOCK ---
const SystemDock = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', icon: <HomeIcon size={20} />, label: 'Home' },
    { path: '/marketplace', icon: <LayoutGrid size={20} />, label: 'Market' },
    { path: '/vault', icon: <Lock size={20} />, label: 'Vault' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex gap-2 bg-black/80 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={`p-4 rounded-xl flex items-center gap-2 transition-all ${location.pathname === item.path ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-500 hover:text-white'}`}>
            {item.icon}
          </Link>
        ))}
      </nav>
    </div>
  );
};

// --- 5. MAIN APP ---
export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#050505] text-slate-200 overflow-hidden">
        <SystemDock />
        <main className="relative z-10 pt-10 pb-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<AgentMarketplace />} />
            <Route path="/vault" element={<Vault />} />
          </Routes>
        </main>
        
        {/* CRT & Scanline VFX */}
        <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_3px,3px_100%] opacity-40" />
      </div>
    </Router>
  );
}

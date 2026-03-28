import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Users2, Download, Star, ShieldCheck, Cpu, LayoutGrid, Lock, 
  Home as HomeIcon, Activity, CheckSquare, Wand2, Copy, 
  CheckCircle, Terminal, Calendar, Clock, ChevronRight, Zap,
  Coins, BarChart3, TrendingDown
} from 'lucide-react';

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

// --- 2. TOKEN ARBITRAGE COMPONENT (The "Bloomberg" Table) ---
const TokenArbitrage = () => {
  const models = [
    { name: "GPT-4o", provider: "OpenAI", price: "$5.00", latency: "450ms", value: "High" },
    { name: "Claude 3.5", provider: "Anthropic", price: "$3.00", latency: "520ms", value: "Extreme" },
    { name: "Llama 3 (70B)", provider: "Groq", price: "$0.75", latency: "80ms", value: "Alpha" },
    { name: "DeepSeek V2", provider: "DeepSeek", price: "$0.14", latency: "650ms", value: "Budget" }
  ];

  return (
    <div className="p-10 max-w-5xl mx-auto animate-in fade-in duration-1000">
      <div className="bg-slate-900 border border-emerald-500/20 p-10 rounded-[3rem] shadow-2xl backdrop-blur-xl">
        <div className="flex justify-between items-center mb-10">
          <div>
            <div className="flex items-center gap-3 text-emerald-400 mb-2">
              <Coins size={20} />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-black">// Cost Arbitrage</span>
            </div>
            <h2 className="text-4xl font-black uppercase italic text-white">Token Arbitrage</h2>
          </div>
          <div className="bg-emerald-500 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase animate-pulse">Live Rates</div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-950">
              <tr>
                <th className="p-5 text-[10px] font-mono text-slate-500 uppercase tracking-widest">Model Engine</th>
                <th className="p-5 text-[10px] font-mono text-slate-500 uppercase tracking-widest text-center">Price / 1M</th>
                <th className="p-5 text-[10px] font-mono text-slate-500 uppercase tracking-widest text-center">Latency</th>
                <th className="p-5 text-[10px] font-mono text-slate-500 uppercase tracking-widest text-right">Rating</th>
              </tr>
            </thead>
            <tbody className="bg-slate-900/40">
              {models.map((m, i) => (
                <tr key={i} className="border-t border-slate-800 hover:bg-emerald-500/5 transition-colors group">
                  <td className="p-5">
                    <div className="font-bold text-white">{m.name}</div>
                    <div className="text-[9px] text-slate-600 uppercase font-mono">{m.provider}</div>
                  </td>
                  <td className="p-5 font-mono text-emerald-400 text-center">{m.price}</td>
                  <td className="p-5 text-slate-400 text-center">
                    <div className="flex items-center justify-center gap-2 text-xs">
                      <Zap size={12} className={i === 2 ? "text-emerald-500" : "text-slate-700"} /> {m.latency}
                    </div>
                  </td>
                  <td className="p-5 text-right">
                    <span className={`px-3 py-1 rounded-md text-[9px] font-black uppercase ${m.value === 'Alpha' ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-slate-400'}`}>
                      {m.value}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// --- 3. OTHER PAGE COMPONENTS ---
const Home = () => {
  const text = useTypewriter("OTD_SYSTEMS_V5.0 // ARBITRAGE_ENABLED", 60);
  return <div className="p-20 font-mono text-cyan-400"><h1 className="text-5xl font-black italic">{text}</h1></div>;
};

// --- 4. SYSTEM DOCK ---
const SystemDock = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', icon: <HomeIcon size={20} /> },
    { path: '/arbitrage', icon: <Coins size={20} /> },
    { path: '/scorecard', icon: <Activity size={20} /> },
    { path: '/marketplace', icon: <LayoutGrid size={20} /> },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex gap-2 bg-black/80 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={`p-4 rounded-xl transition-all ${location.pathname === item.path ? 'bg-emerald-500/20 text-emerald-400 scale-110' : 'text-slate-500 hover:text-white'}`}>
            {item.icon}
          </Link>
        ))}
      </nav>
    </div>
  );
};

// --- 5. MAIN ASSEMBLY ---
export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#020202] text-slate-200 overflow-hidden font-sans">
        <SystemDock />
        <main className="relative z-10 pt-10 pb-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arbitrage" element={<TokenArbitrage />} />
            {/* Include previous routes: /forge, /scorecard, /marketplace, /book */}
          </Routes>
        </main>
        {/* CRT SCANLINE VFX */}
        <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_3px,3px_100%] opacity-40" />
      </div>
    </Router>
  );
}

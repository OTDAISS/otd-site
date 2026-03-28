import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  LayoutDashboard, 
  Settings,
  Lock
} from 'lucide-react';

// Import all your high-value components
import SOPBuilder from './pages/SOPBuilder';
import TokenArbitrage from './pages/TokenArbitrage';
import VictoriaPortal from './pages/VictoriaPortal';
import FuelGauge from './components/FuelGauge';

// --- MAIN DASHBOARD (THE VAULT) ---
const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="p-4 md:p-10 bg-[#020617] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Hero Branding */}
        <div className="mb-12">
          <h1 className="text-6xl font-black italic tracking-tighter uppercase bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            The Vault
          </h1>
          <p className="text-cyan-400/50 font-bold uppercase tracking-[0.5em] text-xs mt-2">
            Ocean Tide Drop // System Status: Active
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Budget Monitoring */}
          <div className="lg:col-span-4">
            <FuelGauge />
          </div>

          {/* Right Column: Mission Control Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* SOP Builder Card */}
            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] flex flex-col justify-between hover:border-cyan-500/50 transition-all group">
              <div>
                <div className="bg-cyan-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Settings className="text-cyan-400" />
                </div>
                <h2 className="text-2xl font-black italic uppercase text-white mb-2 tracking-tight">SOP Architect</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">Design automated AI protocols and human-in-the-loop workflows for scaling.</p>
              </div>
              <button onClick={() => navigate('/sop-builder')} className="w-full bg-slate-800 hover:bg-cyan-500 hover:text-black py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all italic">
                Open Architect →
              </button>
            </div>

            {/* Arbitrage Card */}
            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] flex flex-col justify-between hover:border-pink-500/50 transition-all group">
              <div>
                <div className="bg-pink-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="text-pink-500" />
                </div>
                <h2 className="text-2xl font-black italic uppercase text-white mb-2 tracking-tight">Market Intel</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">Real-time inference arbitrage for GPT-5, Claude, and Gemini 3.1 optimization.</p>
              </div>
              <button onClick={() => navigate('/arbitrage')} className="w-full bg-slate-800 hover:bg-pink-500 hover:text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all italic">
                Launch Terminal →
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// --- MASTER APP WRAPPER ---
function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#020617] font-sans">
        {/* Global Navigation */}
        <nav className="border-b border-slate-900 bg-[#020617]/90 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between h-20">
              
              {/* Branding */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-pink-500 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:rotate-12 transition-transform" />
                <div>
                  <span className="text-white font-black italic tracking-tighter text-2xl uppercase block leading-none">Ocean Tide Drop</span>
                  <span className="text-[10px] text-cyan-500 font-bold uppercase tracking-[0.3em]">AI Surfer Survivor</span>
                </div>
              </Link>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-slate-400 hover:text-cyan-400 text-[10px] font-black uppercase tracking-widest transition-all italic">Dashboard</Link>
                <Link to="/sop-builder" className="text-slate-400 hover:text-pink-500 text-[10px] font-black uppercase tracking-widest transition-all italic">SOPs</Link>
                <Link to="/arbitrage" className="text-slate-400 hover:text-cyan-400 text-[10px] font-black uppercase tracking-widest transition-all italic">Arbitrage</Link>
                <Link to="/victoria" className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-slate-500 hover:text-white transition-all">
                  <Lock size={16} />
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button onClick={() => setNavOpen(!navOpen)} className="md:hidden text-white">
                {navOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {navOpen && (
            <div className="md:hidden bg-slate-900 border-b border-slate-800 p-8 space-y-6 animate-in slide-in-from-top duration-300">
              <Link to="/" onClick={() => setNavOpen(false)} className="block text-2xl font-black italic text-white uppercase tracking-tighter hover:text-cyan-400">Dashboard</Link>
              <Link to="/sop-builder" onClick={() => setNavOpen(false)} className="block text-2xl font-black italic text-white uppercase tracking-tighter hover:text-pink-500">SOP Architect</Link>
              <Link to="/arbitrage" onClick={() => setNavOpen(false)} className="block text-2xl font-black italic text-white uppercase tracking-tighter hover:text-cyan-400">Market Terminal</Link>
              <Link to="/victoria" onClick={() => setNavOpen(false)} className="block text-2xl font-black italic text-slate-600 uppercase tracking-tighter hover:text-white">Staff Access</Link>
            </div>
          )}
        </nav>

        {/* Global Route Engine */}
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sop-builder" element={<SOPBuilder />} />
            <Route path="/arbitrage" element={<TokenArbitrage />} />
            <Route path="/victoria" element={<VictoriaPortal />} />
          </Routes>
        </main>

        {/* Branding Footer */}
        <footer className="py-16 border-t border-slate-900 bg-black text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-4" />
            <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.8em]">
              © 2026 Ocean Tide Drop // Florida Doll Intelligence
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

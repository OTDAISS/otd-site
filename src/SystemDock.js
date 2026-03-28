import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Waves, LayoutGrid, Zap, 
  Terminal, Lock, User, 
  Menu, X 
} from 'lucide-react';

const SystemDock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAlerts] = useState(2); // Example: 2 critical compliance alerts

  const navGroups = [
    { label: "Growth", icon: <Zap size={16} />, links: [ { name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" } ] },
    { label: "Operations", icon: <LayoutGrid size={16} />, links: [ { name: "Web Builds", path: "/web" }, { name: "Workflows", path: "/flows" } ] },
    { label: "Intel", icon: <Terminal size={16} />, links: [ { name: "Matrix Feed", path: "/auto" }, { name: "Lead Sniper", path: "/vault/sniper" } ] },
    { label: "Secure", icon: <Lock size={16} />, links: [ { name: "The Vault", path: "/vault" }, { name: "Compliance", path: "/compliance" } ] }
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-6xl">
      <div className="bg-[#0A0A0A]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-4 flex items-center justify-between shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        
        {/* --- THE FINAL NEON SPARKLE LOGO --- */}
        <Link to="/" className="flex items-center gap-4 px-4 group relative">
          {/* Neon Border Aura (Pulsing Aqua/Pink) */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon-aqua/20 to-neon-pink/20 blur-[6px] group-hover:blur-[12px] group-hover:opacity-100 opacity-70 transition-all duration-1000 animate-pulse"></div>
          
          {/* Logo Icon Containment */}
          <div className="relative p-[2px] rounded-2xl bg-gradient-to-tr from-neon-purple via-neon-pink to-neon-aqua">
            <div className="bg-[#050505] p-2 rounded-[14px] flex items-center justify-center">
              <Waves size={28} className="text-neon-aqua group-hover:text-neon-green transition-all duration-500" />
            </div>
          </div>

          {/* Logo Text */}
          <div className="flex flex-col tracking-tight md:block hidden">
            <h1 className="font-black italic uppercase text-2xl leading-none text-white drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
              Ocean Tide <span className="text-neon-pink">Drop</span>
            </h1>
            <div className="flex gap-1 mt-1 items-center">
              <div className="h-[2px] w-4 bg-neon-aqua"></div>
              <div className="h-[2px] w-4 bg-neon-purple"></div>
              <div className="h-[2px] w-4 bg-neon-green"></div>
              <span className="text-[7px] font-bold text-neon-blue uppercase tracking-[0.3em] pl-1">
                Elite AI Systems
              </span>
            </div>
          </div >
        </Link>
        
        {/* ... (Desktop Navigation Links) ... */}
        <div className="hidden lg:flex items-center gap-2">
          {navGroups.map((group, idx) => (
            <div key={idx} className="relative group/menu">
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors text-white/60 hover:text-white font-bold uppercase text-[9px] tracking-[.3em]">
                {group.icon} {group.label}
              </button>
              {/* Dropdown Menu (Existing Logic) */}
            </div>
          ))}
        </div>

        {/* --- VICTORIA'S NEURAL PULSE PORTAL --- */}
        <div className="flex items-center gap-2">
          <Link to="/victoria" className="relative p-3 bg-slate-800 rounded-2xl hover:bg-gradient-to-tr from-neon-pink via-neon-purple to-neon-aqua transition-all group overflow-hidden border border-white/10 hover:border-transparent">
            {/* Hover Glimmer */}
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            
            <User size={20} className="text-neon-aqua group-hover:text-white relative z-10" />
            
            {/* The Neural Pulse Notification */}
            {activeAlerts > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 z-20">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-neon-pink text-[10px] font-black items-center justify-center text-black">
                  {activeAlerts}
                </span>
              </span>
            )}
          </Link>
          {/* Mobile Menu Toggle (Existing Logic) */}
        </div>
      </div>
    </nav>
  );
};

export default SystemDock;

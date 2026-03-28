import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Waves, LayoutGrid, ShieldCheck, 
  Terminal, Lock, Zap, User, Menu, X 
} from 'lucide-react';

const SystemDock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navGroups = [
    {
      label: "Growth",
      icon: <Zap size={16} />,
      links: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Pricing", path: "/pricing" },
        { name: "ROI Calc", path: "/roi" },
      ]
    },
    {
      label: "Operations",
      icon: <LayoutGrid size={16} />,
      links: [
        { name: "Web Builds", path: "/web" },
        { name: "Game Builds", path: "/games" },
        { name: "Workflows", path: "/flows" },
        { name: "Marketplace", path: "/agents" },
      ]
    },
    {
      label: "Intelligence",
      icon: <Terminal size={16} />,
      links: [
        { name: "Matrix Feed", path: "/auto" },
        { name: "Insights", path: "/insights" },
        { name: "Voice AI", path: "/voice" },
        { name: "Blueprints", path: "/blueprints" },
      ]
    },
    {
      label: "Secure",
      icon: <Lock size={16} />,
      links: [
        { name: "The Vault", path: "/vault" },
        { name: "Lead Sniper", path: "/vault/sniper" },
        { name: "Compliance", path: "/compliance" },
        { name: "Victoria", path: "/victoria" },
      ]
    }
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl">
      <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-4 flex items-center justify-between shadow-2xl">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 px-4 group">
          <div className="bg-emerald-500 p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <Waves size={20} className="text-black" />
          </div>
          <span className="font-black italic uppercase tracking-tighter text-white hidden md:block">
            Ocean Tide Drop
          </span>
        </Link>

        {/* Desktop Quick-Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navGroups.map((group, idx) => (
            <div key={idx} className="relative group/menu">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 transition-colors text-slate-400 hover:text-emerald-400 font-bold uppercase text-[10px] tracking-widest">
                {group.icon} {group.label}
              </button>
              
              {/* Dropdown Mega-Menu */}
              <div className="absolute bottom-full mb-4 left-0 hidden group-hover/menu:block animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-slate-950 border border-white/10 p-4 rounded-3xl shadow-2xl min-w-[180px]">
                  {group.links.map((link, lIdx) => (
                    <Link 
                      key={lIdx} 
                      to={link.path} 
                      className="block px-4 py-3 rounded-xl hover:bg-emerald-500 hover:text-black text-slate-400 text-xs font-bold uppercase transition-all mb-1 last:mb-0"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Toggle / Victoria Portal */}
        <div className="flex items-center gap-2">
          <Link to="/victoria" className="p-3 bg-slate-800 rounded-2xl hover:bg-emerald-500 transition-all group">
            <User size={20} className="text-emerald-500 group-hover:text-black" />
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 bg-white/5 rounded-2xl text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute bottom-24 left-0 w-full bg-slate-950 border border-white/10 rounded-[3rem] p-8 grid grid-cols-2 gap-8 lg:hidden animate-in slide-in-from-bottom-10">
          {navGroups.map((group, idx) => (
            <div key={idx}>
              <p className="text-[10px] font-black uppercase text-emerald-500 mb-4 tracking-widest">{group.label}</p>
              <div className="space-y-3">
                {group.links.map((link, lIdx) => (
                  <Link 
                    key={lIdx} 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-300 font-bold uppercase text-xs hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default SystemDock;

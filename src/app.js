import './index.css';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Zap, Anchor, Info, Heart, Home, Send, MessageSquare, X, Sparkles } from 'lucide-react';

// --- NEON & SPARKLE STYLES ---
const styles = {
  container: "relative min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans",
  sparkleOverlay: "absolute inset-0 pointer-events-none z-0 opacity-20",
  neonPink: "shadow-[0_0_20px_rgba(236,72,153,0.6)] border-pink-500",
  neonCyan: "shadow-[0_0_20px_rgba(34,211,238,0.6)] border-cyan-400",
  nav: "relative z-50 flex items-center justify-between px-8 py-4 bg-slate-900/90 backdrop-blur-md border-b border-pink-500/30"
};

const App = () => {
  const [activeTab, setActiveTab] = useState('Shoreline');

  return (
    <div className={styles.container}>
      {/* 1. GLOBAL SPARKLE EFFECT */}
      <div className={styles.sparkleOverlay} style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />
      
      {/* 2. NEON AMBIANT GLOWS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full" />

      {/* 3. NAVIGATION WITH YOUR LOGO */}
      <nav className={styles.nav}>
        <div className="flex items-center gap-3">
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className={`w-12 h-12 bg-slate-800 rounded-xl p-1 border ${styles.neonCyan}`}
          >
            {/* THIS USES YOUR UPLOADED LOGO FILE */}
            <img src="1000016457.png" alt="Logo" className="w-full h-full object-contain" />
          </motion.div>
          <span className="text-2xl font-black italic tracking-tighter bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            AI SURFER
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
          {['Shoreline', 'Hub', 'Shop', 'Lookout', 'Swell'].map((item) => (
            <button 
              key={item}
              onClick={() => setActiveTab(item)}
              className={`${activeTab === item ? 'text-pink-500' : 'text-slate-400'} hover:text-cyan-400 transition-colors`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* 4. MAIN CONTENT AREAS (SPLIT SECTIONS) */}
      <main className="relative z-10 p-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'Shoreline' && <SectionShoreline />}
            {activeTab === 'Hub' && <SectionHub />}
            {activeTab === 'Shop' && <SectionShop />}
            {activeTab === 'Lookout' && <SectionLookout />}
            {activeTab === 'Swell' && <SectionMemorial />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. PAIN POINT BOT */}
      <PainPointBot />
    </div>
  );
};

// --- SECTION COMPONENTS ---

const SectionShoreline = () => (
  <div className="text-center py-20">
    <h1 className="text-6xl font-black italic mb-4">THE <span className="text-cyan-400">SHORELINE</span></h1>
    <p className="text-slate-400 text-xl">Explore the Island Map. Free AI Briefings inside.</p>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className={`p-8 bg-slate-900/50 rounded-3xl border ${styles.neonCyan}`}>
          <h3 className="text-xl font-bold mb-2 text-cyan-400">Island Map</h3>
          <p className="text-sm">Visualizing your journey from Beachcomber to Local Legend.</p>
       </div>
    </div>
  </div>
);

const SectionHub = () => (
  <div className="py-10">
    <h2 className="text-4xl font-black italic mb-8 border-l-4 border-pink-500 pl-4">SURVIVOR HUB <span className="text-sm font-normal text-slate-500">$17/MO</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       <div className={`p-6 bg-slate-800/50 rounded-2xl border ${styles.neonPink}`}>
          <Zap className="mb-4 text-pink-500" />
          <h4 className="font-bold">Resource Reef</h4>
          <p className="text-sm text-slate-400">Downloadable CRM blueprints and industry modules.</p>
       </div>
    </div>
  </div>
);

const SectionShop = () => (
  <div className="py-10">
    <h2 className="text-4xl font-black italic mb-8 border-l-4 border-yellow-400 pl-4 text-yellow-400">THE TRADING POST</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="p-6 bg-slate-900 border border-slate-700 rounded-2xl">
          <h4 className="font-bold text-xl">The Navigator — $499/mo</h4>
          <p className="text-sm text-slate-400 mb-4">50,000 AI Workflow runs for small business.</p>
          <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-full">Equip Tool</button>
       </div>
    </div>
  </div>
);

const SectionLookout = () => (
  <div className="py-10">
    <h2 className="text-4xl font-black italic mb-8 border-l-4 border-cyan-400 pl-4 text-cyan-400">THE LOOKOUT</h2>
    <div className="flex gap-6">
       <div className="w-24 h-24 rounded-full border-2 border-cyan-400 overflow-hidden bg-slate-800">
          <img src="1000016457.png" className="opacity-50" />
       </div>
       <div>
          <h4 className="text-2xl font-bold">Legendary Founders</h4>
          <p className="text-slate-400">Sky Marlin, Stormy Gray, & Sailor Ann</p>
       </div>
    </div>
  </div>
);

const SectionMemorial = () => (
  <div className="py-20 text-center max-w-2xl mx-auto">
    <Heart className="mx-auto text-rose-400 mb-6 animate-pulse" size={48} />
    <h2 className="text-4xl font-black italic mb-4 text-rose-300">THE ETERNAL SWELL</h2>
    <p className="italic text-slate-400 leading-relaxed">
      Dedicated to the memory of Bulls. Twelve years of partnership, loyalty, and the heartbeat that started Ocean Tide Drop.
    </p>
  </div>
);

// --- PAIN POINT BOT ---
const PainPointBot = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {open && (
        <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} className={`w-72 bg-slate-900 border-2 rounded-2xl mb-4 overflow-hidden ${styles.neonPink}`}>
          <div className="bg-pink-500 p-3 font-bold text-xs uppercase flex justify-between">
            <span>AI Pain-Point Bot</span>
            <button onClick={() => setOpen(false)}><X size={14}/></button>
          </div>
          <div className="p-4">
            <p className="text-xs text-slate-400 mb-3">Where is your business getting wiped out?</p>
            <textarea className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs h-16 outline-none focus:border-cyan-400" placeholder="e.g. Too many manual tasks..." />
            <button className="w-full mt-2 py-2 bg-cyan-500 text-black font-bold text-xs rounded-lg">Analyze</button>
          </div>
        </motion.div>
      )}
      <button onClick={() => setOpen(!open)} className={`w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center ${styles.neonPink}`}>
        <MessageSquare className="text-white" />
      </button>
    </div>
  );
};

export default App;

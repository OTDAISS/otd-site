import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Layers, CheckCircle2, Clock, Instagram, Linkedin, Twitter, 
  Home as HomeIcon, LayoutGrid, Activity, Wand2, Calendar, 
  ChevronRight, Zap 
} from 'lucide-react';

// --- 1. THE PRODUCTION SYNC COMPONENT ---
const ProductionSync = () => {
  const schedule = [
    { day: "MON", type: "Technical Thread", channel: <Twitter size={14} />, status: "Scheduled", time: "09:00 AM" },
    { day: "TUE", type: "Case Study Video", channel: <Instagram size={14} />, status: "Processing", time: "11:30 AM" },
    { day: "WED", type: "Ecosystem Blueprint", channel: <Linkedin size={14} />, status: "Draft", time: "02:00 PM" },
    { day: "THU", type: "AI Tool Review", channel: <Twitter size={14} />, status: "Scheduled", time: "10:00 AM" }
  ];

  return (
    <div className="p-10 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-slate-900 border border-emerald-500/20 p-10 rounded-[3rem] shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 text-emerald-400 mb-2">
              <Layers size={20} />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-black">// Omnichannel Sync</span>
            </div>
            <h2 className="text-4xl font-black uppercase italic text-white">Production Sync</h2>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-400 text-black px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            Create Entry
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {schedule.map((item, i) => (
            <div key={i} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex flex-col md:row justify-between items-center group hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-8 w-full">
                 <div className="text-2xl font-black italic text-slate-800 group-hover:text-emerald-500/30 transition-colors w-16">{item.day}</div>
                 <div className="flex-grow">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                      {item.channel} {item.type}
                    </div>
                    <div className="text-lg font-bold text-white uppercase tracking-tight">{item.type} Deployment</div>
                 </div>
              </div>

              <div className="flex items-center gap-12 mt-4 md:mt-0">
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock size={14} />
                  <span className="font-mono text-[10px]">{item.time}</span>
                </div>
                <div className={`px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-tighter flex items-center gap-2 ${
                  item.status === 'Scheduled' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 
                  item.status === 'Processing' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400 animate-pulse' : 
                  'bg-slate-800 border-slate-700 text-slate-500'
                }`}>
                  {item.status === 'Scheduled' && <CheckCircle2 size={12} />}
                  {item.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-12 flex items-center justify-between border-t border-slate-800 pt-8 opacity-50">
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            Auto-Syndication: <span className="text-emerald-500">ACTIVE</span>
          </p>
          <div className="flex gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_emerald]" />
             <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
             <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
          </div>
        </footer>
      </div>
    </div>
  );
};

import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';

const SecureCTA = ({ text = "Secure Implementation", onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick}
      className={`group relative flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-400 text-black font-black uppercase italic tracking-[0.2em] py-5 px-10 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_50px_rgba(52,211,153,0.4)] hover:-translate-y-1 active:scale-95 ${className}`}
    >
      <ShieldCheck size={20} className="opacity-80" />
      <span className="text-sm md:text-base">{text}</span>
      <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
    </button>
  );
};

export default SecureCTA;

import React, { useState } from 'react';
import { Heart, Send, MessageCircle, HelpCircle } from 'lucide-react';

const InteractionHub = () => {
  const [respects, setRespects] = useState([
    { name: "Sailor", message: "Guardian of the pier. Rest easy, Bull.", date: "March 2026" }
  ]);
  const [newRespect, setNewRespect] = useState("");

  const handlePostRespect = () => {
    if (newRespect) {
      setRespects([{ name: "Guest Navigator", message: newRespect, date: "Today" }, ...respects]);
      setNewRespect("");
    }
  };

  return (
    <div className="bg-[#0a0f1d] min-h-screen text-slate-200 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* --- LEFT SIDE: MEMORIAL BOARD --- */}
        <div className="bg-slate-900/40 border-t-8 border-[#BE123C] p-8 rounded-b-3xl shadow-2xl">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-2">The Memorial Board</h2>
          <p className="text-[#BE123C] text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Pay Your Respects to the Navigator</p>
          
          <div className="space-y-4 max-h-[400px] overflow-y-auto mb-8 pr-4 custom-scrollbar">
            {respects.map((r, i) => (
              <div key={i} className="bg-white/5 border-l-2 border-[#BE123C] p-4 rounded-r-xl">
                <p className="text-sm text-slate-300 italic">"{r.message}"</p>
                <p className="text-[10px] text-slate-500 uppercase mt-2 font-bold">— {r.name}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input 
              value={newRespect}
              onChange={(e) => setNewRespect(e.target.value)}
              placeholder="Leave a message for Bull..."
              className="flex-1 bg-slate-800 border-none p-4 rounded-xl text-white outline-none focus:ring-2 ring-[#BE123C]"
            />
            <button onClick={handlePostRespect} className="bg-[#BE123C] p-4 rounded-xl hover:bg-red-700 transition-all">
              <Heart size={20} fill="currentColor" />
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: ASK FLORIDA DOLL --- */}
        <div className="bg-white p-8 rounded-[3rem] shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate-900 p-3 rounded-2xl text-white">
                <HelpCircle size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-black uppercase text-slate-900 tracking-tighter">Ask the Founder</h2>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest italic">Pick my brain about the "Do"</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-8 italic">
              "You’re architecting your legacy, choosing your tools. If the tide feels too high or the tech feels too heavy, ask me here. I'm building this for Levi, and I'm building it for you."
            </p>
          </div>

          <div className="space-y-4">
            <textarea 
              placeholder="What's your question about AI, Systems, or the Hatteras Realm?"
              className="w-full h-32 bg-slate-100 border-2 border-slate-200 p-4 rounded-2xl text-slate-900 outline-none focus:border-[#BE123C] transition-all"
            />
            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-[#BE123C] transition-all">
              Send Signal to the Watchtower
            </button>
          </div>
        </div>

      </div>
      
      <p className="text-center text-slate-700 text-[10px] font-bold uppercase tracking-[0.8em] mt-20">
        Legacy Build // March 28, 2026
      </p>
    </div>
  );
};

export default InteractionHub;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, MessageSquare, X } from 'lucide-react';

const PainPointBot = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const analyzePain = () => {
    const text = input.toLowerCase();
    let advice = "";
    let destination = "";

    if (text.includes("customer") || text.includes("support") || text.includes("calls")) {
      advice = "Sounds like you're drowning in manual support. Our E-Commerce Shredder and AI Voice assistants are built for this.";
      destination = "/shop";
    } else if (text.includes("learn") || text.includes("how") || text.includes("start")) {
      advice = "New to the water? The Survivor Hub is your training ground to master AI at your own pace.";
      destination = "/members";
    } else if (text.includes("money") || text.includes("expensive") || text.includes("cost")) {
      advice = "You need to cut the fat. Our BYOK (Bring Your Own Key) Calling saves businesses over $20k annually.";
      destination = "/shop";
    } else {
      advice = "The AI Ocean is vast, but you don't have to swim alone. Let's look at the Island Map together.";
      destination = "/free";
    }

    setResponse({ advice, destination });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="mb-4 w-80 md:w-96 bg-slate-900 border-2 border-cyan-400 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-pink-500 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-white animate-pulse" />
                <span className="font-bold text-sm uppercase tracking-tighter">AI Pain-Point Specialist</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={18}/></button>
            </div>

            {/* Chat Body */}
            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-300 italic">"What's the biggest 'wipeout' risk in your business right now?"</p>
              
              {!response ? (
                <div className="space-y-3">
                  <textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g. My customer service is too slow..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm focus:border-pink-500 outline-none transition-all h-24"
                  />
                  <button 
                    onClick={analyzePain}
                    className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-bold text-sm transition-all flex justify-center items-center gap-2"
                  >
                    Analyze My Pain <Send size={14}/>
                  </button>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <div className="p-4 bg-slate-800 rounded-2xl border-l-4 border-pink-500 text-sm leading-relaxed">
                    {response.advice}
                  </div>
                  <a 
                    href={response.destination}
                    className="block w-full py-3 bg-pink-500 text-center rounded-xl font-bold text-sm hover:bg-pink-600 transition-all"
                  >
                    Go to the Solution →
                  </a>
                  <button onClick={() => setResponse(null)} className="text-xs text-slate-500 underline w-full">Ask something else</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.6)] border-2 border-white/20"
      >
        <MessageSquare size={28} className="text-white" />
      </motion.button>
    </div>
  );
};

export default PainPointBot;

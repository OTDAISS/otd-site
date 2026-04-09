import React, { useState } from "react";
import { Mic, MicOff, Waves, Sparkles } from "lucide-react";

export default function VoiceInterface() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const toggleListening = () => {
    setListening(!listening);

    // Placeholder behavior — replace with real speech recognition later
    if (!listening) {
      setTranscript("Listening… (voice recognition not yet connected)");
    } else {
      setTranscript("");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300 drop-shadow-lg">
          Voice Interface
        </h1>

        <p className="text-gray-300 mb-10">
          Experimental voice‑driven interaction module.  
          Future versions will support real‑time command execution, dictation, and AI‑powered responses.
        </p>

        <div className="flex flex-col items-center gap-6">
          <button
            onClick={toggleListening}
            className={`p-8 rounded-full border transition-all duration-300 shadow-lg
              ${
                listening
                  ? "border-cyan-400 shadow-cyan-400/30 bg-cyan-400/10"
                  : "border-white/20 hover:border-cyan-300"
              }`}
          >
            {listening ? (
              <Mic className="w-16 h-16 text-cyan-300 animate-pulse" />
            ) : (
              <MicOff className="w-16 h-16 text-gray-400" />
            )}
          </button>

          <div className="text-lg text-gray-300 min-h-[40px]">
            {transcript || "Tap the mic to begin"}
          </div>

          <div className="flex items-center gap-2 text-cyan-300 mt-6">
            <Waves className="w-5 h-5" />
            <Sparkles className="w-5 h-5" />
            <span className="text-sm opacity-80">
              Ocean Tide Drop — Voice Module Prototype
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

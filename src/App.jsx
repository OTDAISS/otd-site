import React from "react";
import MembershipGate from "./components/MembershipGate";

function App() {
  return (
    <>
      <MembershipGate />

      <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-teal-900 text-teal-200 flex flex-col items-center justify-center px-6">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-[0_0_25px_rgba(45,212,191,0.8)] text-center">
          Ocean Tide Drop AI Surfer
        </h1>

        <p className="text-lg text-gray-300 max-w-xl text-center mb-8">
          Pick your tools as you do.  
          Navigate the tides.  
          Build your realm.
        </p>

        <button className="px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-500 transition-all text-black font-semibold shadow-[0_0_12px_rgba(45,212,191,0.8)]">
          Begin Your Journey
        </button>
      </main>
    </>
  );
}

export default App;

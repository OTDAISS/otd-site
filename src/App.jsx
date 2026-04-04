import React from "react";
import "./App.css";
import { Analytics } from '@vercel/analytics/react';

import SystemDock from "./components/SystemDock.jsx";
import GlobalHeader from "./components/GlobalHeader.js";

export default function App({ children }) {
  return (
    <div className="app-shell min-h-screen w-full bg-black text-white overflow-x-hidden">

      {/* Global Header */}
      {GlobalHeader && <GlobalHeader />}

      {/* Animated Page Container */}
      <main
        className="pt-20 pb-24 px-4 fade-in"
        style={{ animation: "fadeIn 0.6s ease-out" }}
      >
        {children}
      </main>

      {/* System Dock */}
      {SystemDock && <SystemDock />}

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}

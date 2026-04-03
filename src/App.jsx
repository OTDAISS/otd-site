import React from "react";
import "./App.css";

// Optional: Global header, dock, or navigation
import SystemDock from "./components/SystemDock.jsx";
import GlobalHeader from "./components/GlobalHeader.js";

export default function App({ children }) {
  return (
    <div className="app-container min-h-screen w-full bg-black text-white overflow-x-hidden">

      {/* Global Header */}
      {GlobalHeader && <GlobalHeader />}

      {/* System Dock (bottom navigation / tools) */}
      {SystemDock && <SystemDock />}

      {/* Main Content */}
      <main className="pt-20 pb-20 px-4">
        {children}
      </main>
    </div>
  );
}

import React from "react";
import "./App.css";
import GlobalHeader from "./components/GlobalHeader.js";
import SystemDock from "./components/SystemDock.js";

function App() {
  return (
    <div className="app-container">
      {/* Global Header */}
      <GlobalHeader />

      {/* Main Content Area */}
      <main className="app-main">
        {/* This is where all routed pages will appear */}
      </main>

      {/* System Dock */}
      <SystemDock />
    </div>
  );
}

export default App;

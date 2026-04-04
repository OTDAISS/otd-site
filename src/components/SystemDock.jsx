import React, { useState } from "react";
import "./SystemDock.css";

const dockItems = [
  { name: "Home", icon: "🏄‍♂️" },
  { name: "Console", icon: "⚡" },
  { name: "Quests", icon: "📜" },
  { name: "Tribe", icon: "🌐" },
  { name: "Profile", icon: "🌊" },
];

export default function SystemDock() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fullscreen Overlay */}
      <div className={`fs-overlay ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <div className="fs-panel" onClick={(e) => e.stopPropagation()}>
          <h1 className="fs-title">Ocean Tide Drop OS</h1>

          <div className="fs-grid">
            {dockItems.map((item, index) => (
              <div key={index} className="fs-card">
                <div className="fs-icon">{item.icon}</div>
                <div className="fs-label">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Dock */}
      <div className="dock-wrapper">
        <div className="dock">
          {dockItems.map((item, index) => (
            <div key={index} className="dock-item">
              <div className="dock-icon">{item.icon}</div>
              <div className="dock-label">{item.name}</div>
            </div>
          ))}

          {/* Fullscreen Button */}
          <div className="dock-item launcher" onClick={() => setOpen(true)}>
            <div className="dock-icon">🌌</div>
            <div className="dock-label">Launch</div>
          </div>
        </div>
      </div>
    </>
  );
}
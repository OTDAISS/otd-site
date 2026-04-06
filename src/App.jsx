import React from "react";
import { Outlet } from "react-router-dom";
import SystemDock from "./components/SystemDock";
import "./styles/global.css";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white relative overflow-x-hidden">
      <SystemDock />
      <div className="pt-24">
        <Outlet />
      </div>
    </div>
  );
}

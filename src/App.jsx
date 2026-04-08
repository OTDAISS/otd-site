import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "./images/logo.png"; // Make sure your logo is here

export default function App() {
  return (
    <div className="min-h-screen w-full text-white bg-black relative overflow-x-hidden">

      {/* Global Header with Logo */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md border-b border-teal-500/20 fixed top-0 left-0 z-50">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Ocean Tide Drop Logo"
            className="h-12 drop-shadow-[0_0_12px_rgba(45,212,191,0.8)]"
          />
          <span className="text-teal-400 font-bold text-xl tracking-wide">
            Ocean Tide Drop
          </span>
        </Link>
      </header>

      {/* Page Content Wrapper */}
      <main className="pt-24 px-4 pb-10 max-w-7xl mx-auto">
        <Outlet />
      </main>

    </div>
  );
}

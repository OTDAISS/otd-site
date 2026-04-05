import React from "react";
import { NavLink } from "react-router-dom";

export default function SystemDock() {
  return (
    <nav className="w-full bg-black/60 backdrop-blur-xl border-b border-teal-900/40 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Ocean Tide Drop Logo"
            className="w-10 h-10 drop-shadow-[0_0_10px_rgba(45,212,191,0.6)]"
          />
          <span className="text-teal-400 font-bold text-xl tracking-wide">
            Ocean Tide Drop
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg transition ${
                isActive
                  ? "text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]"
                  : "text-gray-400 hover:text-teal-300"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-lg transition ${
                isActive
                  ? "text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]"
                  : "text-gray-400 hover:text-teal-300"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg transition ${
                isActive
                  ? "text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]"
                  : "text-gray-400 hover:text-teal-300"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

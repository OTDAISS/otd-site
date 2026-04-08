import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  SparklesIcon,
  MapIcon,
  UserCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function SystemDock() {
  const dockItems = [
    { to: "/", label: "Home", icon: <HomeIcon className="h-6 w-6" /> },
    { to: "/services", label: "Services", icon: <SparklesIcon className="h-6 w-6" /> },
    { to: "/realm", label: "Realm", icon: <MapIcon className="h-6 w-6" /> },
    { to: "/membership", label: "Membership", icon: <UserCircleIcon className="h-6 w-6" /> },
    { to: "/contact", label: "Contact", icon: <EnvelopeIcon className="h-6 w-6" /> },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-6 px-6 py-3 bg-black/40 backdrop-blur-xl border border-teal-500/20 rounded-2xl shadow-[0_0_20px_rgba(45,212,191,0.4)]">
        {dockItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs transition-all ${
                isActive
                  ? "text-teal-300 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]"
                  : "text-gray-300 hover:text-teal-200"
              }`
            }
          >
            {item.icon}
            <span className="mt-1">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

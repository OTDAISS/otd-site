import React from "react";
import { Shield, Crown, Lock, Sparkles, Settings } from "lucide-react";

export default function VictoriaDashboard() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-300 drop-shadow-lg flex items-center gap-3">
          <Crown className="w-10 h-10 text-purple-400" />
          Victoria’s Dashboard
        </h1>

        <p className="text-gray-300 mb-10 max-w-3xl">
          Founder‑only cockpit. This private command center provides access to
          internal controls, realm‑level configuration, and system‑wide
          oversight. Not visible to members or the public.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-400/20">
            <Shield className="w-8 h-8 text-purple-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Realm Security</h2>
            <p className="text-gray-300">
              Manage access layers, membership gates, and internal permissions.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-400/20">
            <Settings className="w-8 h-8 text-purple-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">System Controls</h2>
            <p className="text-gray-300">
              Configure modules, toggle features, and manage backend integrations.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-400/20">
            <Sparkles className="w-8 h-8 text-purple-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Lore Engine</h2>
            <p className="text-gray-300">
              Update realm narrative, character arcs, and world‑building elements.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/40 transition-all duration-300 shadow-lg hover:shadow-purple-400/20">
            <Lock className="w-8 h-8 text-purple-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Private Archives</h2>
            <p className="text-gray-300">
              Access founder‑only documents, prototypes, and internal strategy notes.
            </p>
          </div>
        </div>

        <p className="mt-12 text-sm text-purple-300 opacity-70 flex items-center gap-2">
          <Lock className="w-4 h-4" />
          Founder Access Only — Ocean Tide Drop Internal Systems
        </p>
      </div>
    </div>
  );
}

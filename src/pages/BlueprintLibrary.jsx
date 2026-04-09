import React from "react";
import { BookOpen, Layers, Lock, ArrowRight } from "lucide-react";

export default function BlueprintLibrary() {
  const blueprints = [
    {
      title: "Client Acquisition Automations",
      desc: "High‑performance workflows for capturing, qualifying, and converting leads with minimal manual effort.",
      icon: <Layers className="w-8 h-8 text-cyan-300" />,
    },
    {
      title: "AI Service Delivery Systems",
      desc: "Done‑for‑you operational frameworks for delivering AI‑powered services at scale.",
      icon: <BookOpen className="w-8 h-8 text-purple-300" />,
    },
    {
      title: "Recurring Revenue Engines",
      desc: "Blueprints for subscription‑based offerings, automated fulfillment, and long‑term client retention.",
      icon: <Lock className="w-8 h-8 text-green-300" />,
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300 drop-shadow-lg">
          Blueprint Library
        </h1>

        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          A curated vault of high‑leverage automation blueprints designed to help
          members deploy profitable systems rapidly and consistently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blueprints.map((bp, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20"
            >
              <div className="mb-4">{bp.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{bp.title}</h2>
              <p className="text-gray-300">{bp.desc}</p>

              <div className="mt-4 flex items-center text-cyan-300 hover:text-cyan-200 transition">
                <ArrowRight className="w-5 h-5 mr-1" />
                <span className="text-sm">Open Blueprint</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

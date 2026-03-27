import React from 'react';

const phases = [
  { 
    name: "Pre-Purchase Flow", 
    task: "Attract & Qualify", 
    desc: "24/7 AI chatbots and lead capture[cite: 24, 25].",
    tools: "Intercom, Lindy.ai "
  },
  { 
    name: "Resolution Flow", 
    task: "Service Delivery", 
    desc: "Intelligent ticket routing and AI agent copilots[cite: 31, 32].",
    tools: "Zendesk, HubSpot "
  },
  { 
    name: "Post-Resolution Flow", 
    task: "Retention & Upsell", 
    desc: "Proactive issue detection and automated follow-ups[cite: 39, 42].",
    tools: "Zapier, Typeform "
  }
];

export default function Services() {
  return (
    <div className="bg-black text-white py-20 px-10">
      <h1 className="text-4xl font-bold text-teal-400 mb-10 drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]">Our Service Phases [cite: 23]</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {phases.map((p, i) => (
          <div key={i} className="p-6 border border-teal-900 rounded-2xl bg-gray-900/50">
            <h2 className="text-xl font-bold text-teal-300">{p.name}</h2>
            <p className="text-gray-400 my-4">{p.desc}</p>
            <span className="text-xs font-mono text-teal-500 uppercase">{p.tools}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';

const tiers = [
  { name: "Setup Fee", price: "$3,000+", note: "One-time configuration [cite: 60]" },
  { name: "Monthly Retainer", price: "$2,500/mo", note: "Ongoing management [cite: 60]" },
  { name: "Advanced Analytics", price: "$500/mo", note: "Custom AI dashboards [cite: 60]" }
];

export default function Pricing() {
  return (
    <div className="bg-black py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <div key={i} className="bg-gray-900 p-8 rounded-3xl border border-teal-500/30 text-center">
            <h3 className="text-white text-xl mb-4">{t.name}</h3>
            <div className="text-teal-400 text-3xl font-bold mb-2">{t.price}</div>
            <p className="text-gray-500 text-sm">{t.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

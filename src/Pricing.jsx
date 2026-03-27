import React from 'react';

const tiers = [
  { 
    id: "price_setup_fee_id", // Replace with your actual Stripe Price ID
    name: "Setup & Onboarding", 
    price: "$3,000+", 
    type: "One-time",
    features: ["Core Platform Config", "Journey Mapping", "KPI Definition"] 
  },
  { 
    id: "price_retainer_id", // Replace with your actual Stripe Price ID
    name: "Monthly Retainer", 
    price: "$2,500/mo", 
    type: "Subscription",
    features: ["Ongoing Management", "All 3 Service Phases", "24/7 Monitoring"] 
  },
  { 
    id: "price_analytics_id", // Replace with your actual Stripe Price ID
    name: "Advanced Analytics", 
    price: "$500/mo", 
    type: "Add-on",
    features: ["Custom Dashboards", "AI Insights", "Real-time Tracking"] 
  }
];

export default function Pricing() {
  const handleCheckout = async (priceId) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      const session = await response.json();
      window.location.href = session.url; // Redirects to Stripe Checkout
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <div key={i} className="bg-slate-900 border border-emerald-500/20 p-8 rounded-[2.5rem] flex flex-col hover:border-emerald-500/50 transition-all">
            <h3 className="text-xl font-black uppercase italic mb-2">{tier.name}</h3>
            <div className="text-4xl font-bold text-emerald-400 mb-1">{tier.price}</div>
            <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest mb-8">{tier.type}</p>
            <ul className="flex-grow space-y-4 mb-10">
              {tier.features.map((f, j) => (
                <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                  <span className="text-emerald-500">✦</span> {f}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleCheckout(tier.id)}
              className="w-full bg-emerald-600 hover:bg-emerald-400 py-4 rounded-2xl font-black uppercase tracking-widest text-black transition-all"
            >
              Secure Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

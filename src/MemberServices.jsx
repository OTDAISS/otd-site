import React from "react";
import { Search, Cpu, Database, Zap, TrendingUp } from "lucide-react";

const iconMap = { Search, Cpu, Database, Zap, TrendingUp };

const services = [
  {
    id: "svc_01",
    name: "Neural Strategy Audit",
    category: "Consulting",
    description:
      "Quarterly deep-dive into your current tech stack to identify high-leakage points and automation opportunities.",
    benefit: "Reduction in overhead by up to 40% through journey re-mapping.",
    status: "Available",
    icon: "Search",
  },
  {
    id: "svc_02",
    name: "Custom Agent Deployment",
    category: "Implementation",
    description:
      "Full-service configuration of Vapi or Retell AI voice agents tailored to your business voice and specific CRM logic.",
    benefit: "24/7 lead qualification without human intervention.",
    status: "High Demand",
    icon: "Cpu",
  },
  {
    id: "svc_03",
    name: "The Blueprint Vault",
    category: "Resource",
    description:
      "Exclusive access to our library of internal SOPs, Framer templates, and Zapier/Make.com JSON blueprints.",
    benefit: "Instant deployment of proven workflows — no building from scratch.",
    status: "Updated Weekly",
    icon: "Database",
  },
  {
    id: "svc_04",
    name: "Priority Dev Pipeline",
    category: "Development",
    description:
      "Skip the standard queue for custom Web or Game engine features. Direct access to our lead architect.",
    benefit: "72-hour turnaround on feature requests and logic adjustments.",
    status: "Member-Only",
    icon: "Zap",
  },
  {
    id: "svc_05",
    name: "Revenue Optimization Lab",
    category: "Monetization",
    description:
      "We analyze your traffic and conversion data to implement AI-driven upsells and churn-prevention sequences.",
    benefit: "Maximize LTV of every captured lead.",
    status: "Strategic",
    icon: "TrendingUp",
  },
];

export default function MemberServices() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-3">
          PRO // ELITE
        </p>
        <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
          Member Excellence Suite
        </h1>
        <p className="text-slate-500 text-base">
          Your private access to the systems, strategies, and support that move the needle.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {services.map((svc) => {
          const Icon = iconMap[svc.icon];
          return (
            <div
              key={svc.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 flex flex-col gap-4 hover:border-emerald-500/40 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  {Icon && <Icon className="text-emerald-400 w-5 h-5" />}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {svc.status}
                </span>
              </div>
              <div>
                <p className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-1">
                  {svc.category}
                </p>
                <h3 className="text-lg font-black text-white">{svc.name}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {svc.description}
              </p>
              <div className="mt-auto pt-4 border-t border-slate-800">
                <p className="text-emerald-400 text-xs font-semibold">
                  {svc.benefit}
                </p>
              </div>
              <button className="w-full py-3 rounded-xl border border-emerald-500/30 text-emerald-400 text-sm font-black uppercase tracking-widest hover:bg-emerald-500/10 transition-all duration-200">
                Request Implementation
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

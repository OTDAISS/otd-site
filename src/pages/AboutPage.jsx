import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-teal-400 mb-8 drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]">
          Our Vision
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed mb-12">
          Ocean Tide Drop is building the next generation of AI‑powered customer
          journey automation. By combining cutting‑edge AI with best‑in‑class SaaS
          tooling, we help businesses eliminate operational friction, reduce costs,
          and deliver exceptional customer experiences at scale.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-semibold text-teal-300 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-400">
              To empower businesses with automation systems that increase customer
              satisfaction, streamline operations, and create sustainable growth —
              without requiring large teams or complex infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-300 mb-4">
              Why We Win
            </h2>
            <ul className="space-y-2 text-gray-400">
              <li>• AI‑First by Design</li>
              <li>• Fast Time to Value (8‑week launch)</li>
              <li>• Zero Product Risk for Clients</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

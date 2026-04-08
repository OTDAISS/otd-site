import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-teal-400 mb-8">Our Vision</h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-12">
          We aim to become the leading drop-servicing provider of AI customer journey automation globally[cite: 10]. 
          By combining cutting-edge AI with best-in-class SaaS tooling, we eliminate the friction and cost of traditional operations[cite: 6].
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-semibold text-teal-300 mb-4">Our Mission</h2>
            <p className="text-gray-400">
              To empower businesses with AI-driven automation that reduces costs, increases satisfaction, and scales effortlessly[cite: 9].
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-teal-300 mb-4">Why We Win</h2>
            <ul className="space-y-2 text-gray-400">
              <li>• AI-First by Design [cite: 65]</li>
              <li>• Fast Time to Value (8-week launch) [cite: 65]</li>
              <li>• Zero Product Risk for Clients [cite: 65]</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Layout, Code, Database } from 'lucide-react';

const WebBuilds = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-black italic uppercase mb-4">Architecture Builds</h1>
        <p className="text-slate-500 mb-12 font-mono italic">Stack: FastAPI // React // MongoDB // Vite</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[3rem]">
            <Code className="text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold italic mb-4">Frontend Core</h3>
            <ul className="text-slate-400 space-y-2 font-mono text-sm">
              <li>- Tailwind CSS Styling</li>
              <li>- Vercel Web Analytics</li>
              <li>- React-Router Integration</li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[3rem]">
            <Database className="text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold italic mb-4">Backend Logic</h3>
            <ul className="text-slate-400 space-y-2 font-mono text-sm">
              <li>- Async FastAPI Endpoints</li>
              <li>- MongoDB Lead Storage</li>
              <li>- Stripe Webhook Handlers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBuilds;

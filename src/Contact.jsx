import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to POST to your FastAPI /api/leads endpoint
    console.log("Discovery call requested:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold text-teal-400 mb-6">Schedule a Discovery Call</h1>
          <p className="text-lg text-gray-400 mb-8">
            We will assess your current operations, identify automation opportunities, and provide a customized proposal within 5 business days.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="p-3 bg-teal-900/30 rounded-full text-teal-400">📍</span>
              <span>West Ashley, Charleston, SC</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="p-3 bg-teal-900/30 rounded-full text-teal-400">✉️</span>
              <span>oceantidedrop@gmail.com</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900/50 p-10 rounded-3xl border border-teal-900/50">
          <div className="space-y-6">
            <input 
              type="text" placeholder="Your Name" required
              className="w-full bg-black border border-gray-800 p-4 rounded-xl focus:border-teal-400 outline-none"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="email" placeholder="Business Email" required
              className="w-full bg-black border border-gray-800 p-4 rounded-xl focus:border-teal-400 outline-none"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <textarea 
              placeholder="Tell us about your current support volume..." rows="4"
              className="w-full bg-black border border-gray-800 p-4 rounded-xl focus:border-teal-400 outline-none"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            <button className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)]">
              Request Implementation Proposal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

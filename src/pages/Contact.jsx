import React, { useState } from "react";

const services = [
  "AI Strategy Audit — $500",
  "AI Voice Agent Setup — From $2,500",
  "AI Workflow Automation — From $1,500",
  "Reputation Guardian — From $750/mo",
  "Content Flywheel — From $1,000/mo",
  "Managed AI Employee — From $2,000/mo",
  "Not sure — just want to talk",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-teal-400 text-2xl">✓</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">You're in the tide.</h2>
          <p className="text-gray-400 text-lg">
            We'll be in touch within 24 hours to confirm your call and get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-teal-500 font-mono text-xs uppercase tracking-widest mb-4">
            Let's Talk
          </p>
          <h1 className="text-5xl font-bold text-white mb-4">
            Book a Free Call
          </h1>
          <p className="text-gray-400 text-lg">
            30 minutes. No pitch. Just a clear look at what AI can do for your
            business and what it would cost.
          </p>
        </div>

        {/* Calendly */}
        <div className="mb-10 p-6 rounded-2xl border border-teal-900/40 bg-gray-900/30 text-center">
          <p className="text-teal-400 font-mono text-xs uppercase tracking-widest mb-3">
            Book directly
          </p>

          <a
            href="https://calendly.com/oceantidedrop"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-teal-400 text-black font-bold hover:bg-teal-300 transition-all duration-200"
          >
            Schedule on Calendly
          </a>

          <p className="text-gray-600 text-xs mt-3">
            Or fill out the form below and we'll reach out to schedule.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-teal-500 font-mono text-xs uppercase tracking-widest">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="bg-gray-900/50 border border-teal-900/50 rounded-xl px-5 py-3 text-white placeholder-gray-600 outline-none focus:border-teal-500/60 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-teal-500 font-mono text-xs uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@business.com"
                className="bg-gray-900/50 border border-teal-900/50 rounded-xl px-5 py-3 text-white placeholder-gray-600 outline-none focus:border-teal-500/60 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-teal-500 font-mono text-xs uppercase tracking-widest">
              Business Name
            </label>
            <input
              type="text"
              name="business"
              value={form.business}
              onChange={handleChange}
              placeholder="Your Business"
              className="bg-gray-900/50 border border-teal-900/50 rounded-xl px-5 py-3 text-white placeholder-gray-600 outline-none focus:border-teal-500/60 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-teal-500 font-mono text-xs uppercase tracking-widest">
              I'm interested in...
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="bg-gray-900/50 border border-teal-900/50 rounded-xl px-5 py-3 text-white outline-none focus:border-teal-500/60 transition-all appearance-none"
            >
              <option value="" disabled>Select a service</option>
              {services.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-teal-500 font-mono text-xs uppercase tracking-widest">
              Tell us about your business
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="What's your biggest operational headache right now?"
              className="bg-gray-900/50 border border-teal-900/50 rounded-xl px-5 py-3 text-white placeholder-gray-600 outline-none focus:border-teal-500/60 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-4 rounded-xl bg-teal-400 text-black font-bold text-lg hover:bg-teal-300 transition-all duration-200"
          >
            Send My Request
          </button>

          <p className="text-gray-600 text-xs text-center">
            We respond within 24 hours. No spam, ever.
          </p>
        </form>
      </div>
    </div>
  );
}

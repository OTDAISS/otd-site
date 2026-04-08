import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting lead:", formData);

    // Placeholder for API call
    // fetch("/api/leads", { method: "POST", body: JSON.stringify(formData) })

    alert("Your request has been submitted!");
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 flex justify-center">
      <div className="bg-gray-900/50 p-10 rounded-3xl border border-teal-900/50 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.8)] mb-6 text-center">
          Schedule a Discovery Call
        </h1>

        <p className="text-gray-300 text-center mb-10">
          We will assess your current operations, identify automation opportunities,
          and provide a customized proposal within 5 business days.
        </p>

        <div className="text-center mb-10">
          <p className="text-teal-400 font-semibold">West Ashley, Charleston, SC</p>
          <p className="text-gray-400">oceantidedrop@gmail.com</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/40 border border-teal-900/50 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400"
          />

          {/* Email */}
          <input
            id="email"
            type="email"
            placeholder="Business Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/40 border border-teal-900/50 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400"
          />

          {/* Message */}
          <textarea
            id="message"
            rows="4"
            placeholder="Tell us about your current support volume..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/40 border border-teal-900/50 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-black font-semibold py-3 rounded-xl shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:bg-teal-400 transition"
          >
            Request Implementation Proposal
          </button>
        </form>
      </div>
    </div>
  );
}

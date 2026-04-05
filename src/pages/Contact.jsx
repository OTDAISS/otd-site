import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus({
        loading: false,
        success: "Your message has been sent! We’ll reach out within 5 business days.",
        error: null,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.8)] mb-6">
          Schedule a Discovery Call
        </h1>

        <p className="text-gray-300 mb-10">
          We will assess your current operations, identify automation opportunities, 
          and provide a customized proposal within 5 business days.
        </p>

        <div className="bg-gray-900/50 p-10 rounded-3xl border border-teal-900/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/40 border border-teal-900/40 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400"
            />

            {/* Email */}
            <input
              id="email"
              type="email"
              placeholder="Business Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/40 border border-teal-900/40 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400"
            />

            {/* Message */}
            <textarea
              id="message"
              placeholder="Tell us about your goals..."
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/40 border border-teal-900/40 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-4 rounded-xl bg-teal-500 text-black font-semibold shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:bg-teal-400 transition disabled:opacity-50"
            >
              {status.loading ? "Sending..." : "Submit"}
            </button>
          </form>

          {/* Status Messages */}
          {status.success && (
            <p className="mt-6 text-teal-400">{status.success}</p>
          )}
          {status.error && (
            <p className="mt-6 text-red-400">{status.error}</p>
          )}

          {/* Contact Details */}
          <div className="mt-10 text-gray-400 text-sm">
            <p>📍 West Ashley, Charleston, SC</p>
            <p>📧 oceantidedrop@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

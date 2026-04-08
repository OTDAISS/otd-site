import React from "react";

export default function Services() {
  const servicePhases = [
    {
      name: "Pre-Purchase Flow",
      task: "Attract & Qualify",
      description: "24/7 AI chatbots and lead capture.",
      tools: ["Intercom", "Lindy.ai"],
    },
    {
      name: "Resolution Flow",
      task: "Service Delivery",
      description: "Intelligent ticket routing and AI agent copilots.",
      tools: ["Zendesk", "HubSpot"],
    },
    {
      name: "Post-Resolution Flow",
      task: "Retention & Upsell",
      description: "Proactive issue detection and automated follow-ups.",
      tools: ["Zapier", "Typeform"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]">
        Our Service Phases
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {servicePhases.map((phase, index) => (
          <div
            key={index}
            className="p-6 border border-teal-900 rounded-2xl bg-gray-900/50"
          >
            <h2 className="text-2xl font-semibold text-teal-400 mb-2">
              {phase.name}
            </h2>

            <p className="text-sm text-teal-500 font-mono uppercase mb-4">
              {phase.task}
            </p>

            <p className="text-gray-300 mb-6">{phase.description}</p>

            <div>
              <p className="text-xs font-mono text-teal-500 uppercase mb-2">
                Tools Used
              </p>
              <ul className="list-disc list-inside text-gray-400">
                {phase.tools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";

export default function LostAtSea() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center py-32">
      <h1 className="text-5xl font-bold mb-6 text-cyan-300">
        Lost at Sea
      </h1>
      <p className="text-lg text-gray-300 max-w-xl">
        The tides have shifted, traveler.  
        This realm doesn’t exist — or it’s hidden beneath the waves.
      </p>
      <a
        href="/"
        className="mt-10 px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
      >
        Return to Command Center
      </a>
    </div>
  );
}

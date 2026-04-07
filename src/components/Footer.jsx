import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-10 mt-20 bg-black/60 border-t border-teal-900/40 text-center text-gray-400">
      <p className="text-teal-400 font-semibold mb-2">
        Ocean Tide Drop — Creative Technology Studio
      </p>
      <p className="text-gray-500 text-sm">
        West Ashley, Charleston, SC • oceantidedrop@gmail.com
      </p>
      <p className="text-gray-600 text-xs mt-4">
        © {new Date().getFullYear()} Ocean Tide Drop. All rights reserved.
      </p>
    </footer>
  );
}

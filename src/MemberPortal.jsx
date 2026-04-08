import React from "react";
import { Link } from "react-router-dom";

export default function MemberPortal() {
  const unlock = () => {
    localStorage.setItem("ocean_member", "true");
    window.location.href = "/memberservices";
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-slate-900 to-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">

        <h1 className="text-4xl font-bold text-teal-300 drop-shadow-[0_0_12px_rgba(45,212,191,0.8)]">
          Member Portal
        </h1>

        <p className="mt-4 text-lg text-teal-200/80">
          Access your tools, services, and the inner realm of Ocean Tide Drop.
        </p>

        <button
          onClick={unlock}
          className="mt-10 px-8 py-3 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-lg shadow-lg shadow-teal-500/40 transition-all"
        >
          Unlock Membership
        </button>

        <div className="mt-10">
          <Link
            to="/"
            className="text-teal-300 hover:text-teal-200 underline underline-offset-4"
          >
            Return Home
          </Link>
        </div>

      </div>
    </div>
  );
}

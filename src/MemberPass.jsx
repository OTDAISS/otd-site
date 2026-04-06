import React, { useState } from "react";
import { Key, ShieldCheck } from "lucide-react";

const ACCESS_CODE = "OCEAN2025";

export default function MemberPass({ onAuthenticated }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuth = () => {
    setLoading(true);
    setTimeout(() => {
      if (code === ACCESS_CODE) {
        onAuthenticated();
      } else {
        setError(true);
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="bg-slate-900 rounded-[3.5rem] p-12 max-w-md w-full border border-slate-800 flex flex-col items-center gap-8">
        <div className="w-16 h-16 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center">
          <Key className="text-emerald-400 w-7 h-7" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-2">
            Member Access
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            Enter your credentials to access your custom AI dashboard and project analytics.
          </p>
        </div>
        <div className="w-full flex flex-col gap-3">
          <input
            type="password"
            placeholder="Access Code"
            value={code}
            onChange={(e) => { setCode(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === "Enter" && handleAuth()}
            className={`w-full bg-slate-950 border rounded-xl px-5 py-4 font-mono text-emerald-400 placeholder-slate-600 outline-none transition-all ${
              error
                ? "border-red-500/60 focus:border-red-400"
                : "border-slate-800 focus:border-emerald-500/60"
            }`}
          />
          {error && (
            <p className="text-red-400 text-xs font-mono text-center">
              Invalid access code. Try again.
            </p>
          )}
        </div>
        <button
          onClick={handleAuth}
          disabled={loading || !code}
          className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-400 hover:text-black text-white font-black uppercase tracking-widest text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "Authenticating..." : "Authenticate"}
        </button>
        <div className="flex items-center gap-2 text-slate-600">
          <ShieldCheck className="w-3 h-3" />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Secure Entry Point
          </span>
        </div>
      </div>
    </div>
  );
}

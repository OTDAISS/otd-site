import React from "react";
import { Navigate } from "react-router-dom";

export default function MemberPass({ children }) {
  const isMember = localStorage.getItem("ocean_member") === "true";

  if (!isMember) {
    return <Navigate to="/memberportal" replace />;
  }

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {children}
    </div>
  );
}

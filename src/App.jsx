import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

// These MUST match your actual filenames:
import GlobalHeader from "./components/GlobalHeader.js";
import SystemDock from "./components/SystemDock.js";

export default function App() {
  return (
    <div className="app-container">
      <GlobalHeader />
      <RouterProvider router={router} />
      <SystemDock />
    </div>
  );
}

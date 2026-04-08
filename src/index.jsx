import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import MembershipGate from "./components/MembershipGate";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MembershipGate>
        <App />
      </MembershipGate>
    ),
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

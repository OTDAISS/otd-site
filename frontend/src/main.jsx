import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

// Import your pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Add more pages here as needed
// import About from "./pages/About";
// import Membership from "./pages/Membership";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

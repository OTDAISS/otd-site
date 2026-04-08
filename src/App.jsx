import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // ← THIS IS THE FIX
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;

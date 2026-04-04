import { createBrowserRouter } from "react-router-dom";

// Pages for the services site
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;

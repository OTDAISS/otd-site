// src/router.jsx
import { createBrowserRouter } from "react-router-dom";

// --- Pages ---
import Home from "./pages/Home";
import Island from "./pages/Island";
import Challenges from "./pages/Challenges";
import Progression from "./pages/Progression";
import Community from "./pages/Community";
import Members from "./pages/Members";
import Blog from "./pages/Blog";
import Free from "./pages/Free";

import Founders from "./pages/Founders";
import Campfire from "./pages/Campfire";
import Arena from "./pages/Arena";
import Dashboard from "./pages/Dashboard";
import Ceremony from "./pages/Ceremony";

import ThirdPartyTools from "./pages/ThirdPartyTools";

// --- 404 ---
import NotFound from "./pages/NotFound";

// --- Router ---
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/island",
    element: <Island />,
  },
  {
    path: "/challenges",
    element: <Challenges />,
  },
  {
    path: "/progression",
    element: <Progression />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/members",
    element: <Members />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/free",
    element: <Free />,
  },

  // --- Realm Pages ---
  {
    path: "/founders",
    element: <Founders />,
  },
  {
    path: "/campfire",
    element: <Campfire />,
  },
  {
    path: "/arena",
    element: <Arena />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/ceremony",
    element: <Ceremony />,
  },

  // --- Tools ---
  {
    path: "/tools",
    element: <ThirdPartyTools />,
  },

  // --- 404 ---
  {
    path: "*",
    element: <NotFound />,
  },
]);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Privacy from "./page/Privacy";
import Contact from "./page/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacypolicy",
    element: <Privacy />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

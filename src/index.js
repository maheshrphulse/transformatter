import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import "./styles/general.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../src/components/Main";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Clock from "../src/components/Clock";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Clock />,
    children: [
      {
        path: "/",
        element: <Main />,
        errorElement: <Clock />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Clock />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Clock />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

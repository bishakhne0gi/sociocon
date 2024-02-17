import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.tsx";
import { Landing } from "./containers/index.ts";
import { Login } from "./components/index.ts";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL;
// console.log(`API base URL is ${axios.defaults.baseURL}`);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

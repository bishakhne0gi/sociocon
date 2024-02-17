import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.tsx";
import { Landing } from "./containers/index.ts";
import { Login, Register } from "./components/index.ts";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL;
axios.defaults.withCredentials = true;

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
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

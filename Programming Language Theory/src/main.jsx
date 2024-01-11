import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import ReactPage from "./pages/ReactPage/ReactPage";
import JavaScriptPage from "./pages/JavaScriptPage/JavaScriptPage";
import CppPage from "./pages/CppPage/CppPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/react",
    element: <ReactPage />,
  },
  {
    path: "/javascript",
    element: <JavaScriptPage />,
  },
  {
    path: "/cpp",
    element: <CppPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./Pages/ErrorPage";
import "./index.css"; // This file is empty currently.
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

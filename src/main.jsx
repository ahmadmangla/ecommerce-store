import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx";
import Products from "./pages/Products/Products.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import SideBarLayout from "./components/Layout/SideBarLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products/:slug",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/",
    element: <SideBarLayout />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

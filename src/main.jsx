import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx";
import Products from "./pages/Products/Products.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import SideBarLayout from "./components/Layout/SideBarLayout.jsx";
import Categories from "./pages/Category/Categories.jsx";
import { Provider } from "react-redux";
import { store } from "./context/store.js";

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
      {
        path: "/product-categories/:category/:slug",
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
      {
        path: "/product-categories/:category",
        element: <Categories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AuthLayout from "./layouts/auth";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signUp";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import MainLayout from "./layouts/main";

const isLogin = localStorage?.isLogin ?? false;

const Routes = () => {
  return useRoutes([
    isLogin
      ? {
          path: "/",
          element: <MainLayout />,
          children: [
            { path: "/", element: <Navigate to="/home" /> },
            { path: "/home", element: <Home /> },
            { path: "/product", element: <Product /> },
            { path: "/cart", element: <Cart /> },
          ],
        }
      : {
          path: "/",
          element: <AuthLayout />,
          children: [
            { path: "/", element: <Navigate to="/login" /> },
            { path: "/login", element: <Login /> },
            { path: "/signUp", element: <SignUp /> },
          ],
        },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
};

export default Routes;

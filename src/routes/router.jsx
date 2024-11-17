// import React from 'react'
import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../components/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/log",
        element: <Login></Login>,
      },
      {
        path: "/reg",
        element: <Register></Register>,
      },
    ]
  },
]);

export default router





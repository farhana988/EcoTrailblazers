// import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import ErrorPage from "../components/ErrorPage";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import Details from "../components/Details";
import AllBlogs from "../components/AllBlogs";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Login";
import Register from "../components/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async ()=> {
          const cardRes= await fetch("../apiData.json")
          const cardData= await cardRes.json()

          const blogRes = await fetch("../blogs.json")
          const blogData =await blogRes.json()

          const subsRes =await fetch ("../subscription.json")
          const subsData = await subsRes.json()

          // console.log(subsData)
          return{cardData, blogData, subsData}
        }
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/userProfile",
        element:<PrivateRoute> <UserProfile></UserProfile></PrivateRoute>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: async({params})=> {
          const res = await fetch('../apiData.json')
          const data = await res.json()
          const singleData = data.find(data=>data.id==params.id)
          return singleData
        }
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>,
        loader:()=> fetch("../blogs.json")
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/reg",
        element:<Register></Register>,
      },
    ],
  },
 
]);

export default router;

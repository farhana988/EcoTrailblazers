// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const AllBlogs = () => {
    const data =useLoaderData()

    return (
        <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
            {data.map((blog) => (
              <Blog key={blog.id} blog={blog}></Blog>
            ))}
          </div>
          
        </div>
      </div>
    );
};

export default AllBlogs;
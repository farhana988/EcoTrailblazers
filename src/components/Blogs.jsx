// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
  const {blogData} = useLoaderData();
  // const blogData = data.blogData;
  // console.log(blogData)

  return (
    <div className="px-8 lg:px-0  py-10 ">
      <div className="container mx-auto">
        <h1  className="text-4xl font-bold text-center mb-6">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
          {blogData.slice(0,3).map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
        <div className="flex justify-end mt-4">
             <button 
             
             className="btn bg-primary ring-2 ring-offset-4 ring-primary text-white   lg:text-xl">
               <Link to='/allBlogs'> Show More</Link>
            </button>
           </div>
      </div>
    </div>
  );
};

export default Blogs;

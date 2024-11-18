// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
  const data = useLoaderData();
  const blogData = data.blogData;
  // console.log(blogData)

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Blog Cards</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {blogData.slice(0,3).map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
        <div className="flex justify-end mt-4 mr-5 md:mr-0 lg:mr-20">
             <button 
             
             className="btn">
               <Link to='/allBlogs'> Show More</Link>
            </button>
           </div>
      </div>
    </div>
  );
};

export default Blogs;

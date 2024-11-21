// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import Heading from "./Heading";

const Blogs = () => {
  const {blogData} = useLoaderData();
  
  return (
    <div className="px-8 lg:px-0  py-10 ">
      <div className="container mx-auto">
        <Heading
        title={'Blogs'}
        subtitle={'Insightful articles on eco-conscious travel, sustainability tips, and adventure stories from the field. It provides inspiration and practical advice for travelers looking to explore the world responsibly while preserving its natural beauty.'}
        ></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
          {blogData.slice(0,3).map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
        <div className="flex justify-end mt-4">
             <button 
             
             className="btn bg-primary ring-2 ring-offset-4 ring-primary text-white
              lg:text-xl mt-5">
               <Link to='/allBlogs'> Show More</Link>
            </button>
           </div>
      </div>
    </div>
  );
};

export default Blogs;

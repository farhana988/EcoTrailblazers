// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import Heading from "./Heading";

const AllBlogs = () => {
    const data =useLoaderData()

    return (
        <div className="min-h-screen bg-gray-100 py-20">
        <div className="container mx-auto">
        <Heading
        title={'Blogs'}
        subtitle={'Insightful articles on eco-conscious travel, sustainability tips, and adventure stories from the field. It provides inspiration and practical advice for travelers looking to explore the world responsibly while preserving its natural beauty.'}
        ></Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
            {data.map((blog) => (
              <Blog key={blog.id} blog={blog}></Blog>
            ))}
          </div>
          
        </div>
      </div>
    );
};

export default AllBlogs;
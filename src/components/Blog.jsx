/* eslint-disable react/prop-types */
// import React from 'react';

const Blog = ({ blog }) => {
    const {image,title,excerpt}=blog
    return (
       <div className="flex justify-center ">
      <div className="card w-96 bg-base-100 shadow-xl flex flex-col">
        <figure className="flex-shrink-0">
          <img src={image} alt={title} className="h-48 w-full object-cover" />
        </figure>
        <div className="card-body flex-1 flex flex-col justify-between">
          <h2 className="card-title">{title}</h2>
          <p>{excerpt}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blog;
// import React from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ singleData }) {
  // console.log(typeof singleData)
  const { adventure_title, image, eco_friendly_features,id } = singleData;
  return (
   
      <div className="card card-compact bg-base-100 w-96 shadow-xl ml-5 md:ml-0 lg:ml-0">
        <figure>
          <img 
          className="w-20 h-40"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{adventure_title}</h2>
          <p>{ eco_friendly_features}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to={`/details/${id}`}>Explore Now</Link></button>
          </div>
        </div>
      </div>
    
  );
}

Card.propTypes = {
  singleData: PropTypes.object,
};

export default Card;

// import React from 'react'

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ singleData }) {
  // console.log(typeof singleData)
  const { adventure_title, image, eco_friendly_features, id } = singleData;
  return (
    <div
      className="card card-compact  shadow-xl mx-9 md:mx-0 lg:mx-0 bg-red-50"
    >
      <figure>
        <img
          className="w-10/12  h-40 rounded-xl mt-8"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{adventure_title}</h2>

        <ul className="list-disc pl-6 space-y-1">
          {eco_friendly_features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-700">
             {feature}
            </li>
          ))}
        </ul>
        
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/details/${id}`}>Explore Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  singleData: PropTypes.object,
};

export default Card;

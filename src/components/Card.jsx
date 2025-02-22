// import React from 'react'

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ singleData }) {

  const { adventure_title, image, eco_friendly_features, id } = singleData;
  return (
    <div
      className="card card-compact  shadow-xl bg-white"
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

        <ul className="list-disc pl-6 gap-1 flex flex-col flex-grow">
          {eco_friendly_features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-700">
             {feature}
            </li>
          ))}
        </ul>
        
        <div className="card-actions justify-end">
          <button className="btn bg-primary text-white lg:text-xl">
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

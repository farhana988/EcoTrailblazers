// import React from 'react';

import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const {   image,
    adventure_title,
    short_description,
    adventure_cost,
    booking_availability,
    location,
    duration,
    adventure_level,
    included_items,
    eco_friendly_features,
    max_group_size,
    special_instructions,} = useLoaderData();
  // console.log(id)

  const [showModal, setShowModal] = useState(false);

  const handleTalkWithExpert = () => {
    const currentTime = new Date();

    const hours = currentTime.getHours();

    if (hours >= 10 && hours < 20) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      setShowModal(true);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-20 px-6">
    <div className="card card-compact shadow-xl bg-white rounded-lg overflow-hidden">
      <figure>
        <img className="w-full h-60 md:h-96 lg:h-[500px] object-cover" src={image} alt={adventure_title} />
      </figure>
      <div className="card-body ">
        <div className="text-center space-y-3">
        <h2 className="text-2xl lg:text-5xl font-bold text-gray-800">{adventure_title}</h2>
        <p className="text-lg text-gray-600">{short_description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 ml-5  lg:ml-20 ">
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">Adventure Details</h3>
          <ul className="space-y-2 mt-4 text-gray-600">
            <li><strong>Location:</strong> {location}</li>
            <li><strong>Duration:</strong> {duration}</li>
            <li><strong>Adventure Level:</strong> {adventure_level}</li>
            <li><strong>Cost:</strong> ${adventure_cost}</li>
            <li><strong>Booking Availability:</strong> {booking_availability}</li>
            <li><strong>Max Group Size:</strong> {max_group_size}</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">Included Items</h3>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
            {included_items.map((item, index) => (
              <li key={index}> {item}</li>
           
            ))}
          </ul>
        </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 ml-5  lg:ml-20 ">
          
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">Eco-Friendly Features</h3>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
            {eco_friendly_features.map((feature, index) => (
              <li key={index}> {feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">Special Instructions</h3>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
            {special_instructions.map((instruction, index) => (
              <li key={index}> {instruction}</li>
            ))}
          </ul>
        </div>
        </div>

        <div className="card-actions justify-end mt-6">
          <button onClick={handleTalkWithExpert} className=" btn btn-primary text-2xl">
            Talk with Expert
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box text-center">
            <h2 className="text-3xl font-bold my-4">Consultation Hours</h2>
            <p className="text-slate-500 px-6">
              Our experts are available from 10:00 AM to 8:00 PM. Please come
              back during these hours for a consultation.
            </p>
            <div className="modal-action">
              <button className="btn" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default Details;

// import React from 'react';

import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { image, adventure_title, eco_friendly_features } = useLoaderData();
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
    <div className="card card-compact bg-base-100 w-96 shadow-xl ml-5 md:ml-0 lg:ml-0">
      <figure>
        <img className="w-20 h-40" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{adventure_title}</h2>
        <p>{eco_friendly_features}</p>
        <div className="card-actions justify-end">
          <button onClick={handleTalkWithExpert} className="btn btn-primary">
            Talk with Expert
          </button>
        </div>
      </div>
      {/* modal */}

      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box text-center">
            <h2 className="text-3xl font-bold my-4 ">Consultation Hours</h2>
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
  );
};

export default Details;

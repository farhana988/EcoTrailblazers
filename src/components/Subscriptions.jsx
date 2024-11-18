/* eslint-disable react/jsx-key */
// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Subscription from "./Subscription";

const Subscriptions = () => {
  const {subsData}= useLoaderData()
 
  return (
    <div>
      <div className=" p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Your Subscription Plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subsData.map(subscription => (
            <Subscription key={subscription.id} subscription={subscription}></Subscription>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;

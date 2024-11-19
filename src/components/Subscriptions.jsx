/* eslint-disable react/jsx-key */
// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Subscription from "./Subscription";
import Heading from "./Heading";

const Subscriptions = () => {
  const {subsData}= useLoaderData()
 
  return (
    <div>
      <div className="container mx-auto px-8 lg:px-0">
       
        <Heading
        title={'Subscription Plans'}
        subtitle={'These subscription plans offer a mix of free and premium content, allowing users to choose based on their level of interest and commitment to eco-conscious travel.'}
        ></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subsData.map(subscription => (
            <Subscription key={subscription.id} subscription={subscription}></Subscription>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;

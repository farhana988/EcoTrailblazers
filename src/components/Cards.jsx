// import React from 'react';

import {  useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";
import Heading from "./Heading";


const Cards = () => {
    const {cardData }= useLoaderData()

    const [cardCount,setCardCount]=useState(3)
    const showMore =()=>{
        setCardCount(prevCount=> prevCount+3)
    }
    return (
        <div className="px-8 lg:px-0 container mx-auto">
         <Heading
         title={'Adventure Experiences'}
         subtitle={'Highlights a curated list of eco-friendly travel activities, including mountain treks, ocean dives, and safaris, each focusing on sustainability and conservation. Detailed information on each experience includes itineraries, sustainability practices, and the environmental impact, ensuring responsible and memorable adventures.'}
         ></Heading>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 
            ">
           {
             cardData.slice(0,cardCount).map(singleData => (<Card key={singleData.id} singleData={singleData}></Card>))
           }
          
           </div>
           <div className="flex justify-end mt-4  ">
          {
            cardCount < cardData.length && 
           (
             <button 
             onClick={showMore}
             className="
             btn bg-primary ring-2 ring-offset-4 ring-primary text-white lg:text-xl mt-5">
                Show More
            </button>
          )
          }
           </div>
        </div>
    );
};

export default Cards;
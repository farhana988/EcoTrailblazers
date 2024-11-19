// import React from 'react';

import {  useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";


const Cards = () => {
    const {cardData }= useLoaderData()

    const [cardCount,setCardCount]=useState(3)
    const showMore =()=>{
        setCardCount(prevCount=> prevCount+3)
    }
    return (
        <div>
          <h2  className="text-4xl font-bold text-center mb-6">
            Adventure Experiences
          </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto
            ">
           {
             cardData.slice(0,cardCount).map(singleData => (<Card key={singleData.id} singleData={singleData}></Card>))
           }
          
           </div>
           
          {
            cardCount < cardData.length && 
           (<div className="flex justify-end mt-4 mr-5 md:mr-0 lg:mr-20">
             <button 
             onClick={showMore}
             className="btn">
                Show More
            </button>
           </div>)
          }
        </div>
    );
};

export default Cards;
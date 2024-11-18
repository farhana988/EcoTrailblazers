// import React from 'react';

import {  useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";


const Cards = () => {
    const data = useLoaderData()
    const cardData = data.cardData
    // console.log(cardData)

    const [cardCount,setCardCount]=useState(4)
    const showMore =()=>{
        setCardCount(prevCount=> prevCount+4)
    }
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto
           ">
           {
             cardData.slice(0,cardCount).map(singleData => (<Card key={singleData.id} singleData={singleData}></Card>))
           }
          
           </div>
           
          {
            cardCount < data.length && 
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
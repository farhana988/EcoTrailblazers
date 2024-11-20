// import React from 'react';

import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";

import Cards from "../components/Cards";
import Subscriptions from "../components/Subscriptions";


const Home = () => {
    const location =useLocation()
   if(location.pathname==='/')
         
       { document.title= 'EcoTrailblazers | Home' }
   
    return (
        <div>
         
             <Banner></Banner>
             <Cards></Cards>
             <Blogs></Blogs>
             <Subscriptions></Subscriptions>
             
        </div>
    );
};

export default Home;
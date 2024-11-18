// import React from 'react';

import Banner from "../components/Banner";
import Blogs from "../components/Blogs";

import Cards from "../components/Cards";
import Subscriptions from "../components/Subscriptions";

const Home = () => {
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
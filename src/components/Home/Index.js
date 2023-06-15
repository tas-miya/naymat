import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './Hero/Index';
import Products from './Products/Index';
import { productData, productDataTwo } from './Products/data';
import Feature from './Feature/Index';


const Home = () => {
    return (
        <>
      <Router>
        <Hero />
        <Products heading='Choose your favorite' data={productData}/>
        <Feature />
        <Products heading='Sweet Treats' data={productDataTwo} />
      </Router>
    </>
    )
}

export default Home

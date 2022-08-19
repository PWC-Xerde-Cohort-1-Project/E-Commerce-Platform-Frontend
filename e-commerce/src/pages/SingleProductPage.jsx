import React from 'react';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import FoodContainer from '../components/foodcontainer/FoodContainer';
import FruitContainer from '../components/fruitscontainer/FruitContainer';
import Faqs from '../components/faqs/Faqs';


const SingleProductPage = () => {
  return (
    <>
      <SingleProduct />
      <FoodContainer title="Food items" />
      <FruitContainer title="Fruits" />
      <Faqs />
    </>
  )
}

export default SingleProductPage
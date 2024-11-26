import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';
import { fetchProducts } from '../redux/actions/productActions';

const ProductListing = () => {
  const dispatch = useDispatch();

  console.log("ProductListing");
  
  useEffect(() => {
    console.log("USE EFFECT RUNNING")
    dispatch(fetchProducts());
  }, []);

  //console.log("ProductListing After");

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

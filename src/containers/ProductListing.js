import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderall = () => {
    return (
      <div className="ui grid container">
        <ProductComponent name="allproducts" />
      </div>
    );
  };
  return <>{renderall()}</>;

  // return (
  //   <div className="ui grid container">
  //     <ProductComponent name="allproducts"/>
  //   </div>
  // );
};

export default ProductListing;

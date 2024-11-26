import React from "react";
import {combineReducers} from "redux";
import {productReducer,searchReducer,selectedProductReducer, wishlistReducer} from "./productReducer";

const reducer = combineReducers({
    allproducts:productReducer,
    product:selectedProductReducer,
    wish:wishlistReducer,
    search:searchReducer
})

export default reducer
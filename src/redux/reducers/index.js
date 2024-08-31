import React from "react";
import {combineReducers} from "redux";
import {productReducer,searchReducer,selectedProductReducer, wishlistReducer,mensReducer, womenReducer, groceriesReducer} from "./productReducer";

const reducer = combineReducers({
    allproducts:productReducer,
    product:selectedProductReducer,
    wish:wishlistReducer,
    search:searchReducer,
    mens: mensReducer ,
    women:womenReducer,
    groceries:groceriesReducer,
})

export default reducer
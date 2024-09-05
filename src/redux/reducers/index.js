import React from "react";
import {combineReducers} from "redux";
import {productReducer,searchReducer,selectedProductReducer, wishlistReducer,mensReducer, womenReducer, groceriesReducer, mobileReducer, appReducer, electronicsReducer} from "./productReducer";
import { getAppliances } from "../actions/productActions";

const reducer = combineReducers({
    allproducts:productReducer,
    product:selectedProductReducer,
    wish:wishlistReducer,
    search:searchReducer,
    mens: mensReducer ,
    women:womenReducer,
    groceries:groceriesReducer,
    mobiles:mobileReducer,
    appliances:appReducer,
    electronics:electronicsReducer
})

export default reducer
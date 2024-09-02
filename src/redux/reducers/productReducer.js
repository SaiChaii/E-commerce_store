import { Actiontypes } from '../constants/action-types';
import store from '../store';

const intialstate = {
  products: [],
};

export const productReducer = (state = intialstate, { type, payload }) => {
  switch (type) {
    case Actiontypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case Actiontypes.FETCH_PRODUCTS:
      return { ...state, products: payload.products };
    case Actiontypes.SELECTED_PRODUCTS:
      return state;
    case Actiontypes.REMOVE_SELECTED_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Actiontypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case Actiontypes.FETCH_SPECIFIC_PRODUCT:
      return { ...state, ...payload };
    case Actiontypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return { ...state };
  }
};

const initialWishList = {
  wish: [],
};

export const wishlistReducer = (state = initialWishList, { type, payload }) => {
  switch (type) {
    case Actiontypes.WISH_LISTED_PRODUCT:
      return {
        ...state,
        wish: [...state.wish, payload],
        // wish: state.wish.includes(payload)
        //   ? state.wish.filter((item) => item !== payload)
        //   : [...state.wish, payload],
      };
    default:
      return state;
  }
};

export const searchReducer = (
  state = { searchWord: '' },
  { type, payload }
) => {
  switch (type) {
    case Actiontypes.SEARCH_ITEM:
      return { ...state, searchWord: payload };
    default:
      return state;
  }
};

export const mensReducer = (state = { data: [] }, { type, payload }) => {
  //console.log(payload.products,"payload.products")
  switch (type) {
    case Actiontypes.MENS_PRODUCTS:
      return { ...state, data: payload.products };
    default:
      return state;
  }
};

export const womenReducer = (state = { wdata: [] }, { type, payload }) => {
  switch (type) {
    case Actiontypes.WOMENS_PRODUCT:
      return { ...state, wdata: payload.products };
    default:
      return state;
  }
};


export const groceriesReducer=(state={groceries:[]},{type,payload})=>{
  switch(type){
    case Actiontypes.GROCERIES:
      return {...state,groceries:payload}
    default:
      return state;
  }
}
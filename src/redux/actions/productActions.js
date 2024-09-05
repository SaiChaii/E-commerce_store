import { Actiontypes } from '../constants/action-types';
import fakeStoreApi from '../../apis/fakeStoreApi';
import dummyJSON from '../../apis/dummyJSON';

export const fetchProducts = () => {
  return async function (dispatch) {
    const response = await dummyJSON.get('/products');
    console.log('fetchProducts');
    dispatch({
      type: Actiontypes.FETCH_PRODUCTS,

      payload: response.data,
    });
  };
};

export const FetchMensProducts = () => {
  return async function (dispatch) {
    console.log('before');
    const response = await dummyJSON.get('/products/category/mens-shirts');
    console.log('mens data fetched');
    dispatch({
      type: Actiontypes.MENS_PRODUCTS,
      payload: response.data,
    });
  };
};

export const FetchGroceries = () => {
  return async function (dispatch) {
    console.log('before');
    const response = await dummyJSON.get('/products/category/groceries');
    console.log('groceries data fetched');
    dispatch({
      type: Actiontypes.GROCERIES,
      payload: response.data,
    });
  };
};

export const fetchElectronics=()=>{
  return async function(dispatch){
    const response= await dummyJSON("/products/category/tablets")
    dispatch({
      type:Actiontypes.ELECTRONICS,
      payload:response.data
    })
  }
}

export const FetchWomensProducts = () => {
  return async function (dispatch) {
    const response = await dummyJSON.get('/products/category/womens-dresses');
    dispatch({
      type: Actiontypes.WOMENS_PRODUCT,
      payload: response.data,
    });
  };
};

export const SearchValue = (payload) => {
  return {
    type: Actiontypes.SEARCH_ITEM,
    payload: payload,
  };
};

export const fetchProductDetail = (id) => {
  return async function (dispatch) {
    const response = await dummyJSON.get(`/products/${id}`);
    dispatch({
      type: Actiontypes.FETCH_SPECIFIC_PRODUCT,
      payload: response.data,
    });
  };
};

export const getMobiles = (payload) => {
  return async function (dispatch) {
    const response = await dummyJSON.get('/products/category/smartphones');
    dispatch({
      type: Actiontypes.MOBILES,
      payload: response.data,
    });
  };
};

export const getAppliances=(i)=>{
  return async function(dispatch){
    const response=await dummyJSON('/products/category/home-decoration')
    dispatch ({
      type:Actiontypes.APPLIANCES,
      payload:response.data
    })
    
  }
}

export const setProducts = (payload) => {
  return {
    type: Actiontypes.SET_PRODUCTS,
    payload: payload,
  };
};

export const selectProducts = (payload) => {
  return {
    type: Actiontypes.SELECTED_PRODUCTS,
    payload: payload,
  };
};

export const removeselectProducts = (payload) => {
  return {
    type: Actiontypes.REMOVE_SELECTED_PRODUCTS,
    payload: payload,
  };
};

export const wishlistedProduct = (payload) => {
  return {
    type: Actiontypes.WISH_LISTED_PRODUCT,
    payload: payload,
  };
};

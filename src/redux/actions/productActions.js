import { Actiontypes } from '../constants/action-types';
import fakeStoreApi from '../../apis/fakeStoreApi';

export const fetchProducts = () => {
  return async function (dispatch) {
    const response = await fakeStoreApi.get('/products');
    console.log('fetchProducts');
    dispatch({
      type: Actiontypes.FETCH_PRODUCTS,

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
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({
      type: Actiontypes.FETCH_SPECIFIC_PRODUCT,
      payload: response.data,
    });
  };
};

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

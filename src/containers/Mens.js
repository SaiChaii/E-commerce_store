import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMensProducts } from '../redux/actions/productActions';
import store from '../redux/store';
import { useEffect } from 'react';
import ProductComponent from './ProductComponent';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import InfiniteScroll from 'react-infinite-scroll-component';

const Mens = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchMensProducts());
  }, []);

  
  const rendermens = () => {
    return (
      <div className="ui grid container">
        <ProductComponent name="mens"/>
      </div>
    );
  };
  return <>{rendermens()}</>;
};

export default Mens;

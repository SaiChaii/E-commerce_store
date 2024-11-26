import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchWomensProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useMemo } from 'react';

const Womens = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchWomensProducts());
  }, []);
  const wdata=useSelector((state)=>state.women.wdata)

  const renderWomens = () => {
    return (
      <div className="ui grid container">
        
        <ProductComponent name="womens"/>
        
      </div>
    );
  };
  return <>{renderWomens()}</>;
};

export default Womens;

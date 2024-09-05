import { useDebugValue, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMobiles } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const Mobile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMobiles());
  }, []);
  const rendermobiles = () => {
    return (
      <div className="ui grid container">
        <ProductComponent name="mobiles" />
      </div>
    );
  };
  return <>{rendermobiles()}</>;
};

export default Mobile;

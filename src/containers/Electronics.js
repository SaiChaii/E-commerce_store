import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchElectronics } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const Electronics = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchElectronics());
  }, []);
  const displayElectronics = () => {
    return (
      <div className="ui grid container">
        <ProductComponent name="electronics" />
      </div>
    );
  };

  return <>{displayElectronics()}</>
};

export default Electronics;

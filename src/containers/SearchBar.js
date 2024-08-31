import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchValue } from '../redux/actions/productActions';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [searchStr, setSearchStr] = useState('');

  const dispatch = useDispatch();
  

  const handleInputChange = (e) => {
    setSearchStr(e.target.value);
    dispatch(SearchValue(e.target.value));
  };

  return (
    <>
    <img
        src="../../search-icon.png"
        style={{
          position: 'absolute',
          top: '25px',
          left: '8px',
          height: '25px',
          width: '28px',
          backgroundColor: "white" 
        }}
      />
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchStr}
        onChange={handleInputChange}
        style={{ padding: '10px', paddingLeft: '30px' }}
      />
    </div>
    </>
  );
}

export default SearchBar;

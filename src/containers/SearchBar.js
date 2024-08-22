import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchValue } from '../redux/actions/productActions';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  
  const dispatch=useDispatch()
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
        dispatch(SearchValue(inputValue))
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
    </div>
  );
}

export default SearchBar;
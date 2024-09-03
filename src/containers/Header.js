import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="ui fixed menu" style={{ color: 'white' }}>
      <div className="ui container center">
        <Link to="/home" style={{ color: 'black' }}>
          <h1>FakeShop</h1>
        </Link>
        <Link to="/mens" style={{ color: 'black' }}>
          <h1>Mens</h1>
        </Link>
        <Link to="/women" style={{ color: 'black' }}>
          <h1>Womens</h1>
        </Link>
        <Link to="/kids" style={{ color: 'black' }}>
          <h1>Kids</h1>
        </Link>
      </div>

      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="three-buttons">
        <Link to="/profile">
          <img src="../../user-icon.png" style={{ height: 30, width: 30 }} />
        </Link>
        <p style={{ color: 'black' }}>Profile</p>
      </div>
      <div className="three-buttons">
        <Link to="/wishlist">
          <img src="../../wishbefore.png" style={{ height: 30, width: 30 }} />
        </Link>
        <p style={{ color: 'black' }}>WishList</p>
      </div>
      <div className="three-buttons">
        <img src="../../bag.png" style={{ height: 30, width: 30 }} />
        <p style={{ color: 'black' }}>Bag</p>
      </div>
    </div>
  );
};

export default Header;

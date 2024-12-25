import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="ui fixed menu" style={{display:'flex',flexDirection:'row', color: 'white' }}>
      <div className="ui container center">
        <Link to="/home" style={{ color: 'black' }}>
          <h1 style={{fontSize:"3em"}}>FakeShop</h1>
        </Link>
      </div>

      <div className="search-bar" style={{margin: "10px 0 10px 10px"}}>
        <SearchBar />
      </div>
      <div className="three-buttons">
        <Link to="/profile">
          <img src="../../user-icon.png" alt="profile-img"style={{ height: 30, width: 30 }} />
        </Link>
        <p style={{ color: 'black' }}>Profile</p>
      </div>
      <div className="three-buttons">
        <Link to="/wishlist">
          <img src="../../wishbefore.png" alt="wishlist-img"style={{ height: 30, width: 30 }} />
        </Link>
        <p style={{ color: 'black' }}>WishList</p>
      </div>
      <div className="three-buttons">
        <img src="../../bag.png" alt="bag-img" style={{ height: 30, width: 30 }} />
        <p style={{ color: 'black' }}>Bag</p>
      </div>
    </div>
  );
};

export default Header;

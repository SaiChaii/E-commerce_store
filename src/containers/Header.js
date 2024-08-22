import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SearchBar from "./SearchBar";

const Header =()=>{
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h1>
                    FakeShop
                </h1>
            </div>
            <div className="search-bar">
                <SearchBar />
            </div>
            <Link to="/wishlist">
                <button className="header-button">Go to Wishlist</button>
            </Link>
        </div>
    )
}

export default Header;
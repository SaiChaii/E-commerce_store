import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SearchValue } from "../redux/actions/productActions";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [searchStr, setSearchStr] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchStr(e.target.value);
    dispatch(SearchValue(e.target.value));
  };

  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <>
        <img
          src="../../search-icon.png"
          style={{ padding: "0 0 0 5px", width: "25px" }}
          alt="search-icon"
        />

        <input
          type="text"
          placeholder="Search..."
          value={searchStr}
          onChange={handleInputChange}
        />
      </>
    </div>
  );
}

export default SearchBar;

import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "react-spinner";

const ProductComponent = (props) => {
  const product = useSelector((state) => state.allproducts.products); //array of objects
  const mens = useSelector((state) => state.mens.data);
  const searchText = useSelector((state) => state.search.searchWord);
  const appliances = useSelector((state) => state.appliances.data);
  const women = useSelector((state) => state.women.wdata);
  const mobiles = useSelector((state) => state.mobiles.mobiles);
  const groceries = useSelector((state) => state.groceries.groceries);
  const electronics = useSelector((state) => state.electronics.data);

  const [filterData, setFilteredData] = useState([]);

  const [count, setCount] = useState(5);

  const [state, setState] = useState({});

  localStorage.setItem("WishListButton", "0");

  useEffect(() => {
    setState({
      items: filterData.slice(0, count),
      hasMore: true,
    });
  }, [filterData]);

  const fetchMoreData = () => {
    let newItems = [];
    if (count + 2 < filterData.length) {
      newItems = filterData?.slice(count, count + 5);
    }
    setCount(count + 5);
    setTimeout(() => {
      setState({ ...state, items: [...state.items, ...newItems] });
    }, 500);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY + window.innerHeight;
  //     const scrollEndPosition = document.body.offsetHeight;

  //     if (scrollPosition >= scrollEndPosition * 0.1) {
  //       fetchMoreData();
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [state.items,state.hasMore, count]);

  useEffect(() => {
    if (props.name == "mobiles") {
      setFilteredData(mobiles);
    } else if (props.name == "apps") {
      //const mens = useSelector((state) => state.mens.data);
      setFilteredData(appliances);
    } else if (props.name == "groceries") {
      //const mens = useSelector((state) => state.mens.data);
      setFilteredData(groceries);
    } else if (props.name == "electronics") {
      //const mens = useSelector((state) => state.mens.data);
      setFilteredData(electronics);
    } else if (props.name == "mens") {
      //const mens = useSelector((state) => state.mens.data);
      setFilteredData(mens);
    } else if (props.name == "womens") {
      //const women = useSelector((state) => state.women.wdata);
      setFilteredData(women);
    } else if (props.name == "allproducts") {
      setFilteredData(product);
    } else if (searchText) {
      const filteredArray = product?.filter((data) =>
        data.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filteredArray);
    }
  }, [
    searchText,
    product,
    props.name,
    mens,
    women,
    mobiles,
    appliances,
    groceries,
    electronics,
  ]);

  const renderList = useMemo(() => {
    return (
      <InfiniteScroll
        dataLength={state?.items?.length || 0}
        next={fetchMoreData}
        hasMore={state.hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: "30px",
          overflowY: "auto",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        {state.items?.map((product) => {
          const { id, title, price, category, images } = product;
          return (
            <div className="content-container">
              <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                  <div className="ui link cards">
                    <div className="card">
                      <div className="image">
                        <img
                          src={images[0]}
                          alt={title}
                          style={{ height: "400px", width: "290px" }}
                        />
                      </div>
                      <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    );
  }, [state.items]);

  return (
    <div className="infinte-scroll-outerdiv" style={{ align: "center" }}>
      {renderList}
    </div>
  );
};

export default ProductComponent;

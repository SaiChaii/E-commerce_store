import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from 'react-spinner';

const ProductComponent = (props) => {
  const product = useSelector((state) => state.allproducts.products); //array of objects
  //console.log(product);
  const mens = useSelector((state) => state.mens.data);
  const searchText = useSelector((state) => state.search.searchWord);
  
  const women = useSelector((state) => state.women.wdata);
  //console.log(props.name);
  // console.log(mens)
  const [filterData, setFilteredData] = useState([]);

  const [count, setCount] = useState(5);

  const [state, setState] = useState({});

  localStorage.setItem('WishListButton', '0');

  useEffect(() => {
    //console.log("filterDataDebug")
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
    console.log("props.name:",props.name)
    if (props.name == 'mens') {
      //const mens = useSelector((state) => state.mens.data);
      console.log(mens,"mens");
      setFilteredData(mens);
      
    } else if (props.name == 'womens') {
      //const women = useSelector((state) => state.women.wdata);
      console.log(women,"women")
      setFilteredData(women);
      
    } else if (props.name == 'allproducts') {
      setFilteredData(product);
      console.log("allproducts")
    } else if (searchText) {
      const filteredArray = product?.filter((data) =>
        data.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filteredArray);
    }
    
  }, [searchText, product, props.name,mens,women]);

  //console.log(filterData, 'filterData');
  const renderList = useMemo(() => {
    return (
      <InfiniteScroll
        dataLength={state?.items?.length || 0}
        next={fetchMoreData}
        hasMore={state.hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridGap: '30px',
          overflowY: 'auto',
          padding: '20px',
          minHeight: '100vh',
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
                          style={{ height: '400px', width: '290px' }}
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
    <div className="infinte-scroll-outerdiv" style={{ align: 'center' }}>
      {renderList}
    </div>
  );
};

export default ProductComponent;

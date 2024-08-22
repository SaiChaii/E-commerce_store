import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from 'react-spinner';

const ProductComponent = () => {
  const product = useSelector((state) => state.allproducts.products); //array of objects
  //console.log(product);

  const searchText = useSelector((state) => state.search.searchWord);

  const [filterData, setFilteredData] = useState([]);

  const [count, setCount] = useState(4);

  const [state, setState] = useState({});

  useEffect(() => {
    //console.log("filterDataDebug")
    setState({
      items: filterData.slice(0, count),
      hasMore: true,
    });
  }, [filterData]);

  const fetchMoreData = () => {
    // if (state?.items?.length >= filterData?.length) {
    //   setState({ hasMore: false });
    //   return;
    // }
    // const newItems = filterData?.slice(count, count + 4);
    //console.log(newItems);
    let newItems=[]
    if (count + 2 < filterData.length) {
      newItems = filterData?.slice(count, count + 4);
    }
    setCount(count + 4);
    setTimeout(() => {
      setState({ ...state, items: [...state.items, ...newItems] });
    }, 500);
    console.log(state.items);
    // if (!state.hasMore) {
    //   return;
    // }

    // const newItems=filterData.slice(count,count+2)

    // setState({
    //   items: state.items.concat(newItems),
    //   hasMore: count + 2 < filterData.length,
    // });
    // setCount(count + 2);
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
    if (searchText) {
      const filteredArray = product?.filter((data) =>
        data.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filteredArray);
    } else {
      setFilteredData(product);
    }
  }, [searchText, product]);

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
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '30px',
          overflowY: 'auto',
          padding: '20px',
          minHeight: '100vh',
        }}
      >
        {state.items?.map((product) => {
          const { id, title, price, category, image } = product;
          return (
            <>
              <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                  <div className="ui link cards">
                    <div className="card">
                      <div className="image">
                        <img src={image} alt={title} />
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
            </>
          );
        })}
      </InfiniteScroll>
    );
  }, [state.items]);

  return <>{renderList}</>;
};

export default ProductComponent;

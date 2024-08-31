import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const WishList = () => {
  const dispatch = useDispatch();
  localStorage.setItem('WishListButton', '1');
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const allproducts = useSelector((state) => state.allproducts.products);
  // const product =useSelector((state)=>state.wish.wish)
  const wishListProduct = JSON.parse(localStorage.getItem('wishList') || '[]');
  // console.log(allproducts, 'allproducts');
  // console.log(typeof allproducts[0].id);
  // console.log(wishListProduct, 'wishListProducts');

  const product = [];
  allproducts.forEach((element) => {
    if (wishListProduct.includes(element.id)) {
      product.push(element);
    }
  });

  console.log(product, 'product');

  return (
    <>
      {(product &&
        product?.map((a) => {
          const { id, title, price, category, image } = a;
          return (
            <div className="ui grid container">
              <div className="four wide column" key={id}>
                <Link to={`/products/${id}`}>
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
            </div>
          );
        })) || <>Enter some values into wishList</>}
    </>
  );
};

export default WishList;

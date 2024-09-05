import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const WishList = () => {
  const dispatch = useDispatch();
  // localStorage.setItem('WishListButton', '1');
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem('User'));
  console.log(user,"user");
  
  const list = user.wishlist;
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
      {(list &&
        list?.map((a) => {
          const { id, title, price, category, images } = a;
          return (
            <div className="ui grid container">
              <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                  <div className="ui link cards">
                    <div className="card">
                      <div className="image">
                        <img src={images[0]} alt={title} />
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
        })) || <h1><Link to="/login">Login</Link>/<Link to='/sign-up'>SignUp</Link> to view your wishlist</h1>}
    </>
  );
};

export default WishList;

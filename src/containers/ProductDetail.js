import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../redux/actions/productActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import {
  selectProducts,
  removeselectProducts,
  wishlistedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { id, images, title, price, category, description } = product;
  const { productId } = useParams();
  const loginUser = localStorage.getItem("User")
    ? JSON.parse(localStorage.getItem("User"))
    : null;
  const wishList = loginUser?.wishlist;
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProductDetail(productId));
    return () => {
      dispatch(removeselectProducts());
    };
  }, [productId]);
  const [iswled, setiswled] = useState(
    wishList?.some((obj) => obj.id == productId)
  );
  const wishlist = useMemo(() => {
    return (
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={images} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                  <br />
                  <button
                    className="header-button"
                    onClick={() => {
                      if (loginUser) {
                        const updatedWishlist = wishList.some(
                          (x) => x.id === product.id
                        )
                          ? (setiswled(false),
                            [...wishList.filter((x) => x.id !== product.id)])
                          : (setiswled(true), [...wishList, product]);
                        const newloginUser = {
                          ...loginUser,
                          wishlist: updatedWishlist,
                        };
                        localStorage.setItem(
                          "User",
                          JSON.stringify(newloginUser)
                        );
                      } else {
                        history.push("/login");
                      }
                    }}
                  >
                    {iswled ? "Wishlisted" : "Wishlist"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }, [wishList, product]);

  return <>{wishlist}</>;
};
export default ProductDetail;

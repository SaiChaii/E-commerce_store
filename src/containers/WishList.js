import React from "react";
import { useSelector } from "react-redux";

const WishList =()=>{

    const product =useSelector((state)=>state.wish.wish)
  

    console.log(product,"product");
    
   
    return <>{product?.map((a)=>{
        const {id,title,price,category,image}=a
        return (
            <div className="four wide column" key={id}>
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
            </div>
        )
    })}</>
    
}

export default WishList;
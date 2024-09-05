import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchGroceries } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const Groceries=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(FetchGroceries())
    },[])
    const data=useSelector((state)=>state.groceries.groceries.products);
    console.log(data)
    const renderGroceries = () => {
        return (
          <div className="ui grid container">
            <ProductComponent name="groceries"/>
          </div>
        );
      };

    return <>{renderGroceries()}</>
}

export default Groceries;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchGroceries } from "../redux/actions/productActions";

const Groceries=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(FetchGroceries())
    },[])
    const data=useSelector((state)=>state.groceries.groceries.products);
    console.log(data)
    return (
        <></>
    )
}

export default Groceries;
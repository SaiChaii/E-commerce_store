
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getAppliances } from "../redux/actions/productActions"
import ProductComponent from "./ProductComponent"


const Appliances=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAppliances())
    },[])
    const renderapps = () => {
        return (
          <div className="ui grid container">
            <ProductComponent name="apps" />
          </div>
        );
      };
      return <>{renderapps()}</>;
}

export default Appliances
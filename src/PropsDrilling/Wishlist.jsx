
import React,{ useContext } from "react";
import { userContext } from "./Homepage";
const  {data}  = useContext(userContext);
const Wishlist = () => {
    return ( <div>
        <h4>Wishlist : {data}</h4>

    </div> );
}
 
export default Wishlist; 
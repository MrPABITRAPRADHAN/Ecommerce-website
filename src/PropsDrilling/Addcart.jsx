import Wishlist from "./Wishlist";
import { useState } from "react";
import  { useContext } from "react";
import { userContext } from "./Homepage";

const Addcart = (data) => {
    return ( <div>
        <h3>Addcart :{data}</h3>
         <Wishlist/>
    </div> );
}
 
export default Addcart;
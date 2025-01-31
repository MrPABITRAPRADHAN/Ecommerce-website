import React from "react";
import Addcart from "./Addcart";
import { useContext } from "react";
import { userContext } from "./Homepage";
import { useState } from "react";

const Navbar = (data) => {
    return ( 

   <div>
 <h2>Navbar:{data}</h2>
 <Addcart/>
   </div>
        
 

    );
}

export default Navbar; 
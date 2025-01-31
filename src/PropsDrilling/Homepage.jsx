import React, {useState} from 'react'
import Navbar from './Navbar'; 

import {createContext} from 'react';

export let userContext = createContext();
const Homepage = () => {
    let [data,setData] = useState(0);

function change(){
   setData(data+1);
}
    return ( 
        <userContext.Provider value={data}>
             <button onClick={change}>Increment</button>
            <h1> HomePage :{data}</h1>
            <Navbar/>

        </userContext.Provider>
        
     );
}
 
export default Homepage;
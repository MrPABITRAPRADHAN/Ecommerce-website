import React, {useState} from 'react';
import '../Style/Userlogin.css'

const Userlogin = () => {
    let [username, setUsername] = useState("");
    console.log(username);
    let [password, setPassword] = useState("");
    console.log(password);
    
    function login(){
        if(username=='pabitra' && password== 'Mrpabi@000'){
            alert("User logged ")
        }
        else{
            alert("Invalid username and password")
        }
    }

    return ( 
        <div className='userlogin'>
            {/* <h2>this is user login</h2> */}
            <form action="" className='form'>
                <label htmlFor="">
                    Username :
                </label>
                <input type="text" placeholder='  Enter username' value={username}
                onChange={(e)=>{setUsername(e.target.value)}} required/>
                <label htmlFor="">
                    Password :
                </label>
                <input type="text" placeholder='  Enter password' value={password}
                onChange={(e)=>{setPassword(e.target.value)}} required/>
                <button onClick={login}>User Login</button>
            </form>
        </div>
     );
}
 
export default Userlogin;
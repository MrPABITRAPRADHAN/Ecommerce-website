import axios from 'axios'
import '../Style/AdminSignup.css'
import signupImg from '../images/shop.jpg'
import React,{useState}  from 'react';
const AdminSignup = () => {
let {email, setEmail} = useState("")
let {password, setPassword} = useState("")
let {name, setName} = useState("")
let {phone, setphone} = useState("")

const SignupSubmit = () =>{
   axios.post('https://localhost:1000/Admin')
   .then((res)=>{
     alert("Signup successful")
   })
   .catch((rej)=>{
    console.log("Signup failed")
   })
}

  return ( 
    <div className="adminsignup">
      <div className="outer">
       <div className='img'>
       <img src={signupImg} alt="img" />
       </div>

      <form onSubmit={SignupSubmit}>
      <label htmlFor="">Name</label>
      <input type="text" placeholder='Enter name' value={name} onChange={(e)=>{setName(e.target.value)}} />
      <label htmlFor="">Email</label>
      <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <label htmlFor="">Password</label>
      <input type="password" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <label htmlFor="">Phone</label>
      <input type="text" placeholder='Enter Phone' value={phone} onChange={(e)=>{setphone(e.target.value)}} />
      <button type='submit' onClick={SignupSubmit} style={{backgroundColor:"black",color:"white", margin:"10px"}}>Sign Up</button>
      </form>
      </div>
     

    </div>
   );
}
 
export default AdminSignup;
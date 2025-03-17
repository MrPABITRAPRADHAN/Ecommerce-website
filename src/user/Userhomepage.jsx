import React from 'react'
import UserNavbar from '../user/UserNavbar'
import Userfooter from '../user/Userfooter'
import Userviewproducts from '../user/Userviewproducts'

function Userhomepage() {
  return (
    <div className="Userhomepage" style={{backgroundColor:"lightgray" , height:"100vh",width:"100vw"}}> 
      <UserNavbar/>
        <Userviewproducts/>
      <Userfooter/>
    </div>
  )
}

export default Userhomepage

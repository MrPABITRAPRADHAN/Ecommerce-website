import "tailwindcss";
import UserNavbar from '../user/UserNavbar'
import WelcomeLeftSide from '../user/WelcomeLeftSide'
import WelcomeRightImage from '../images/welcomeRimage.png'
import {  Routes, Route } from "react-router-dom";
import UserAbout from './UserAbout'
// import Userfooter from '../user/Userfooter'
// import Userviewproducts from '../user/Userviewproducts'

function Userhomepage() {
  return (
    <div className="Userhomepage w-screen p-10 flex item-center">    

         <div className="rotateSquare bg-blue-900 h-dvh w-50 absolute bottom-69 right-0 rounded-3xl transform rotate-45 ">
         </div> 
     <UserNavbar/>
      <div className="welcomecard flex flex-wrap item-center justify-center w-250 h-80  gap-10 ml-10 mt-">
        <WelcomeLeftSide />
        <img src={WelcomeRightImage} alt="image" className="h-70 w-96 z-10 rounded-lg" style={{marginLeft:"20px"}} />
      </div>

      
    </div>
  )
}

export default Userhomepage

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Adminlogin from "./Components/Adminlogin";
import Userlogin from "./user/Userlogin";
// import Landing from "./Components/Landing";
import FormExample from './Components/AdminSignup'
import AdminHomePage from "./Components/AdminHomePage";
import Userhomepage from "./user/Userhomepage";
import Usersignup from "./user/Usersignup";
import Backend from "./Backend";
import Userviewproducts from "./user/Userviewproducts";
import UserAbout from "./user/UserAbout";
import Contact from "./user/Contact";
import UserCart from "./user/UserCart";
// import Homepage from "./PropsDrilling/Homepage";

const App = () => {
    return ( 
        <div className="app" style={{width:"100vw"}}>
            <BrowserRouter>
             <Routes>

                <Route path="/allnotes" element={<Backend/>} />
                {/* <Route path="/" element={<Landing/>} /> */}
                <Route path="/adminlogin" element={<Adminlogin/>} />
                <Route path="/adminsignup" element={<FormExample/>}></Route>
                <Route path="/adminhomepage/*" element={<AdminHomePage/>}></Route>
                <Route path="/userlogin" element={<Userlogin/>}></Route>
                <Route path="/usersignup" element={<Usersignup/>}></Route>
                {/* <Route path="/userhomepage/*" element={<Userhomepage/>}></Route> */}
                <Route path="/*" element={<Userhomepage/>}></Route>

                <Route path="/userAbout" element={<UserAbout/>}></Route>
                <Route path="/userViewProducts" element={<Userviewproducts/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/userCart" element={<UserCart/>}></Route>

             </Routes>
            </BrowserRouter>

            {/* <Homepage/> */}
            
        </div>
     );
}
 
export default App;
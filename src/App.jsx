import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminlogin from "./Components/Adminlogin";
import Userlogin from "./Components/Userlogin";
import Landing from "./Components/Landing";
import FormExample from './Components/AdminSignup'
import AdminHomePage from "./Components/AdminHomePage";
// import Homepage from "./PropsDrilling/Homepage";

const App = () => {
    return ( 
        <div className="app">
            <BrowserRouter>
             <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/adminlogin" element={<Adminlogin/>} />
                <Route path="/userlogin" element={<Userlogin/>}/>
                <Route path="/adminsignup" element={<FormExample/>}></Route>
                
                <Route path="/adminhomepage/*" element={<AdminHomePage/>}></Route>
                
             </Routes>
            </BrowserRouter>

            {/* <Homepage/> */}
            
        </div>
     );
}
 
export default App;
import { Routes, Route} from 'react-router-dom'
import AdminAddProducts from "./AdminAddProducts";
import AdminViewItems from "./AdminViewItems";
import AdminDashboard from "./AdminDashboard";
import AdminNavbar from "./AdminNavbar";
import Adminfooter from './Adminfooter'
import UpdateProducts from './UpdateProducts';
import '../Style/AdminHomepage.css'
const AdminHomePage = () => {
    return ( 
        <div className="Adminhomepage" style={{height:"full", width:"100vw"}}>
            <AdminNavbar/>
             
          
           <Routes>
               <Route path='/' element={<AdminDashboard/>} />
               <Route path='/viewitems' element={<AdminViewItems/>} />
               <Route path='/addproducts' element={<AdminAddProducts/>} />
               <Route path={`/updateProduct/*`} element={<UpdateProducts/>} />

            </Routes>
        
            <Adminfooter/>
        </div>
        
     );
}
 
export default AdminHomePage;
import { NavLink} from 'react-router-dom';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ekart from '../images/ekart.png'
import Button from 'react-bootstrap/Button';


function UserNavbar() {
  return (
     <div className="AdminNavbar">
                <div className="logo">
                   <img src={ekart} alt="logo" />
                </div>
                <div className="links">
                    <NavLink to='/' className='li'>Home</NavLink>
                    <NavLink to='/userAbout' className='li'>About</NavLink>
                    <NavLink to='/userViewProducts' className='li'>Products</NavLink> 
                    <NavLink to='/contact' className='li'>Contact</NavLink>
                    <Button variant="outline-warning">LogOut</Button>
                    <NavLink to='/userCart' className='li'><ShoppingCartIcon/>Cart</NavLink>
    
                </div>
    
                
                
            </div>
  );
}

export default UserNavbar;
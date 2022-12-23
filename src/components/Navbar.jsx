import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <div className="flex justify-between items-end my-5" >
            <div>
                <Link to={'/'}>
                    <img src={logo} className="logo" alt="Logo" />
                </Link> 
            </div>
            <div>   
                <Link to={'/login'}>
                    <FontAwesomeIcon icon={faUserGear} className="mx-3"/>
                    <span>Admin</span>
                </Link>
            </div>
        </div>
    );
}
export default Navbar;
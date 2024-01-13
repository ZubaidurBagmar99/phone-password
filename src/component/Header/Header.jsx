import { Link } from "react-router-dom";
import './Header.css';


const Header = () => {
    return (
        <nav className="nav nav-tabs  p-2  text-bg-light text-decoration-none text-dark    ">
            
            <Link to="/" className="text-dark text-decoration-none">Home</Link>
            {/* <Link className="text-dark text-decoration-none">Login</Link> */}
            
            {/* <Link to="/register-rbs"className="text-dark text-decoration-none">Register RBS</Link> */}
            <Link to="/shop"className="text-dark text-decoration-none">Shop</Link>
            <Link to="/details"className="text-dark text-decoration-none">Details</Link>
            <Link to="/invest"className="text-dark text-decoration-none">Invest</Link>
            <Link to="/society"className="text-dark text-decoration-none">Society</Link>
            <Link to="/cart"className="text-dark text-decoration-none">Cart</Link>
            <Link to="/account"className="text-dark text-decoration-none">Account</Link>
            <Link to="/login"className="text-dark text-decoration-none">Sign In</Link>
            <Link to="/register"className="text-dark text-decoration-none">Sign Up</Link>
            
        </nav>
    );
};

export default Header;
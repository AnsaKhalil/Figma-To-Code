import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return <div className="navbar">
        <Link to="/"><img src={logo} className="navbar-logo-img"/></Link>
        <div className="navbar-links">
        <Link to="/programs">Programs</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/features">Features</Link>
        <Link to="/teaching">Teaching</Link>
        </div>
        <Link to="/masterclass"><button className="navbar-btn">Free Masterclasses</button></Link>
    </div>
}
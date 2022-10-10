import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navegador">
            <ul>
                <Link to="/category/perros"><li>Perros</li></Link>
                <Link to="/category/gatos"><li>Gatos</li></Link>
                <Link to="/category/otros"><li>Otros</li></Link>
            </ul>
            <Link to="/cart"><CartWidget /></Link>
        </nav>
    )
};

export default Navbar;
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav className="navegador">
            <ul>
                <li><a href=""></a>Perros </li>
                <li><a href=""></a>Gatos</li>
                <li><a href=""></a>Ofertas</li>
                <li><a href=""></a>Nosotros</li>
            </ul>
            <CartWidget />
        </nav>
    )
};

export default Navbar;
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="cabecera">
      <Link className="logo" to="/"><img src="./Multimedia/logo.jpg" alt=""></img></Link>
      <div className="navImagen">
        <img src="Multimedia/perritosHeader.jpg" alt="" />
        <Navbar/>
      </div>
    </header>
  )
};

export default Header;

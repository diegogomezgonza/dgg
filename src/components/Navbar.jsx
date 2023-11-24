import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-bottom fixed-middle text-center">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects">Proyectos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/draws">Dibujos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


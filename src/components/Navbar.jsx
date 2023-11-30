import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-left text-center p-5">
      <ul className="navbar-list">
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


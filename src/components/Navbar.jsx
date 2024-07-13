import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar text-center p-5 position-fixed end-0">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/draws" className="dcLink mx-2">DC</Link>
          <Link to="/onepiece" className="dcLink mx-2">OnePiece</Link>
          <Link to="/berserk" className="dcLink mx-2">Berserk</Link>
          <Link to="/eldenring" className="dcLink">EldenRing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


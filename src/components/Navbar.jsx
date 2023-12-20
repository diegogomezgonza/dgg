import { Link } from "react-router-dom";
import "./css/Navbar.css"; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar text-center p-5 position-fixed end-0">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/draws" className="dcLink">DC</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


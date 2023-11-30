import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar text-center p-5 position-fixed end-0">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/draws">DC</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


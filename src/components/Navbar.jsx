import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'><Link to="/">Home</Link></li>
        <li className='navbar-item'><Link to="/projects">Dibujos</Link></li>
        <li className='navbar-item'><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
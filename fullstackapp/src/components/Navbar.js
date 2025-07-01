import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
         
        <span className="brand-name"><img src="/assets/images/logo.svg" alt="Flipr Logo" className="navbar-logo" /></span>
      </div>
      <ul className="navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/projects">About Products</Link></li>
        <li className='nav-contact'><Link to="/contacts">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

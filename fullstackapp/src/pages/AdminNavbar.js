import React from 'react';
import './AdminNavbar.css';
import { Link } from 'react-router-dom';

function AdminNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
         
        <span className="brand-name">ADMIN DASHBOARD</span>
      </div>
      <ul className="navbar-right">
        <li><Link to="/addprojects">Add Project</Link></li>
        <li><Link to="/addclients">Add Clients</Link></li>
        <li><Link to="/admin/subscribers">Subscribers</Link></li>
        <li  ><Link to="/admin/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;

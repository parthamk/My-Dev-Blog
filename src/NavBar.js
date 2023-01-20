import React from 'react';
import logo from './assets/dp.png';
// import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <p className="navbar-logo-text">Full-stack Journey</p>
      </div>
    </nav>
  );
}

export default NavBar;

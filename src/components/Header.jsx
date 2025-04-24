import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Header.css'; 
import logo from '../assets/logodark.png';


const Header = () => {
  return (
    <header className="header custom-header text-white p-3">
    <div className="container d-flex align-items-center justify-content-between">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      {/* Navegación */}
      <nav>
        <ul className="nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-dark fs-5" to="/">INICIO</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fs-5" to="/Services">PRODUCTOS</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Header;

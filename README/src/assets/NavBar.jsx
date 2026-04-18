import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="lo1" />
      </div>

      {/* زر الهامبرجر */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* روابط النافبار */}
      <ul className={`navbar-nav ${isOpen ? "active" : ""}`}>
        <li><Link className="nav-link-item" to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link className="nav-link-item" to="/Register" onClick={closeMenu}>Register</Link></li>
        <li><Link className="nav-link-item" to="/Login" onClick={closeMenu}>Login</Link></li>
        <li><Link className="nav-link-item" to="/UserProfile" onClick={closeMenu}>User Profile</Link></li>
        <li><Link className="nav-link-item" to="/Review" onClick={closeMenu}>Review</Link></li>
        <li><Link className="nav-link-item" to="/ChemicalTools" onClick={closeMenu}>Chemical Tools</Link></li>
      </ul>
    </nav>
  );
}

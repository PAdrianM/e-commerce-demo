import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  theme?: string; // clase CSS que corresponde a tema navbar
}

const Navbar: React.FC<NavbarProps> = ({ theme = "standard" }) => {
  return (
    <nav className={`navbar ${theme}`}>
      {" "}
      {/* Se aplica tema dinamico proveniente de Layout.tsx */}
      <div className="navbar-logo">🍽 Logo</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#menu">Menu</Link>
        </li>
        <li>
          <Link to="#about">About Us</Link>
        </li>
        <li>
          <Link to="#location">Location</Link>
        </li>
        <li>
          <Link to="#contact">Contact Us</Link>
        </li>
      </ul>
      <button className="order-btn">Ordenar Ya</button>
    </nav>
  );
};

export default Navbar;

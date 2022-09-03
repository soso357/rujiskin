
import React, { useState } from "react";
import "./Navbar.css";
import { useId } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Rujiskin</span>

      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/home">About</Link>
        <a href="/products">Products</a>
        <a href="/home">Home </a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};



export default Navbar;

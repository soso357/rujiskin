import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo.svg";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        <Link to="/home">
          <Logo />
        </Link>
      </span>

      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
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

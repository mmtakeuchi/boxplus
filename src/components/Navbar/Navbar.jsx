import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="link">
        BoxPlus
      </Link>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import React from "react";

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav id="navbar" className="header">
      <Link to="/">Phones</Link>
    </nav>
  );
};

export default Navbar;

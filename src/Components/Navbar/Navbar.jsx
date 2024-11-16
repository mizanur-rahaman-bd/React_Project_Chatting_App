import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to={""}>
          <FaUser />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RiUserShared2Fill } from "react-icons/ri";

const Navbar = () => {
  // Variable
  const negivate = useNavigate();

  // redux data
  const sliceUser = useSelector((state) => state.currentUser.value);

  // Function
  const handleLogOut = () => {
    negivate("/login");

    localStorage.removeItem("user");
  };

  return (
    <>
      <nav className="navbar">
        <Link to={"/allusers"}>
          <FaUser />
        </Link>
        <Link to={"/friendreq"}>
          <FaUserPlus />
        </Link>
        <Link to={'/sendreq'}>
        <RiUserShared2Fill />
        </Link>
        <Link to={""}>
          <FaUserAltSlash />
        </Link>
        <Link to={"/"}>
          <div className="w-[50px] h-[50px] bg-gray-400 rounded-full border-[4px] border-Brand_Color overflow-hidden">
            <img src={sliceUser?.photoURL} alt="user" />
          </div>
        </Link>

        <Link to={""}>
          <HiUsers />
        </Link>
        <Link to={""}>
          <BiSolidMessageDetail />
        </Link>
        <button className="button" onClick={handleLogOut}>
          <IoLogOut />
        </button>
      </nav>
    </>
  );
};

export default Navbar;

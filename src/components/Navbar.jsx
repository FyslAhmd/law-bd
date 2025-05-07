import React from "react";
import { Link, NavLink } from "react-router";
import navLogo from "../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <NavLink className="px-3 py-2 rounded text-base font-semibold" to="/">
        Home
      </NavLink>
      <NavLink
        className="px-3 py-2 rounded text-base font-semibold"
        to="/bookings"
      >
        My-Bookings
      </NavLink>
      <NavLink
        className="px-3 py-2 rounded text-base font-semibold"
        to="/blogs"
      >
        Blogs
      </NavLink>
      <NavLink
        className="px-3 py-2 rounded text-base font-semibold"
        to="/contact"
      >
        Contact Us
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-3 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <a className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <img src={navLogo} alt="" className="w-8" />
            Law.BD
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/contact">
          <a className="btn text-white text-base rounded-full border-none bg-green-600 hover:bg-green-500">
            Contact Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

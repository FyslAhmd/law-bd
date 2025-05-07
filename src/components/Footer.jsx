import React from "react";
import footerLogo from "../assets/logo-footer.png";
import { NavLink } from "react-router";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center text-white bg-black p-10">
      <aside className="flex gap-4">
        <img src={footerLogo} className="w-12" alt="" />
        <span className="text-2xl font-bold">Law.BD</span>
      </aside>
      <nav>
        <ul className="flex flex-col md:flex-row">
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
        </ul>
      </nav>
      <nav>
        <div className="flex items-center gap-6 p-2">
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <FaYoutube size={28} />
          </a>
          <a href="https://x.com/" target="_blank">
            <FaTwitter size={24} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

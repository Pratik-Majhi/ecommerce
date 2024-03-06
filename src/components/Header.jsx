import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className="flex justify-between shadow-xl items-center py-5 px-10">
      <div className="logo">
        <img src="/vite.svg" alt="" />
      </div>
      <nav className="space-x-3">
        <Link to={"/"}>Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="buttons flex items-center gap-5">
        <CartButton />
        <button className="bg-blue-700 text-white px-5 py-2 rounded">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
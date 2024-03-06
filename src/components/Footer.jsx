import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-10 bg-gray-800 text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="links">
        <h3>Useful Link</h3>
        <ul className="flex flex-col gap-2 my-5">
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>
      <div className="links">
        <h3>Useful Link</h3>
        <ul className="flex flex-col gap-2 my-5">
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>
      <div className="links">
        <h3>Useful Link</h3>
        <ul className="flex flex-col gap-2 my-5">
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>
      <div className="links">
        <h3>Useful Link</h3>
        <ul className="flex flex-col gap-2 my-5">
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Portfolio
      </Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

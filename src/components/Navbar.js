import React from "react";
import { Link } from "react-router-dom";
import LangDropList from "./LangDropList";
import ThemeToggler from "./ThemeToggler";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Portfolio
      </Link>
      <ul>
        <li><LangDropList /></li>
        <li><ThemeToggler /></li>
      </ul>
    </nav>
  );
}

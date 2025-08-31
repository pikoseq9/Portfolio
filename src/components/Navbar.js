import React from "react";
import { Link } from "react-router-dom";
import LangDropList from "./LangDropList";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <Logo />
      </Link>
      <div className="right-nav">
        <LangDropList />
        <ThemeToggler />
      </div>
    </nav>
  );
}

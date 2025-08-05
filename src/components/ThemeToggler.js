import React, { useState } from "react";
import "@theme-toggles/react/css/DarkSide.css";
import { DarkSide } from "@theme-toggles/react";

export default function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <DarkSide
      toggled={theme === "dark"}
      toggle={handleClick}
      duration={750}
      className="darkside-toggle"
    />
  );
}

import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>{year} &#169; Portfolio - Patryk W</p>
    </footer>
  );
}

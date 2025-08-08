import React from "react";
import { Link } from "react-router-dom";

export default function LinkCard({ to, page }) {
  return (
    <Link to={to}>
      <div className="link-card">
        <h1>{page}</h1>
      </div>
    </Link>
  );
}

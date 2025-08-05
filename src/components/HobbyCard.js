import React from "react";

export default function HobbyCard({ hobby, emoji }) {
  return (
    <div className="hobby-content">
      <h1>{emoji}</h1>
      <h2>{hobby}</h2>
    </div>
  );
}

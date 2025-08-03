import React from "react";

export default function GitHubButton({ link }) {
  const handleClick = (e) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <button onClick={handleClick} className="github-button">
      <b>Github repository</b> &#128279;
    </button>
  );
}

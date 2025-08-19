import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function GitHubButton({ link }) {
  const { languageData } = useContext(LanguageContext);
  const handleClick = (e) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <button onClick={handleClick} className="github-button">
      <b>{languageData.projects_page.repository}</b> &#128279;
    </button>
  );
}

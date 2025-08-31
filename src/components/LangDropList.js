import React, { useContext} from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function LangDropList() {
  const { setLanguage, language, languageData } = useContext(LanguageContext);

  if (!languageData.languages) return null;

  return (
    <select
    className="language-switch"
    onChange={(e) => setLanguage(e.target.value)}
    value={language}
  >
    {Object.entries(languageData.languages).map(([key, label]) => (
      <option key={key} value={key}>{label}</option>
    ))}
  </select>
  );
}

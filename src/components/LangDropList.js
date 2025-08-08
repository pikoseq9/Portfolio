import React, { useContext} from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function LangDropList() {
  const { setLanguage, language } = useContext(LanguageContext);

  const languages = ["Polish", "English"];

  const handleSelect = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
  };

  return (
    <select
      name="language-switch"
      className="language-switch"
      onChange={handleSelect}
    >
      {languages.map((lang) => (
        <option key={lang} value={lang.toLowerCase()}>{lang}</option>
      ))}
    </select>
  );
}

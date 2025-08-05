import React, { useState } from "react";

export default function LangDropList() {
    const [language, setLanguages] = useState("English");

    const languages = ["Polish", "English", "German"];

    const handleChange = (e) => {
        setLanguages(e.target.value.toString());
        console.log({language})
    }

    return (
        <select name="language-switch" onChange={handleChange}>
            {
                languages.map((lang) => (<option value={lang.toLowerCase()}>{lang}</option>))
            }
        </select>
    )
}
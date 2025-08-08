import React, {createContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("English");
    const [languageData, setLanguageData] = useState({});

    useEffect(() => {
        getData()
    }, [language]);

    const getData = () => {
        const dataURL = `/languages/${language.toLowerCase()}.json`

        fetch(dataURL)
      .then((response) => response.json())
      .then((data) => setLanguageData(data))
      .catch((error) => console.error('Error fetching language data:', error));
    };

    return (
        <LanguageContext.Provider value={{language, setLanguage, languageData}}>
            {children}
        </LanguageContext.Provider>
    );
}

export { LanguageContext, LanguageProvider };

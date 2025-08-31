import React, {createContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("english");
    const [languageData, setLanguageData] = useState({
        profile_card: {
            age: "",
            bio: "",
            hobbies: "",
            hobby1: "",
            hobby2: "",
            hobby3: "",
            hobby4: ""
        },
        links: {
            projects: "Projects",
            contact: "Contact",
            blog: "Blog"
        },
        languages: {
            polish: "Polish",
            english: "English"
        },
        projects_page: {
            loading: "Loading projects",
            repository: "Github repository"
        },
        contact_page: {
            header: "Contact me",
            description1: "Email me at: ",
            description2: "Find me on LinkedIn, link is put in the <b>About me</b> section"
        }
    });

    useEffect(() => {
        const getData = () => {
        const dataURL = `/languages/${language}.json`; // już używamy klucza lowercase
        fetch(dataURL)
            .then((response) => response.json())
            .then((data) => setLanguageData(data))
            .catch((error) => console.error("Error fetching language data:", error));
        };

        getData();
    }, [language]);

    return (
        <LanguageContext.Provider value={{language, setLanguage, languageData}}>
            {children}
        </LanguageContext.Provider>
    );
}

export { LanguageContext, LanguageProvider };

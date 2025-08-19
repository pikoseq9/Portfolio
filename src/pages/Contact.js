import React, { useContext } from "react"
import ContactCard from "../components/ContactCard";
import { LanguageContext } from "../Context/LanguageContext";

export default function Contact() {
  const { languageData } = useContext(LanguageContext);
  const contactType = languageData.contact_page || {};
  
  return (
    <div className="contact-container">
      <h1>{contactType.header || "Contact me"}</h1>
      <div className="contact-list">
        {Object.entries(contactType)
          .filter(([key]) => key !== "header") // pomijamy nagłówek
          .map(([name, { description }]) => (
            <ContactCard key={name} name={name} label={name} value={description} />
          ))}
      </div>
    </div>
  );
}

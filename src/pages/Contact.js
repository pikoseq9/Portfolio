import React, { useContext } from "react";
import ContactCard from "../components/ContactCard";
import { LanguageContext } from "../Context/LanguageContext";

export default function Contact() {
  const { languageData } = useContext(LanguageContext);

  const contactType = {
    Email: {
      label: languageData.contact_page.email,
      value: "wekpat@wp.pl",
    },
    LinkedIn: {
      label: languageData.contact_page.linkedin,
      value: "",
    },
  };

  return (
    <div>
      <div className="contact-container">
        <h1>{languageData.contact_page.header}</h1>
        <div className="contact-list">
          {Object.entries(contactType).map(([name, { label, value }]) => (
            <ContactCard key={name} name={name} label={label} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
}

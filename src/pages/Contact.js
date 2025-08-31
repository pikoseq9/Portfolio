import React from "react";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  const contactType = {
    Email: {
      label: "Email me at:",
      value: "wekpat@wp.pl",
    },
    LinkedIn: {
      label: "Find me on LinkedIn, link is put in the About section",
      value: "",
    },
  };

  return (
    <div>
      <div className="contact-container">
        <h1>Contact me</h1>
        <div className="contact-list">
          {Object.entries(contactType).map(([name, { label, value }]) => (
            <ContactCard key={name} name={name} label={label} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
}

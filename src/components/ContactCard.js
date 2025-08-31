import React from "react";

export default function ContactCard({ name, value, label }) {
  return (
    <div className="contact-card">
      <h2>{name}</h2>
      <p dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
}

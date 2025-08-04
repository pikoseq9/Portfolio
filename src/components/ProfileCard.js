import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function ProfileCard() {
  const [age, setAge] = useState(0);
  const profile = {
    name: "Patryk",
    surname: "W",
    dateOfBirth: new Date("2004-11-22"),
    image: "/images/profile.png",
    school:
      "Silesian University of Technology - Computer Sciense at the Faculty of Applied Mathematics",
    hobbies: ["Playing Guitar", "Coding", "Playing Computer Games", "Work out"],
    links: [
      "https://github.com/pikoseq9",
      "https://www.linkedin.com/in/patryk-weklicz-300925363/",
      "https://www.facebook.com/profile.php?id=100015240125732&locale=pl_PL",
    ],
  };

  const getSocialIcon = (url) => {
    if (url.includes("github.com")) return <FaGithub />;
    if (url.includes("linkedin.com")) return <FaLinkedin />;
    if (url.includes("facebook.com")) return <FaFacebook />;
    return null;
  };

  useEffect(() => {
    calculateAge(profile.dateOfBirth);
  }, []);

  function calculateAge(dateOfBirth) {
    let now = new Date();
    let timeDiff = now - dateOfBirth;
    let yearDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
    setAge(yearDiff);
  }

  return (
    <div className="profile-card">
      <div className="profile-card-head">
        <div>
          <h1>
            {profile.name} {profile.surname}
          </h1>
          <h2>Age: {age}</h2>
        </div>
        <img src={profile.image} alt={`${profile.name} ${profile.surname}`} />
      </div>
      <ul className="profile-card-links">
        {profile.links.map((link, idx) => (
          <li key={idx}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {getSocialIcon(link)}
            </a>
          </li>
        ))}
      </ul>

      <p>Still studying: {profile.school}</p>
    </div>
  );
}

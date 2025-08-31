import React, { useContext, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import HobbyCard from "./HobbyCard";
import { LanguageContext } from "../Context/LanguageContext";

export default function ProfileCard({ profile }) {
  const [age, setAge] = useState(0);
  const {languageData} = useContext(LanguageContext);

  useEffect(() => {
    console.log(languageData);
    calculateAge(profile.dateOfBirth);
  }, []);

  function calculateAge(dateOfBirth) {
    let now = new Date();
    let timeDiff = now - dateOfBirth;
    let yearDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
    setAge(yearDiff);
  }

  const getSocialIcon = (url) => {
    if (url.includes("github.com")) return <FaGithub />;
    if (url.includes("linkedin.com")) return <FaLinkedin />;
    if (url.includes("facebook.com")) return <FaFacebook />;
    return null;
  };

  const getEmojiForHobby = (hobby) => {
    switch (hobby) {
      case "hobby1":
        return "🎸";
      case "hobby2":
        return "💻";
      case "hobby3":
        return "🎮";
      case "hobby4":
        return "⚽";
      default:
        return "⭐";
    }
  };

  return (
    <div className="profile-card">
      <div className="profile-card-head">
        <div>
          <h1>
            {profile.name} {profile.surname}
          </h1>
          <h2>{languageData.profile_card.age}: {age}</h2>
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
      <p>
        {languageData.profile_card.bio}
      </p>
      <h2>{languageData.profile_card.hobbies}</h2>
      <div className="hobby-container">
        {["hobby1","hobby2","hobby3","hobby4"].map((key) => (
          <HobbyCard 
            key={key} 
            hobby={languageData.profile_card?.[key]} 
            emoji={getEmojiForHobby(key)} 
          />
        ))}
      </div>
    </div>
  );
}

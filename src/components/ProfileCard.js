import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import HobbyCard from "./HobbyCard";

export default function ProfileCard({ profile }) {
  const [age, setAge] = useState(0);

  const getSocialIcon = (url) => {
    if (url.includes("github.com")) return <FaGithub />;
    if (url.includes("linkedin.com")) return <FaLinkedin />;
    if (url.includes("facebook.com")) return <FaFacebook />;
    return null;
  };

  const getEmojiForHobby = (hobby) => {
    switch (hobby) {
      case "Playing Guitar":
        return "🎸";
      case "Programming":
        return "💻";
      case "Playing Computer Games":
        return "🎮";
      case "Working out":
        return "⚽";
      default:
        return "⭐";
    }
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
      <p>
        Still studying at {profile.school}. Currently exploring frontend
        development with React, but I’ve also built projects ranging from a
        desktop school management system to Bash scripts for setting up a TFTP
        server to boot a Ubuntu ISO. I’m familiar with technologies such as
        JavaScript, C#, C++, Python, and SQL. Currently, I’m aspiring to secure
        a frontend developer internship to further grow as a software developer.
      </p>
      <h2>Hobbies</h2>
      <div className="hobby-container">
        {profile.hobbies.map((hobby) => (
          <HobbyCard
            key={hobby}
            hobby={hobby}
            emoji={getEmojiForHobby(hobby)}
          />
        ))}
      </div>
    </div>
  );
}

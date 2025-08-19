import { useContext } from "react";
import LinkCard from "../components/LinkCard";
import ProfileCard from "../components/ProfileCard";
import { LanguageContext } from "../Context/LanguageContext";

export default function About() {
  const { languageData } = useContext(LanguageContext);
  const profile = {
    name: "Patryk",
    surname: "W",
    dateOfBirth: new Date("2004-11-22"),
    image: "/images/profile.png",
    school:
      "Silesian University of Technology - Computer Sciense at the Faculty of Applied Mathematics",
    hobbies: [
      "Playing Guitar",
      "Programming",
      "Playing Computer Games",
      "Working out",
    ],
    courses: [
      "React 18 Course 2025 - Learn React JS the fast way",
      "Vue - The Complete Guide (incl. Router & Composition API)",
      "OPEN A2 - Kurs do uprawnień A2",
    ],
    links: [
      "https://github.com/pikoseq9",
      "https://www.linkedin.com/in/patryk-weklicz-300925363/",
      "https://www.facebook.com/profile.php?id=100015240125732&locale=pl_PL",
    ],
  };

  const routes = {
    projects: "/projects",
    contact: "/contact",
    blog: "/blog",
  };

  return (
    <div className="about-body">
      <ProfileCard profile={profile} />
      <div className="link-card-container">
        {Object.entries(routes).map(([key, to]) => (
          <LinkCard key={key} to={to} page={languageData.links?.[key]} />
        ))}
      </div>
    </div>
  );
}

import LinkCard from "../components/LinkCard";
import ProfileCard from "../components/ProfileCard";

export default function About() {
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

  const links = {
    Contact: "/contact",
    Projects: "/projects",
  }

  return (
    <div className="about-body">
      <ProfileCard profile={profile} />
      <div className="link-card-container">
        {
          Object.entries(links).map(([page, to]) => (
            <LinkCard to={to} page={page}/>
          ))
        }
      </div>
    </div>
  );
}

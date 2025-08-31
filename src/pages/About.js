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
    links: [
      "https://github.com/pikoseq9",
      "https://www.linkedin.com/in/patryk-weklicz-300925363/",
      "https://www.facebook.com/profile.php?id=100015240125732&locale=pl_PL",
    ],
  };

  const links = {
    Projects: "/projects",
    Contact: "/contact",
    Courses: "/courses",
  };

  return (
    <div className="about-body">
      <ProfileCard profile={profile} />
      <div className="link-card-container">
        {Object.entries(links).map(([page, to]) => (
          <LinkCard key={to} to={to} page={page} />
        ))}
      </div>
    </div>
  );
}

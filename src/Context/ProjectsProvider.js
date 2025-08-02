import ProjectsContext from "./ProjectsContext";
import { useState, useEffect } from "react";

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/pikoseq9/repos")
      .then((result) => result.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(projects);

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};

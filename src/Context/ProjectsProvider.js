import ProjectsContext from "./ProjectsContext";
import { useState, useEffect } from "react";

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    fetch("https://api.github.com/users/pikoseq9/repos", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    })
      .then((result) => result.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};

import React, { useContext } from "react";
import ProjectsContext from "../Context/ProjectsContext";
import ProjectCard from "../components/ProjectCard";
import { LanguageContext } from "../Context/LanguageContext";

export default function Projects() {
  const { languageData } = useContext(LanguageContext);
  const projects = useContext(ProjectsContext);

  return (
    <div>
      <div className="project-grid">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>{languageData.projects_page.loading}</p>
        )}
      </div>
    </div>
  );
}

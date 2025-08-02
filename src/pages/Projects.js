import React, { useContext } from "react";
import ProjectsContext from "../Context/ProjectsContext";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = useContext(ProjectsContext);

  return (
    <div>
      <div className="project-grid">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </div>
  );
}

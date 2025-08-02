import React from "react";
import ProjectsContext from "../Context/ProjectsContext";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card" key={project.id}>
      <h1>{project.full_name}</h1>
      <div className="project-card-content">
        <p>{project.description}</p>
      </div>
    </div>
  );
}

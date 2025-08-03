import React, { useState, useEffect } from "react";
import GitHubButton from "./GitHubButton";

export default function ProjectCard({ project }) {
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    fetch(project.languages_url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    })
      .then((result) => result.json())
      .then((data) => setLangs(Object.keys(data).map((key) => key)))
      .catch((err) => console.error(err));
  }, [project.languages_url]);

  return (
    <div className="project-card" key={project.id}>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div className="project-card-content">
        <ul>
          {langs.length < 1 ? (
            <li>{project.language}</li>
          ) : (
            langs.map((lang) => <li key={crypto.randomUUID()}>{lang}</li>)
          )}
        </ul>
        <GitHubButton link={project.clone_url} />
      </div>
    </div>
  );
}

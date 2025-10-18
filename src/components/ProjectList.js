import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          name={project.name}
          about={project.about}
          technologies={project.technologies || []}
        />
      ))}
    </div>
  );
}

export default ProjectList;

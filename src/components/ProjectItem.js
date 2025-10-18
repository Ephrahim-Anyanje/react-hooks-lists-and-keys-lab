import React from "react";

function ProjectItem(props) {
  const { name, about, technologies } = props;
  const techList = technologies || []; // fallback if undefined

  const techElements = techList.map((tech) => <span key={tech}>{tech}</span>);

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techElements}</div>
    </div>
  );
}

export default ProjectItem;

import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  let technologiesMap = technologies.map((techObj, index) => {
    return <span key={index}>{techObj}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologiesMap}</div>
    </div>
  );
}

export default ProjectItem;

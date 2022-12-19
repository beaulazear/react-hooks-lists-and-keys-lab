import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  let projectsMap = projects.map((projectObj) => {
    return <ProjectItem key={projectObj.id} technologies={projectObj.technologies} name={projectObj.name} about={projectObj.about} />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsMap}</div>
    </div>
  );
}

export default ProjectList;

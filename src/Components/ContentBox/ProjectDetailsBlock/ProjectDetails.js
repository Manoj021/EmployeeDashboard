import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./ProjectDetails.css";

const ProjectDetails = (props) => {
  const ptitles = [
    { name: "Assigned", image: "Assigned", value: "42" },
    { name: "Completed", image: "tickmark", value: "15" },
    { name: "in Process", image: "clock", value: "12" },
    { name: "Pending", image: "Pending", value: "15" },
  ];
  const projectcard = ptitles.map((tt) => {
    return (
      <ProjectCard
        title={tt.name}
        imagename={tt.image}
        value={tt.value}
      ></ProjectCard>
    );
  });
  return <div className="ProjectDetails">{projectcard}</div>;
};

export default ProjectDetails;

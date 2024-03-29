import "./styles.css";
import ProjectImage from "../projectImage";
import ProjectInfo from "../projectInfo";
import { ProjectType } from "../../../types";
import React, { CSSProperties, useState } from "react";

type ProjectProps = {
  project: ProjectType;
  imageAlign: "start" | "end";
};

const Project = ({ project, imageAlign }: ProjectProps) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const toggleClass = () => {
    setIsMouseEnter(!isMouseEnter);
  };

  const getCoordinates = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setCoordinates({ x, y });
  };

  return (
    <div
      className={`project ${imageAlign === "end" ? "projectImageEnd" : ""} ${
        isMouseEnter ? "mouseGradient" : ""
      }`}
      onMouseEnter={toggleClass}
      onMouseLeave={toggleClass}
      onMouseMove={getCoordinates}
      style={
        {
          "--x": `${coordinates.x}px`,
          "--y": `${coordinates.y}px`,
          "--gradient-direction": imageAlign === "end" ? "to bottom left" : "to bottom right",
        } as CSSProperties
      }
    >
      <ProjectImage imgUrl={project.imgUrl} websiteUrl={project.websiteUrl} />
      <ProjectInfo project={project} />
    </div>
  );
};

export default Project;

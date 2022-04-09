import "./styles.css";
import { ProjectType } from "../../../types";
import { CSSProperties, useState } from "react";
import React from "react";

type ProjectInfoProps = {
  project: ProjectType;
};

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const toggleClass = () => {
    setIsMouseEnter(!isMouseEnter);
    console.log("mouse enter");
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
      className={isMouseEnter ? "mouseGradient projectInfo" : "projectInfo"}
      onMouseEnter={toggleClass}
      onMouseLeave={toggleClass}
      onMouseMove={getCoordinates}
      style={
        {
          "--x": `${coordinates.x}px`,
          "--y": `${coordinates.y}px`,
        } as CSSProperties
      }
    >
      <h2>{project.name}</h2>
      <p>{project.about}</p>
      <ul className="stack">
        {project.stack.map((element) => (
          <li key={element} className="stackElement">
            {element}
          </li>
        ))}
      </ul>
      <div className="projectUrls">
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.websiteUrl}
          >
            Website
          </a>
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href={project.githubUrl}>
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;

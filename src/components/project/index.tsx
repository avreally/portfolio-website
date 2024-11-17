import "./styles.css";
import ProjectImage from "../projectImage";
import ProjectInfo from "../projectInfo";
import { ProjectType } from "../../../types";
import { CSSProperties } from "react";

type ProjectProps = {
  project: ProjectType;
  imageAlign: "start" | "end";
};

const Project = ({ project, imageAlign }: ProjectProps) => {
  return (
    <div
      className={`project ${imageAlign === "end" ? "projectImageEnd" : ""}`}
      style={
        {
          "--gradient-direction":
            imageAlign === "end" ? "to bottom left" : "to bottom right",
        } as CSSProperties
      }
    >
      <div className="bg"></div>
      {project.imgUrl ? (
        <ProjectImage imgUrl={project.imgUrl} websiteUrl={project.websiteUrl} />
      ) : null}
      <ProjectInfo project={project} />
    </div>
  );
};

export default Project;

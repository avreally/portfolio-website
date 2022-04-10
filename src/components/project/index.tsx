import "./styles.css";
import ProjectImage from "../projectImage";
import ProjectInfo from "../projectInfo";
import { ProjectType } from "../../../types";

type ProjectProps = {
  project: ProjectType;
  imageAlign: "start" | "end";
};

const Project = ({ project, imageAlign }: ProjectProps) => {
  return (
    <div className={`project ${imageAlign === "end" ? "projectImageEnd" : ""}`}>
      <ProjectImage imgUrl={project.imgUrl} websiteUrl={project.websiteUrl} />
      <ProjectInfo project={project} />
    </div>
  );
};

export default Project;

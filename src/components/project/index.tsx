import "./styles.css";
import ProjectImage from "../projectImage";
import ProjectInfo from "../projectInfo";
import { ProjectType } from "../../../types";

type ProjectProps = {
  project: ProjectType;
  // id: string;
  // name: string;
  // about: string;
  // imgUrl: string;
  // websiteUrl: string;
  // githubUrl: string;
  // stack: string[];
};

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="project">
      <ProjectImage imgUrl={project.imgUrl} />
      <ProjectInfo project={project} />
    </div>
  );
};

export default Project;

import "./styles.css";
import ProjectImage from "../projectImage";
import ProjectInfo from "../projectInfo";
import { ProjectType } from "../../../types";

type ProjectProps = {
  project: ProjectType;
};

const ProjectOdd = ({ project }: ProjectProps) => {
  return (
    <div className="project">
      <ProjectInfo project={project} />
      <ProjectImage imgUrl={project.imgUrl} />
    </div>
  );
};

export default ProjectOdd;

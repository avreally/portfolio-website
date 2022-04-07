import "./styles.css";
import ProjectImage from "../projectImage";
import ProjectInfo from "../projectInfo";
import { ProjectType } from "../../../types";

type ProjectProps = {
  project: ProjectType;
};

const ProjectEven = ({ project }: ProjectProps) => {
  return (
    <div className="project">
      <ProjectImage imgUrl={project.imgUrl} />
      <ProjectInfo project={project} />
    </div>
  );
};

export default ProjectEven;
